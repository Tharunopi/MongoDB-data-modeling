use("books")

// Preparing for subset pattern
db.createCollection("books_subset")
db.createCollection("books_reviews_subset")

db.books_subset.insertMany(
    [
    {
      "id": 1,
      "title": "The Midnight Library",
      "author": "Matt Haig",
      "isbn": "978-0525559474",
      "publication_year": 2020,
      "genre": ["Fiction", "Fantasy", "Philosophy"],
      "publisher": "Viking",
      "pages": 304,
      "rating": 4.2,
      "reviews": [
        {
          "review_id": "R001",
          "reviewer_name": "Sarah Thompson",
          "rating": 5,
          "date": "2023-05-12",
          "review_text": "Absolutely life-changing book! The concept of exploring alternate lives is beautifully executed. Made me reflect deeply on my own choices and what truly matters in life.",
          "helpful_votes": 234
        },
        {
          "review_id": "R002",
          "reviewer_name": "James Miller",
          "rating": 4,
          "date": "2023-06-08",
          "review_text": "A thought-provoking read with a unique premise. Some parts felt a bit repetitive, but the overall message about regret and possibility was powerful.",
          "helpful_votes": 127
        },
        {
          "review_id": "R003",
          "reviewer_name": "Emily Chen",
          "rating": 5,
          "date": "2023-07-22",
          "review_text": "This book came to me at exactly the right time. The writing is elegant and the philosophical questions it raises are profound. Highly recommend for anyone going through a difficult period.",
          "helpful_votes": 189
        }
      ]
    },
    {
      "id": 2,
      "title": "Atomic Habits",
      "author": "James Clear",
      "isbn": "978-0735211292",
      "publication_year": 2018,
      "genre": ["Self-Help", "Psychology", "Productivity"],
      "publisher": "Avery",
      "pages": 320,
      "rating": 4.7,
      "reviews": [
        {
          "review_id": "R004",
          "reviewer_name": "Michael Roberts",
          "rating": 5,
          "date": "2023-04-15",
          "review_text": "The best book on habit formation I've ever read. Practical, actionable, and backed by science. The 1% improvement concept is revolutionary.",
          "helpful_votes": 512
        },
        {
          "review_id": "R005",
          "reviewer_name": "Lisa Anderson",
          "rating": 5,
          "date": "2023-05-20",
          "review_text": "Changed my entire approach to building habits. The four laws are simple yet incredibly effective. I've already seen improvements in my daily routine.",
          "helpful_votes": 387
        },
        {
          "review_id": "R006",
          "reviewer_name": "David Kim",
          "rating": 4,
          "date": "2023-06-30",
          "review_text": "Solid advice with real-world examples. Some concepts overlap with other self-help books, but Clear's framework makes implementation much easier.",
          "helpful_votes": 156
        },
        {
          "review_id": "R007",
          "reviewer_name": "Rachel Green",
          "rating": 5,
          "date": "2023-08-05",
          "review_text": "This should be required reading for everyone. Clear breaks down complex behavioral psychology into digestible, actionable steps.",
          "helpful_votes": 423
        }
      ]
    },
    {
      "id": 3,
      "title": "Project Hail Mary",
      "author": "Andy Weir",
      "isbn": "978-0593135204",
      "publication_year": 2021,
      "genre": ["Science Fiction", "Adventure", "Thriller"],
      "publisher": "Ballantine Books",
      "pages": 496,
      "rating": 4.6,
      "reviews": [
        {
          "review_id": "R008",
          "reviewer_name": "Tom Harrison",
          "rating": 5,
          "date": "2023-03-18",
          "review_text": "Andy Weir does it again! Even better than The Martian. The friendship that develops is heartwarming and the science is fascinating.",
          "helpful_votes": 678
        },
        {
          "review_id": "R009",
          "reviewer_name": "Nina Patel",
          "rating": 5,
          "date": "2023-04-25",
          "review_text": "Couldn't put it down! The humor, the science, and the unexpected emotional depth make this a perfect sci-fi novel.",
          "helpful_votes": 445
        },
        {
          "review_id": "R010",
          "reviewer_name": "Carlos Rodriguez",
          "rating": 4,
          "date": "2023-07-10",
          "review_text": "Entertaining and scientifically intriguing. The mystery unfolds perfectly, though some plot conveniences were a bit too convenient.",
          "helpful_votes": 201
        }
      ]
    },
    {
      "id": 4,
      "title": "Educated",
      "author": "Tara Westover",
      "isbn": "978-0399590504",
      "publication_year": 2018,
      "genre": ["Memoir", "Biography", "Non-Fiction"],
      "publisher": "Random House",
      "pages": 334,
      "rating": 4.5,
      "reviews": [
        {
          "review_id": "R011",
          "reviewer_name": "Jennifer Walsh",
          "rating": 5,
          "date": "2023-02-14",
          "review_text": "An absolutely gripping memoir. Westover's journey from isolation to education is both heartbreaking and inspiring. Her resilience is remarkable.",
          "helpful_votes": 892
        },
        {
          "review_id": "R012",
          "reviewer_name": "Robert Lee",
          "rating": 5,
          "date": "2023-03-30",
          "review_text": "One of the most powerful memoirs I've ever read. The exploration of family, identity, and the transformative power of education is profound.",
          "helpful_votes": 567
        },
        {
          "review_id": "R013",
          "reviewer_name": "Amanda Brooks",
          "rating": 4,
          "date": "2023-05-17",
          "review_text": "Compelling and difficult to read at times. Westover's honesty about her family and her own struggles is admirable.",
          "helpful_votes": 334
        },
        {
          "review_id": "R014",
          "reviewer_name": "Kevin Martinez",
          "rating": 5,
          "date": "2023-06-28",
          "review_text": "A testament to the human spirit. The way Westover questions her own memories and biases adds another layer of depth to an already incredible story.",
          "helpful_votes": 421
        }
      ]
    },
    {
      "id": 5,
      "title": "The Silent Patient",
      "author": "Alex Michaelides",
      "isbn": "978-1250301697",
      "publication_year": 2019,
      "genre": ["Thriller", "Mystery", "Psychological Fiction"],
      "publisher": "Celadon Books",
      "pages": 336,
      "rating": 4.1,
      "reviews": [
        {
          "review_id": "R015",
          "reviewer_name": "Sophie Turner",
          "rating": 5,
          "date": "2023-01-20",
          "review_text": "Mind-blowing twist! Did not see that coming at all. Kept me up all night reading. Perfect psychological thriller.",
          "helpful_votes": 756
        },
        {
          "review_id": "R016",
          "reviewer_name": "Mark Johnson",
          "rating": 3,
          "date": "2023-02-28",
          "review_text": "The twist was good, but the pacing felt slow in the middle. Worth reading for the ending alone.",
          "helpful_votes": 178
        },
        {
          "review_id": "R017",
          "reviewer_name": "Olivia Davis",
          "rating": 4,
          "date": "2023-04-12",
          "review_text": "Gripping psychological thriller with a satisfying payoff. The exploration of trauma and art was fascinating.",
          "helpful_votes": 289
        },
        {
          "review_id": "R018",
          "reviewer_name": "Daniel White",
          "rating": 5,
          "date": "2023-06-15",
          "review_text": "Brilliantly constructed narrative. The unreliable narrator technique is executed perfectly. A must-read for thriller fans.",
          "helpful_votes": 512
        }
      ]
    }
  ]
)

db.books_subset.find({}, {"id": 1})
db.books_subset.replaceOne({_id: ObjectId("68da318df84a5602b425b888")}, {_id: "tharun_the_great"})

// Pipelines to seprate reviews alone in seperate collection

var seprator = [
    {
        $unwind: {
          path: "$reviews",
          preserveNullAndEmptyArrays: false
        }
    },
    {
        $project: {
            _id: 0,
            book_id: "$id",
            title: "$title",
            review_id: "$reviews.review_id",
            reviewer_name: "$reviews.reviewer_name",
            rating: "$reviews.rating",
            date: "$reviews.date",
            review_text: "$reviews.review_text",
            helpful_votes: "$reviews.helpful_votes"
        }
    },
    {
        $out: "books_reviews_subset"
    }
]

var delete_more_than_3 = [
    {
        $addFields: {
          reviews: {$slice: ["$reviews", 3]}
        }
    },
    {
        $merge: {
          into: 'books_subset',
          on: '_id',
          whenMatched: 'replace',
          whenNotMatched: 'discard'
        }
    }
]

sliced = db.books_subset.aggregate(delete_more_than_3)
sliced

db.books_subset.aggregate(seprator)

db.books_reviews_subset.findOne()
db.books_subset.find()