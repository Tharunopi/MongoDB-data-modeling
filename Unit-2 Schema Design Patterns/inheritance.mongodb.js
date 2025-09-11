var first_pipeline = [
  {
    $project: {
      title: 1,
      author: { $ifNull: ["$author", "unspecified"] },
      isbn: "$isbn",
      publisher: "$publisher",
      release_date: "$release_date",
      product_type: "unspecified",
      narrator: "$narrator",
      duration_minutes: "$duration_minutes",
      audio_format: "$audio_format",
      file_format: "$file_format",
      file_size_mb: "$file_size_mb",
      drm_protected: "$drm_protected",
      page_count: "$page_count",
      cover_type: "$cover_type",
      dimensions: "$dimensions"
    }
  },
  {
    $merge: {
      into: "books_collection",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard"
    }
  }
];

db.books_collection.aggregate(first_pipeline);

// using variables for better readability
var find_audio_books = {
  $match:{
    $and: [
      {product_type: "unspecified"},
      {audio_format: {$exists: true}}
    ]
  }
}

var redefine_producttype_audiobook = {
  $set: {product_type: "audiobook"}
}

var merge_stage_audiobook = {
  $merge: {
    into: "books_collection",
    on: "_id",
    whenMatched: "replace",
    whenNotMatched: "discard"
  }
}

db.books_collection.aggregate([
  find_audio_books, 
  redefine_producttype_audiobook, 
  merge_stage_audiobook
]);

// pipeline for ebook

var ebook_and_physicalbook = {
  $set:{
    product_type: {
      $switch:{
        branches: [
          {
            case: {
              $and: [
                {$eq: ["$product_type", "unspecified"]}, 
                {$ne:["$drm_protected", null]}
              ]
            },
            then: "ebook"
          },
          {
            case:{
              $and: [
                {$eq: ["$product_type", "unspecified"]},
                {$ne: ["$cover_type", null]}
              ]
            },
            then: "physical_book"
          }
        ],
        default: "$product_type"
      }
    }
  }
};

var merge_stage_ebook_and_physical_book = {
  $merge: {
    into: "books_collection",
    on: "_id",
    whenMatched: "replace",
    whenNotMatched: "discard"
  }
};

db.books_collection.aggregate([ebook_and_physicalbook, merge_stage_ebook_and_physical_book]);



db.books_collection.countDocuments({product_type: "physical_book"})