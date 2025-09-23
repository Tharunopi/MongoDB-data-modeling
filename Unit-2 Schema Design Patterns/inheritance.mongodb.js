// Adding book type field
const stage_1 = [    
  {$addFields: {book_type: "unspecified"}},
  {
    $merge: {
    into: "books_collection", 
    on: "_id", 
    whenMatched: "replace", 
    whenNotMatched: "discard"}
  }
]

// Setting audiobook 
const stage_2 = [
  {
    $match: {book_type: "unspecified", audio_format: {$exists: true}}
  },
  {
    $addFields: {book_type: "Audio Book"}
  },
  {
    $merge: {
    into: "books_collection", 
    on: "_id", 
    whenMatched: "replace", 
    whenNotMatched: "discard"}
  }
]

// Setting audiobook 
const stage_3 = [
  {
    $match: {book_type: "unspecified", file_format: {$exists: true}}
  },
  {
    $addFields: {book_type: "E-Book"}
  },
  {
    $merge: {
    into: "books_collection", 
    on: "_id", 
    whenMatched: "replace", 
    whenNotMatched: "discard"}
  }
]

// Setting audiobook 
const stage_4 = [
  {
    $match: {book_type: "unspecified", page_count: {$exists: true}}
  },
  {
    $addFields: {book_type: "Printed Book"}
  },
  {
    $merge: {
    into: "books_collection", 
    on: "_id", 
    whenMatched: "replace", 
    whenNotMatched: "discard"}
  }
]

db.books_collection.aggregate(stage_1)
db.books_collection.aggregate(stage_2)
db.books_collection.aggregate(stage_3)
db.books_collection.aggregate(stage_4)

db.books_collection.find({book_type: "Audio Book"})
db.books_collection.aggregate(
  {
    $group: {
      _id: "$book_type",
      counts: {$sum: 1}
    }
  }
)