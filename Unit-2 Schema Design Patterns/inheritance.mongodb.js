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

var specifi_


db.books_collection.find()