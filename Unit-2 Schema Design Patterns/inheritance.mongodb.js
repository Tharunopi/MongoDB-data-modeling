var first_pipeline = [
  {
    $project: {
      title: 1,
      author: { $ifNull: ["$author", "unspecified"] },
      isbn: 1,
      publisher: 1,
      release_date: 1,
      product_type: null
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


db.books_collection.find()