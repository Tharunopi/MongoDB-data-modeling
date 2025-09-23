// use books

db.books_collection.find()
db.books_collection.countDocuments()

const rollup_pipeline = [
    {
        $group: {
            _id: "$book_type",
            count: {$sum: 1},
            average_length_title: {$avg: {$strLenCP: "$title"}}
        }
    }
]

rollup_result = db.books_collection.aggregate(rollup_pipeline)

rollup_result