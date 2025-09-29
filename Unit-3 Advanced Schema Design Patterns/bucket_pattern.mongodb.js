// Preparing field

use("books")

db.createCollection("bucket")

db.bucket.insertMany(
    [
  {
    "id": {
      "book_id": "B0371",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U027",
        "timestamp": {
          "$date": "2025-04-27T18:28:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0404",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U088",
        "timestamp": {
          "$date": "2025-01-16T16:16:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0445",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U182",
        "timestamp": {
          "$date": "2024-09-29T05:19:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0304",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U037",
        "timestamp": {
          "$date": "2025-05-30T01:20:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0005",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-07-24T17:14:42Z"
        }
      },
      {
        "user_id": "U105",
        "timestamp": {
          "$date": "2025-07-04T07:38:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0377",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U005",
        "timestamp": {
          "$date": "2024-10-07T21:23:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0458",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2025-04-10T21:15:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0490",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U137",
        "timestamp": {
          "$date": "2025-08-16T07:11:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0463",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2024-11-30T12:37:13Z"
        }
      },
      {
        "user_id": "U050",
        "timestamp": {
          "$date": "2024-11-16T06:19:27Z"
        }
      },
      {
        "user_id": "U051",
        "timestamp": {
          "$date": "2024-11-02T17:56:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0007",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U059",
        "timestamp": {
          "$date": "2025-05-25T17:36:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0109",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U167",
        "timestamp": {
          "$date": "2025-02-27T10:18:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0271",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2025-08-04T19:19:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0387",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U128",
        "timestamp": {
          "$date": "2025-09-14T04:43:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0196",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U102",
        "timestamp": {
          "$date": "2024-11-29T11:14:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0321",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U043",
        "timestamp": {
          "$date": "2024-11-03T13:46:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0251",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U153",
        "timestamp": {
          "$date": "2025-09-01T00:57:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0416",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U199",
        "timestamp": {
          "$date": "2025-09-27T18:44:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0120",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U112",
        "timestamp": {
          "$date": "2024-12-13T15:58:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0093",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U051",
        "timestamp": {
          "$date": "2025-07-09T16:49:28Z"
        }
      },
      {
        "user_id": "U153",
        "timestamp": {
          "$date": "2025-07-08T04:42:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0074",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2024-11-24T02:21:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0290",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U109",
        "timestamp": {
          "$date": "2025-05-22T16:02:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0445",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U009",
        "timestamp": {
          "$date": "2025-05-13T20:36:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0034",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2025-06-03T21:25:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0427",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U145",
        "timestamp": {
          "$date": "2025-01-05T03:58:25Z"
        }
      },
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2025-01-30T14:40:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0236",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2025-02-10T11:52:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0478",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U084",
        "timestamp": {
          "$date": "2025-03-06T06:46:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0325",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U001",
        "timestamp": {
          "$date": "2025-01-14T19:08:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0021",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2025-08-22T00:32:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0404",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2025-04-22T06:10:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0413",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U182",
        "timestamp": {
          "$date": "2025-04-27T13:29:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0433",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U142",
        "timestamp": {
          "$date": "2025-04-16T09:37:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0448",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U196",
        "timestamp": {
          "$date": "2025-02-05T10:59:17Z"
        }
      },
      {
        "user_id": "U003",
        "timestamp": {
          "$date": "2025-02-02T10:14:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0261",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U093",
        "timestamp": {
          "$date": "2025-08-09T04:12:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0037",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2025-05-14T20:25:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0181",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U112",
        "timestamp": {
          "$date": "2025-05-21T03:40:08Z"
        }
      },
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-05-22T03:06:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0247",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2024-11-06T01:02:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0429",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2025-04-14T08:53:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0268",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2024-12-11T15:26:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0263",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U005",
        "timestamp": {
          "$date": "2025-04-29T16:15:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0135",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U156",
        "timestamp": {
          "$date": "2025-03-03T12:37:05Z"
        }
      },
      {
        "user_id": "U193",
        "timestamp": {
          "$date": "2025-03-26T09:33:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0439",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U164",
        "timestamp": {
          "$date": "2025-08-29T09:09:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0184",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U092",
        "timestamp": {
          "$date": "2025-04-14T15:08:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0196",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U079",
        "timestamp": {
          "$date": "2025-06-21T04:16:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0393",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U198",
        "timestamp": {
          "$date": "2024-11-13T09:45:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0381",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U095",
        "timestamp": {
          "$date": "2025-03-15T09:52:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0165",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U110",
        "timestamp": {
          "$date": "2025-06-13T17:13:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0343",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U100",
        "timestamp": {
          "$date": "2024-10-15T03:13:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0002",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2025-08-10T13:47:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0011",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U146",
        "timestamp": {
          "$date": "2024-11-30T16:02:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0134",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U091",
        "timestamp": {
          "$date": "2024-12-06T11:52:48Z"
        }
      },
      {
        "user_id": "U062",
        "timestamp": {
          "$date": "2024-12-20T00:07:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0329",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U081",
        "timestamp": {
          "$date": "2024-10-09T11:11:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0123",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U036",
        "timestamp": {
          "$date": "2024-11-14T22:20:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0250",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U071",
        "timestamp": {
          "$date": "2025-05-17T19:11:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0451",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U162",
        "timestamp": {
          "$date": "2024-11-01T01:53:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0221",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2025-09-09T10:46:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0308",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U135",
        "timestamp": {
          "$date": "2025-01-22T20:50:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0184",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U004",
        "timestamp": {
          "$date": "2025-02-24T15:14:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0236",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U189",
        "timestamp": {
          "$date": "2024-11-30T21:01:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0453",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U016",
        "timestamp": {
          "$date": "2025-01-31T22:01:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0326",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2025-04-12T08:31:38Z"
        }
      },
      {
        "user_id": "U189",
        "timestamp": {
          "$date": "2025-04-01T09:56:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0031",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U061",
        "timestamp": {
          "$date": "2024-12-05T10:36:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0427",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U049",
        "timestamp": {
          "$date": "2025-06-05T03:50:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0372",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U168",
        "timestamp": {
          "$date": "2025-09-06T10:50:37Z"
        }
      },
      {
        "user_id": "U161",
        "timestamp": {
          "$date": "2025-09-27T20:21:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0157",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U161",
        "timestamp": {
          "$date": "2025-05-22T05:03:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0428",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U004",
        "timestamp": {
          "$date": "2025-05-29T04:44:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0338",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U188",
        "timestamp": {
          "$date": "2025-03-21T11:05:58Z"
        }
      },
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2025-03-19T16:38:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0209",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U087",
        "timestamp": {
          "$date": "2025-05-10T03:22:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0334",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U003",
        "timestamp": {
          "$date": "2025-06-28T22:55:25Z"
        }
      },
      {
        "user_id": "U171",
        "timestamp": {
          "$date": "2025-06-26T13:17:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0407",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U109",
        "timestamp": {
          "$date": "2025-02-02T22:31:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0050",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U152",
        "timestamp": {
          "$date": "2024-11-06T11:04:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0403",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U045",
        "timestamp": {
          "$date": "2025-05-10T15:14:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0442",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U138",
        "timestamp": {
          "$date": "2024-11-18T01:23:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0258",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U107",
        "timestamp": {
          "$date": "2025-03-14T13:59:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0007",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U097",
        "timestamp": {
          "$date": "2025-09-13T05:33:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0398",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U163",
        "timestamp": {
          "$date": "2025-05-11T10:32:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0496",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U114",
        "timestamp": {
          "$date": "2025-03-25T06:35:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0342",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U070",
        "timestamp": {
          "$date": "2024-10-08T03:38:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0133",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U156",
        "timestamp": {
          "$date": "2025-06-28T09:25:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0059",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U004",
        "timestamp": {
          "$date": "2025-09-23T08:17:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0377",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U155",
        "timestamp": {
          "$date": "2025-01-31T10:07:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0360",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-06-25T17:22:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0228",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2025-03-03T08:59:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0333",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U138",
        "timestamp": {
          "$date": "2025-05-03T04:07:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0134",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U052",
        "timestamp": {
          "$date": "2025-04-22T13:12:08Z"
        }
      },
      {
        "user_id": "U025",
        "timestamp": {
          "$date": "2025-04-20T20:07:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0019",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U070",
        "timestamp": {
          "$date": "2025-06-27T19:22:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0147",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U128",
        "timestamp": {
          "$date": "2025-05-08T08:51:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0438",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U093",
        "timestamp": {
          "$date": "2025-06-24T00:52:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0300",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2025-08-29T17:31:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0225",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U022",
        "timestamp": {
          "$date": "2025-04-01T05:02:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0220",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2024-10-15T10:31:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0023",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2024-10-28T13:24:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0144",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-08-11T16:19:57Z"
        }
      },
      {
        "user_id": "U130",
        "timestamp": {
          "$date": "2025-08-14T10:05:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0231",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U077",
        "timestamp": {
          "$date": "2025-02-07T10:03:40Z"
        }
      },
      {
        "user_id": "U038",
        "timestamp": {
          "$date": "2025-02-04T16:09:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0396",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U181",
        "timestamp": {
          "$date": "2025-06-28T23:06:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0288",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U190",
        "timestamp": {
          "$date": "2025-02-02T17:59:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0358",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-07-15T23:03:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0031",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2025-04-26T01:09:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0279",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U025",
        "timestamp": {
          "$date": "2024-11-06T17:50:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0382",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U173",
        "timestamp": {
          "$date": "2025-05-10T17:26:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0270",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U083",
        "timestamp": {
          "$date": "2025-04-03T06:15:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0231",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2025-07-29T13:40:32Z"
        }
      },
      {
        "user_id": "U151",
        "timestamp": {
          "$date": "2025-07-16T02:59:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0230",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U154",
        "timestamp": {
          "$date": "2025-01-11T21:02:26Z"
        }
      },
      {
        "user_id": "U071",
        "timestamp": {
          "$date": "2025-01-27T19:58:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0023",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U124",
        "timestamp": {
          "$date": "2025-09-24T08:28:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0254",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2025-03-11T19:35:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0318",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U115",
        "timestamp": {
          "$date": "2025-05-16T09:15:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0159",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U147",
        "timestamp": {
          "$date": "2025-02-07T19:15:59Z"
        }
      },
      {
        "user_id": "U057",
        "timestamp": {
          "$date": "2025-02-16T08:43:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0474",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U190",
        "timestamp": {
          "$date": "2025-06-19T19:44:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0414",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2024-10-03T20:09:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0126",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U126",
        "timestamp": {
          "$date": "2025-04-18T05:21:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0414",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U167",
        "timestamp": {
          "$date": "2025-03-29T08:50:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0316",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2025-09-27T12:57:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0220",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U066",
        "timestamp": {
          "$date": "2024-12-03T17:45:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0311",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U129",
        "timestamp": {
          "$date": "2025-07-28T15:00:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0309",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2025-04-03T18:10:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0188",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2024-12-30T18:37:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0462",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-04-20T00:41:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0218",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U035",
        "timestamp": {
          "$date": "2025-04-30T12:36:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0409",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2025-04-05T23:55:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0109",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2024-10-31T11:01:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0139",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U163",
        "timestamp": {
          "$date": "2025-07-08T21:56:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0115",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U124",
        "timestamp": {
          "$date": "2025-03-28T17:54:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0080",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U116",
        "timestamp": {
          "$date": "2025-04-12T04:14:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0012",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2024-11-23T00:44:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0260",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U152",
        "timestamp": {
          "$date": "2025-02-22T22:32:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0190",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2025-09-03T20:24:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0064",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U109",
        "timestamp": {
          "$date": "2025-02-11T04:32:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0299",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U011",
        "timestamp": {
          "$date": "2025-08-13T18:45:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0224",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U047",
        "timestamp": {
          "$date": "2025-08-14T23:22:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0101",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U130",
        "timestamp": {
          "$date": "2025-02-15T10:39:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0462",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2025-03-17T12:11:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0130",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U001",
        "timestamp": {
          "$date": "2025-07-16T10:49:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0014",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U005",
        "timestamp": {
          "$date": "2025-08-18T18:13:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0179",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U054",
        "timestamp": {
          "$date": "2025-03-07T06:15:23Z"
        }
      },
      {
        "user_id": "U187",
        "timestamp": {
          "$date": "2025-03-25T09:26:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0445",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U121",
        "timestamp": {
          "$date": "2025-01-25T01:42:13Z"
        }
      },
      {
        "user_id": "U114",
        "timestamp": {
          "$date": "2025-01-09T23:02:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0124",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U069",
        "timestamp": {
          "$date": "2024-10-11T08:09:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0204",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U147",
        "timestamp": {
          "$date": "2025-06-16T08:24:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0262",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U061",
        "timestamp": {
          "$date": "2025-02-01T05:39:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0191",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U088",
        "timestamp": {
          "$date": "2025-05-03T05:05:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0252",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U162",
        "timestamp": {
          "$date": "2025-05-17T21:24:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0450",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-08-05T02:31:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0055",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2025-04-30T17:01:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0347",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U086",
        "timestamp": {
          "$date": "2025-04-18T14:23:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0461",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2025-09-28T08:46:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0493",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2025-08-21T05:00:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0274",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U172",
        "timestamp": {
          "$date": "2024-10-13T00:16:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0241",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2025-02-28T06:46:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0355",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U155",
        "timestamp": {
          "$date": "2024-12-26T04:02:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0083",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U025",
        "timestamp": {
          "$date": "2024-12-06T11:04:16Z"
        }
      },
      {
        "user_id": "U037",
        "timestamp": {
          "$date": "2024-12-24T12:50:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0427",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U080",
        "timestamp": {
          "$date": "2025-08-19T03:21:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0329",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U173",
        "timestamp": {
          "$date": "2025-09-07T17:23:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0245",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-03-15T00:16:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0344",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2025-07-16T19:13:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0439",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2024-12-10T19:41:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0363",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U095",
        "timestamp": {
          "$date": "2025-01-11T17:26:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0406",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U142",
        "timestamp": {
          "$date": "2025-08-17T09:00:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0205",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U158",
        "timestamp": {
          "$date": "2024-09-30T09:05:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0060",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U186",
        "timestamp": {
          "$date": "2024-12-24T14:15:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0113",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U049",
        "timestamp": {
          "$date": "2024-11-14T04:52:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0301",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U085",
        "timestamp": {
          "$date": "2025-03-08T03:44:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0284",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U102",
        "timestamp": {
          "$date": "2025-01-04T20:05:02Z"
        }
      },
      {
        "user_id": "U148",
        "timestamp": {
          "$date": "2025-01-24T02:34:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0114",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U022",
        "timestamp": {
          "$date": "2024-11-06T05:02:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0432",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2025-08-23T06:00:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0247",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U008",
        "timestamp": {
          "$date": "2024-12-08T06:57:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0383",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U052",
        "timestamp": {
          "$date": "2025-07-15T18:48:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0377",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2025-04-16T05:14:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0401",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U062",
        "timestamp": {
          "$date": "2025-07-05T04:12:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0480",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U135",
        "timestamp": {
          "$date": "2025-07-21T19:19:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0126",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U178",
        "timestamp": {
          "$date": "2025-03-13T18:19:09Z"
        }
      },
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2025-03-20T11:29:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0246",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U132",
        "timestamp": {
          "$date": "2025-03-30T08:22:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0157",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U058",
        "timestamp": {
          "$date": "2025-07-28T09:04:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0449",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U101",
        "timestamp": {
          "$date": "2025-03-21T06:13:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0056",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U167",
        "timestamp": {
          "$date": "2024-10-29T17:39:40Z"
        }
      },
      {
        "user_id": "U054",
        "timestamp": {
          "$date": "2024-10-27T19:13:48Z"
        }
      },
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2024-10-14T16:28:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0135",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-06-26T19:41:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0278",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2025-09-16T11:22:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0461",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U010",
        "timestamp": {
          "$date": "2025-07-23T09:25:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0236",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U062",
        "timestamp": {
          "$date": "2024-12-29T11:18:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0006",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2025-04-08T04:11:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0201",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U178",
        "timestamp": {
          "$date": "2025-08-05T07:15:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0447",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U015",
        "timestamp": {
          "$date": "2025-05-29T09:12:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0257",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U054",
        "timestamp": {
          "$date": "2025-06-14T18:28:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0028",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U008",
        "timestamp": {
          "$date": "2024-11-22T03:26:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0251",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U081",
        "timestamp": {
          "$date": "2024-11-08T08:00:11Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0404",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U149",
        "timestamp": {
          "$date": "2024-12-26T04:19:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0361",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2024-12-11T10:56:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0010",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U153",
        "timestamp": {
          "$date": "2025-03-19T04:17:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0028",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U120",
        "timestamp": {
          "$date": "2025-02-11T13:52:16Z"
        }
      },
      {
        "user_id": "U175",
        "timestamp": {
          "$date": "2025-02-25T12:14:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0436",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U026",
        "timestamp": {
          "$date": "2025-09-05T15:21:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0025",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U185",
        "timestamp": {
          "$date": "2024-11-22T12:15:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0469",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U111",
        "timestamp": {
          "$date": "2025-05-07T19:55:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0082",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U141",
        "timestamp": {
          "$date": "2025-01-09T20:17:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0255",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2025-06-30T18:08:07Z"
        }
      },
      {
        "user_id": "U052",
        "timestamp": {
          "$date": "2025-06-21T03:25:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0229",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U121",
        "timestamp": {
          "$date": "2025-08-18T05:50:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0157",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2025-04-10T15:18:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0103",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2025-03-10T02:20:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0304",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U120",
        "timestamp": {
          "$date": "2025-04-29T13:51:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0491",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2024-11-03T09:45:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0011",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U045",
        "timestamp": {
          "$date": "2025-08-03T20:38:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0365",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U167",
        "timestamp": {
          "$date": "2025-07-12T19:16:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0142",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U171",
        "timestamp": {
          "$date": "2025-07-30T20:02:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0094",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U102",
        "timestamp": {
          "$date": "2025-09-19T10:45:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0401",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U117",
        "timestamp": {
          "$date": "2025-05-16T16:12:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0088",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U014",
        "timestamp": {
          "$date": "2024-12-05T19:56:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0433",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-08-16T13:20:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0433",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U148",
        "timestamp": {
          "$date": "2025-02-11T23:06:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0277",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U164",
        "timestamp": {
          "$date": "2025-08-28T11:08:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0427",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U120",
        "timestamp": {
          "$date": "2025-02-03T16:25:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0309",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U141",
        "timestamp": {
          "$date": "2024-12-24T12:28:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0391",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U166",
        "timestamp": {
          "$date": "2025-05-19T08:10:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0287",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2025-03-26T07:44:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0481",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2025-05-12T05:11:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0094",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U183",
        "timestamp": {
          "$date": "2025-05-07T03:40:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0127",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2025-06-07T03:42:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0106",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2024-12-01T06:47:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0134",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U134",
        "timestamp": {
          "$date": "2024-10-08T14:39:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0294",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U013",
        "timestamp": {
          "$date": "2025-01-18T16:27:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0199",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U132",
        "timestamp": {
          "$date": "2025-07-09T03:43:51Z"
        }
      },
      {
        "user_id": "U097",
        "timestamp": {
          "$date": "2025-07-11T11:23:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0032",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U005",
        "timestamp": {
          "$date": "2025-03-03T01:14:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0432",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U149",
        "timestamp": {
          "$date": "2024-10-09T20:34:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0322",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U062",
        "timestamp": {
          "$date": "2025-08-12T23:52:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0332",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U097",
        "timestamp": {
          "$date": "2024-10-18T16:57:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0008",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U042",
        "timestamp": {
          "$date": "2025-04-26T15:16:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0227",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U115",
        "timestamp": {
          "$date": "2025-07-24T17:56:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0230",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2024-10-27T04:14:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0177",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U059",
        "timestamp": {
          "$date": "2024-10-25T17:24:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0446",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U073",
        "timestamp": {
          "$date": "2025-01-17T09:34:50Z"
        }
      },
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2025-01-08T21:26:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0064",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U049",
        "timestamp": {
          "$date": "2025-03-02T07:27:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0270",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2024-12-04T17:32:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0293",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U156",
        "timestamp": {
          "$date": "2025-01-15T09:58:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0317",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2025-01-16T22:03:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0477",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2025-02-13T07:35:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0263",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2024-11-23T06:24:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0263",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U084",
        "timestamp": {
          "$date": "2025-05-06T13:52:45Z"
        }
      },
      {
        "user_id": "U008",
        "timestamp": {
          "$date": "2025-05-27T14:11:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0205",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U164",
        "timestamp": {
          "$date": "2025-02-09T02:42:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0449",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U114",
        "timestamp": {
          "$date": "2025-05-07T16:01:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0405",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U174",
        "timestamp": {
          "$date": "2024-09-30T22:12:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0012",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U094",
        "timestamp": {
          "$date": "2025-08-01T14:43:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0182",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U135",
        "timestamp": {
          "$date": "2025-06-26T22:59:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0204",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-07-14T11:44:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0235",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U008",
        "timestamp": {
          "$date": "2024-10-11T22:54:09Z"
        }
      },
      {
        "user_id": "U016",
        "timestamp": {
          "$date": "2024-10-14T17:42:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0434",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U137",
        "timestamp": {
          "$date": "2024-11-09T18:24:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0273",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U111",
        "timestamp": {
          "$date": "2025-09-10T08:36:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0206",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2025-03-22T08:45:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0028",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U194",
        "timestamp": {
          "$date": "2025-03-14T05:47:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0197",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U028",
        "timestamp": {
          "$date": "2025-07-27T05:07:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0434",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U158",
        "timestamp": {
          "$date": "2025-03-23T12:42:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0220",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U116",
        "timestamp": {
          "$date": "2025-09-14T19:30:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0257",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U005",
        "timestamp": {
          "$date": "2025-09-03T04:50:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0360",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U183",
        "timestamp": {
          "$date": "2025-03-07T17:56:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0282",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U198",
        "timestamp": {
          "$date": "2024-10-20T05:50:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0399",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U056",
        "timestamp": {
          "$date": "2024-12-29T19:06:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0251",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U090",
        "timestamp": {
          "$date": "2025-02-01T00:51:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0330",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2025-01-13T13:05:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0053",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U194",
        "timestamp": {
          "$date": "2025-05-23T10:52:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0062",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U078",
        "timestamp": {
          "$date": "2025-06-14T16:18:11Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0287",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U141",
        "timestamp": {
          "$date": "2025-08-15T20:54:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0275",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U190",
        "timestamp": {
          "$date": "2025-06-08T11:00:37Z"
        }
      },
      {
        "user_id": "U102",
        "timestamp": {
          "$date": "2025-06-03T05:43:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0368",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U106",
        "timestamp": {
          "$date": "2025-02-17T15:37:19Z"
        }
      },
      {
        "user_id": "U119",
        "timestamp": {
          "$date": "2025-02-25T20:47:48Z"
        }
      },
      {
        "user_id": "U061",
        "timestamp": {
          "$date": "2025-02-07T08:31:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0020",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U093",
        "timestamp": {
          "$date": "2025-09-21T12:19:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0076",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2024-11-04T04:59:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0010",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U134",
        "timestamp": {
          "$date": "2025-06-12T18:21:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0106",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2025-07-30T19:28:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0120",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U187",
        "timestamp": {
          "$date": "2024-11-19T22:25:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0154",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U035",
        "timestamp": {
          "$date": "2025-09-09T00:00:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0027",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U183",
        "timestamp": {
          "$date": "2025-01-30T22:26:09Z"
        }
      },
      {
        "user_id": "U090",
        "timestamp": {
          "$date": "2025-01-20T06:36:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0082",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U015",
        "timestamp": {
          "$date": "2025-06-01T23:45:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0261",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U181",
        "timestamp": {
          "$date": "2025-07-02T17:21:42Z"
        }
      },
      {
        "user_id": "U046",
        "timestamp": {
          "$date": "2025-07-05T15:28:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0275",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U106",
        "timestamp": {
          "$date": "2024-10-14T02:20:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0445",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2024-12-30T15:23:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0159",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U023",
        "timestamp": {
          "$date": "2025-04-14T11:36:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0491",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2025-08-28T00:04:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0281",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U183",
        "timestamp": {
          "$date": "2025-08-21T00:14:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0126",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U171",
        "timestamp": {
          "$date": "2024-12-22T21:59:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0455",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U022",
        "timestamp": {
          "$date": "2025-02-15T22:35:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0070",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U080",
        "timestamp": {
          "$date": "2025-05-11T21:50:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0485",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U197",
        "timestamp": {
          "$date": "2024-12-25T06:28:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0202",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U066",
        "timestamp": {
          "$date": "2025-09-13T06:41:02Z"
        }
      },
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2025-09-13T18:59:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0059",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2024-10-31T10:56:51Z"
        }
      },
      {
        "user_id": "U105",
        "timestamp": {
          "$date": "2024-10-01T02:20:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0463",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2025-04-30T23:53:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0447",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U197",
        "timestamp": {
          "$date": "2025-02-03T22:26:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0047",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U026",
        "timestamp": {
          "$date": "2025-06-07T23:32:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0010",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U053",
        "timestamp": {
          "$date": "2025-05-14T17:03:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0102",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U154",
        "timestamp": {
          "$date": "2025-09-02T09:30:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0326",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U069",
        "timestamp": {
          "$date": "2025-09-28T19:58:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0088",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U141",
        "timestamp": {
          "$date": "2025-06-28T07:31:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0183",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U060",
        "timestamp": {
          "$date": "2025-08-31T11:17:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0480",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U088",
        "timestamp": {
          "$date": "2025-09-07T12:02:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0481",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U133",
        "timestamp": {
          "$date": "2025-02-20T18:19:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0045",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2025-09-05T14:54:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0097",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U064",
        "timestamp": {
          "$date": "2024-11-29T23:39:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0490",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U117",
        "timestamp": {
          "$date": "2025-09-13T17:53:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0179",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U141",
        "timestamp": {
          "$date": "2025-08-08T00:49:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0206",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U015",
        "timestamp": {
          "$date": "2025-05-18T14:20:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0097",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U200",
        "timestamp": {
          "$date": "2024-12-18T20:58:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0150",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U106",
        "timestamp": {
          "$date": "2025-09-13T10:59:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0346",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U165",
        "timestamp": {
          "$date": "2025-08-28T22:41:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0278",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U126",
        "timestamp": {
          "$date": "2025-07-09T03:34:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0079",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U087",
        "timestamp": {
          "$date": "2024-11-28T07:17:26Z"
        }
      },
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2024-11-16T00:59:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0475",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U172",
        "timestamp": {
          "$date": "2025-08-19T10:21:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0386",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U091",
        "timestamp": {
          "$date": "2025-04-07T17:57:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0293",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U024",
        "timestamp": {
          "$date": "2025-02-04T23:26:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0098",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2025-06-26T20:58:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0369",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2024-10-24T05:04:28Z"
        }
      },
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2024-10-15T05:58:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0277",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U185",
        "timestamp": {
          "$date": "2024-12-19T07:13:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0074",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2024-12-28T18:59:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0491",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-04-25T04:47:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0091",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U148",
        "timestamp": {
          "$date": "2024-10-20T18:18:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0179",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-04-14T14:15:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0467",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U115",
        "timestamp": {
          "$date": "2025-09-26T21:42:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0091",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2025-04-11T04:06:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0299",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2025-04-04T11:54:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0282",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U018",
        "timestamp": {
          "$date": "2025-01-06T19:28:04Z"
        }
      },
      {
        "user_id": "U094",
        "timestamp": {
          "$date": "2025-01-24T20:12:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0461",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U056",
        "timestamp": {
          "$date": "2024-12-30T05:49:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0124",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U162",
        "timestamp": {
          "$date": "2025-07-31T12:52:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0497",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-03-03T16:40:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0096",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U147",
        "timestamp": {
          "$date": "2025-04-02T23:26:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0016",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U135",
        "timestamp": {
          "$date": "2024-10-24T05:34:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0434",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U074",
        "timestamp": {
          "$date": "2025-08-22T04:33:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0495",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U197",
        "timestamp": {
          "$date": "2025-07-23T08:31:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0333",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U069",
        "timestamp": {
          "$date": "2024-12-17T23:56:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0397",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U173",
        "timestamp": {
          "$date": "2025-01-23T05:23:44Z"
        }
      },
      {
        "user_id": "U167",
        "timestamp": {
          "$date": "2025-01-13T16:32:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0449",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U195",
        "timestamp": {
          "$date": "2024-12-10T15:00:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0024",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2025-02-28T23:48:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0125",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U104",
        "timestamp": {
          "$date": "2024-12-31T22:26:51Z"
        }
      },
      {
        "user_id": "U120",
        "timestamp": {
          "$date": "2024-12-06T10:52:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0428",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U179",
        "timestamp": {
          "$date": "2024-12-16T02:25:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0377",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U151",
        "timestamp": {
          "$date": "2025-08-23T19:57:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0426",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U004",
        "timestamp": {
          "$date": "2025-04-11T19:11:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0461",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U155",
        "timestamp": {
          "$date": "2025-03-13T14:30:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0067",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U119",
        "timestamp": {
          "$date": "2025-05-24T06:00:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0032",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U083",
        "timestamp": {
          "$date": "2025-01-07T10:33:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0320",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U181",
        "timestamp": {
          "$date": "2025-05-01T04:11:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0146",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2025-05-13T06:12:03Z"
        }
      },
      {
        "user_id": "U056",
        "timestamp": {
          "$date": "2025-05-05T01:00:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0480",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2025-08-30T01:44:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0196",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2025-04-13T17:27:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0136",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U011",
        "timestamp": {
          "$date": "2024-11-25T10:41:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0324",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U088",
        "timestamp": {
          "$date": "2025-08-17T22:55:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0480",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U017",
        "timestamp": {
          "$date": "2025-06-22T07:21:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0118",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2025-02-16T00:54:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0432",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U045",
        "timestamp": {
          "$date": "2024-12-04T16:10:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0036",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U030",
        "timestamp": {
          "$date": "2024-11-19T10:30:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0095",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2025-05-20T16:52:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0081",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U055",
        "timestamp": {
          "$date": "2024-11-12T14:38:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0042",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U081",
        "timestamp": {
          "$date": "2025-02-23T21:03:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0209",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2025-03-29T13:22:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0287",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U038",
        "timestamp": {
          "$date": "2025-07-20T11:53:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0303",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U101",
        "timestamp": {
          "$date": "2025-04-21T10:56:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0360",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U013",
        "timestamp": {
          "$date": "2025-01-20T11:35:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0304",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U181",
        "timestamp": {
          "$date": "2025-06-28T08:02:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0456",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U042",
        "timestamp": {
          "$date": "2025-08-16T19:42:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0286",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U191",
        "timestamp": {
          "$date": "2025-06-29T07:12:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0342",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U030",
        "timestamp": {
          "$date": "2025-07-17T00:12:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0451",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U099",
        "timestamp": {
          "$date": "2025-04-18T13:29:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0134",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U059",
        "timestamp": {
          "$date": "2025-06-26T22:14:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0041",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U046",
        "timestamp": {
          "$date": "2025-02-04T11:25:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0254",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U102",
        "timestamp": {
          "$date": "2025-02-14T02:11:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0290",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U077",
        "timestamp": {
          "$date": "2025-03-22T09:00:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0390",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U070",
        "timestamp": {
          "$date": "2025-02-15T13:47:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0124",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U182",
        "timestamp": {
          "$date": "2025-09-09T15:48:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0156",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U107",
        "timestamp": {
          "$date": "2025-05-22T20:06:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0261",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U150",
        "timestamp": {
          "$date": "2025-03-18T06:40:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0188",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2025-03-24T11:34:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0070",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2025-07-05T18:07:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0290",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U163",
        "timestamp": {
          "$date": "2025-08-29T17:13:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0152",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2024-10-01T08:18:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0237",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U141",
        "timestamp": {
          "$date": "2024-11-19T08:58:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0383",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2025-06-28T08:05:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0396",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U110",
        "timestamp": {
          "$date": "2024-10-16T01:10:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0092",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U047",
        "timestamp": {
          "$date": "2025-05-13T01:26:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0479",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U193",
        "timestamp": {
          "$date": "2025-04-30T04:21:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0157",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U108",
        "timestamp": {
          "$date": "2024-10-14T23:37:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0279",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U016",
        "timestamp": {
          "$date": "2024-10-18T05:33:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0424",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-08-19T11:02:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0015",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U099",
        "timestamp": {
          "$date": "2025-05-19T21:37:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0428",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U154",
        "timestamp": {
          "$date": "2025-01-29T17:57:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0220",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U185",
        "timestamp": {
          "$date": "2025-01-18T10:11:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0302",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2025-08-23T23:38:00Z"
        }
      },
      {
        "user_id": "U051",
        "timestamp": {
          "$date": "2025-08-09T01:54:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0337",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2025-07-02T02:21:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0430",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U002",
        "timestamp": {
          "$date": "2024-10-18T20:20:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0002",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U136",
        "timestamp": {
          "$date": "2025-05-25T10:51:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0238",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U190",
        "timestamp": {
          "$date": "2024-12-31T16:51:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0133",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U192",
        "timestamp": {
          "$date": "2025-03-02T10:01:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0319",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2025-06-29T19:52:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0091",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-08-17T09:16:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0429",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U149",
        "timestamp": {
          "$date": "2025-02-20T04:25:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0354",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U150",
        "timestamp": {
          "$date": "2025-06-13T00:12:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0077",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U145",
        "timestamp": {
          "$date": "2025-01-25T14:29:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0033",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U064",
        "timestamp": {
          "$date": "2025-04-16T07:21:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0023",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U009",
        "timestamp": {
          "$date": "2025-01-25T23:14:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0062",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U076",
        "timestamp": {
          "$date": "2025-03-08T22:56:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0439",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U183",
        "timestamp": {
          "$date": "2025-09-14T17:16:53Z"
        }
      },
      {
        "user_id": "U014",
        "timestamp": {
          "$date": "2025-09-10T00:07:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0212",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U067",
        "timestamp": {
          "$date": "2025-08-18T21:28:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0050",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2025-01-08T01:09:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0312",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U109",
        "timestamp": {
          "$date": "2025-02-01T17:45:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0115",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U133",
        "timestamp": {
          "$date": "2025-02-09T10:25:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0423",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2025-06-18T18:45:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0240",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U090",
        "timestamp": {
          "$date": "2025-01-10T18:55:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0117",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U146",
        "timestamp": {
          "$date": "2025-02-12T17:08:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0441",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U088",
        "timestamp": {
          "$date": "2025-07-09T14:27:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0313",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U121",
        "timestamp": {
          "$date": "2025-09-05T12:54:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0435",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U198",
        "timestamp": {
          "$date": "2025-08-15T18:09:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0052",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U033",
        "timestamp": {
          "$date": "2025-08-09T09:04:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0257",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U107",
        "timestamp": {
          "$date": "2025-02-11T21:54:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0114",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U041",
        "timestamp": {
          "$date": "2024-10-16T22:35:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0352",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2025-03-25T13:09:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0025",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2025-09-03T18:22:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0210",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U009",
        "timestamp": {
          "$date": "2025-08-09T22:29:57Z"
        }
      },
      {
        "user_id": "U033",
        "timestamp": {
          "$date": "2025-08-26T05:17:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0349",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U098",
        "timestamp": {
          "$date": "2025-02-27T10:04:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0023",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U086",
        "timestamp": {
          "$date": "2025-06-26T07:05:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0101",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U164",
        "timestamp": {
          "$date": "2025-05-25T22:52:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0467",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2024-12-21T00:54:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0444",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U168",
        "timestamp": {
          "$date": "2025-05-19T08:30:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0017",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U092",
        "timestamp": {
          "$date": "2025-06-16T03:03:52Z"
        }
      },
      {
        "user_id": "U110",
        "timestamp": {
          "$date": "2025-06-30T06:05:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0221",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U185",
        "timestamp": {
          "$date": "2025-05-03T14:43:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0150",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U020",
        "timestamp": {
          "$date": "2025-05-19T07:25:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0222",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2024-11-03T14:58:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0050",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U029",
        "timestamp": {
          "$date": "2024-10-23T22:11:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0145",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-09-23T22:44:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0173",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U180",
        "timestamp": {
          "$date": "2025-08-15T17:59:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0133",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2025-02-20T04:08:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0185",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-08-11T19:16:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0266",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2024-12-13T22:49:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0422",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2024-11-14T20:25:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0481",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U114",
        "timestamp": {
          "$date": "2024-12-24T01:35:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0406",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U106",
        "timestamp": {
          "$date": "2025-04-23T04:46:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0482",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2025-07-23T15:00:11Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0495",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U116",
        "timestamp": {
          "$date": "2024-12-24T04:51:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0346",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U039",
        "timestamp": {
          "$date": "2025-04-20T13:25:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0290",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U073",
        "timestamp": {
          "$date": "2025-07-19T10:09:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0114",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U198",
        "timestamp": {
          "$date": "2025-06-29T20:41:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0238",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2025-01-28T18:41:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0442",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U165",
        "timestamp": {
          "$date": "2025-03-08T03:38:11Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0161",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U106",
        "timestamp": {
          "$date": "2024-10-14T12:26:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0475",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U088",
        "timestamp": {
          "$date": "2025-06-23T10:47:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0495",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U090",
        "timestamp": {
          "$date": "2024-11-04T07:02:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0303",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U057",
        "timestamp": {
          "$date": "2025-08-18T01:52:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0396",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2025-07-22T02:21:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0224",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2025-04-03T22:12:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0163",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U048",
        "timestamp": {
          "$date": "2024-11-14T14:24:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0309",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U126",
        "timestamp": {
          "$date": "2025-03-28T18:22:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0183",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U045",
        "timestamp": {
          "$date": "2025-06-30T21:14:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0198",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U042",
        "timestamp": {
          "$date": "2025-05-17T21:50:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0132",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U033",
        "timestamp": {
          "$date": "2025-04-22T15:30:53Z"
        }
      },
      {
        "user_id": "U188",
        "timestamp": {
          "$date": "2025-04-08T07:05:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0351",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U192",
        "timestamp": {
          "$date": "2025-06-22T09:49:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0249",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U042",
        "timestamp": {
          "$date": "2025-02-08T10:17:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0287",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2025-05-13T22:01:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0308",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U029",
        "timestamp": {
          "$date": "2024-11-22T05:00:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0047",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2025-05-22T08:26:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0073",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U068",
        "timestamp": {
          "$date": "2025-01-22T06:45:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0494",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-02-21T21:38:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0260",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U018",
        "timestamp": {
          "$date": "2025-06-23T05:08:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0463",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U186",
        "timestamp": {
          "$date": "2025-06-17T02:54:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0484",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U200",
        "timestamp": {
          "$date": "2025-01-18T08:12:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0041",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U024",
        "timestamp": {
          "$date": "2025-05-16T22:20:24Z"
        }
      },
      {
        "user_id": "U005",
        "timestamp": {
          "$date": "2025-05-01T06:48:48Z"
        }
      },
      {
        "user_id": "U045",
        "timestamp": {
          "$date": "2025-05-06T08:41:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0293",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U017",
        "timestamp": {
          "$date": "2025-07-28T19:46:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0457",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U085",
        "timestamp": {
          "$date": "2025-07-11T23:50:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0191",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2025-08-21T01:54:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0013",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U143",
        "timestamp": {
          "$date": "2025-02-13T23:06:02Z"
        }
      },
      {
        "user_id": "U048",
        "timestamp": {
          "$date": "2025-02-10T13:24:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0322",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U052",
        "timestamp": {
          "$date": "2025-07-15T07:18:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0097",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-06-26T04:22:07Z"
        }
      },
      {
        "user_id": "U186",
        "timestamp": {
          "$date": "2025-06-25T05:38:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0205",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U081",
        "timestamp": {
          "$date": "2024-12-12T06:02:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0362",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U039",
        "timestamp": {
          "$date": "2025-05-10T22:18:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0331",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U173",
        "timestamp": {
          "$date": "2025-05-28T00:04:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0072",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U199",
        "timestamp": {
          "$date": "2024-11-16T13:43:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0304",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U110",
        "timestamp": {
          "$date": "2025-02-21T06:30:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0432",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U176",
        "timestamp": {
          "$date": "2025-07-08T21:28:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0125",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-05-31T04:33:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0396",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U085",
        "timestamp": {
          "$date": "2025-09-19T18:43:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0327",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U142",
        "timestamp": {
          "$date": "2024-10-14T12:26:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0116",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U090",
        "timestamp": {
          "$date": "2025-02-23T02:32:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0163",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U146",
        "timestamp": {
          "$date": "2024-10-27T22:12:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0338",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2025-06-04T13:01:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0394",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U192",
        "timestamp": {
          "$date": "2024-10-29T10:14:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0200",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U092",
        "timestamp": {
          "$date": "2025-09-02T15:42:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0271",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U100",
        "timestamp": {
          "$date": "2025-05-24T13:55:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0466",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U098",
        "timestamp": {
          "$date": "2024-12-30T05:25:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0361",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U085",
        "timestamp": {
          "$date": "2025-01-10T01:58:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0130",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U133",
        "timestamp": {
          "$date": "2025-06-30T00:54:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0393",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2024-10-07T03:28:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0145",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U117",
        "timestamp": {
          "$date": "2024-10-15T13:01:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0499",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U026",
        "timestamp": {
          "$date": "2025-03-21T00:36:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0286",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U171",
        "timestamp": {
          "$date": "2024-10-12T04:11:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0128",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U010",
        "timestamp": {
          "$date": "2025-08-04T13:35:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0176",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U050",
        "timestamp": {
          "$date": "2024-12-08T04:43:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0140",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U036",
        "timestamp": {
          "$date": "2025-09-08T08:49:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0436",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U108",
        "timestamp": {
          "$date": "2024-10-30T15:58:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0254",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U110",
        "timestamp": {
          "$date": "2024-12-31T11:36:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0375",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U160",
        "timestamp": {
          "$date": "2025-09-08T09:31:19Z"
        }
      },
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2025-09-10T00:19:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0321",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U137",
        "timestamp": {
          "$date": "2025-01-05T22:50:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0488",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U055",
        "timestamp": {
          "$date": "2025-05-03T12:54:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0086",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U064",
        "timestamp": {
          "$date": "2025-05-27T02:56:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0310",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U173",
        "timestamp": {
          "$date": "2025-09-18T18:19:28Z"
        }
      },
      {
        "user_id": "U052",
        "timestamp": {
          "$date": "2025-09-21T12:18:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0040",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U066",
        "timestamp": {
          "$date": "2024-10-11T08:25:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0459",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-07-22T03:28:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0090",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2025-03-26T11:55:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0489",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U031",
        "timestamp": {
          "$date": "2025-07-24T21:03:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0152",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-09-18T23:02:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0017",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U030",
        "timestamp": {
          "$date": "2025-01-08T02:28:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0491",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U186",
        "timestamp": {
          "$date": "2025-02-21T17:24:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0223",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U010",
        "timestamp": {
          "$date": "2024-11-19T13:36:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0268",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U136",
        "timestamp": {
          "$date": "2025-03-10T04:36:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0315",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U026",
        "timestamp": {
          "$date": "2024-10-22T10:37:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0341",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U153",
        "timestamp": {
          "$date": "2025-05-12T08:33:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0364",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U101",
        "timestamp": {
          "$date": "2025-04-12T17:18:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0197",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U083",
        "timestamp": {
          "$date": "2025-01-25T05:43:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0280",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-03-03T19:25:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0175",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U151",
        "timestamp": {
          "$date": "2025-09-26T23:37:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0180",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U027",
        "timestamp": {
          "$date": "2024-12-31T08:28:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0047",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U066",
        "timestamp": {
          "$date": "2025-02-10T10:40:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0368",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2025-01-28T03:12:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0214",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U129",
        "timestamp": {
          "$date": "2024-11-29T15:19:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0338",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U156",
        "timestamp": {
          "$date": "2025-01-28T02:42:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0051",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2025-02-02T14:29:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0290",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2024-11-08T01:54:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0413",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U121",
        "timestamp": {
          "$date": "2025-08-31T00:52:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0017",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U161",
        "timestamp": {
          "$date": "2024-10-24T10:11:48Z"
        }
      },
      {
        "user_id": "U115",
        "timestamp": {
          "$date": "2024-10-26T01:21:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0269",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U055",
        "timestamp": {
          "$date": "2025-09-06T20:09:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0012",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U085",
        "timestamp": {
          "$date": "2025-04-04T21:28:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0440",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2024-11-16T09:33:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0496",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U059",
        "timestamp": {
          "$date": "2025-04-23T21:37:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0454",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U090",
        "timestamp": {
          "$date": "2025-04-03T14:56:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0471",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U176",
        "timestamp": {
          "$date": "2024-09-29T16:17:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0281",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-07-11T09:26:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0192",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2025-08-22T00:45:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0439",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U015",
        "timestamp": {
          "$date": "2025-02-07T05:16:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0107",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2024-10-02T06:19:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0206",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U057",
        "timestamp": {
          "$date": "2024-10-18T02:18:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0386",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2024-12-27T11:06:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0110",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U199",
        "timestamp": {
          "$date": "2025-07-08T01:53:26Z"
        }
      },
      {
        "user_id": "U109",
        "timestamp": {
          "$date": "2025-07-09T07:35:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0063",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U175",
        "timestamp": {
          "$date": "2024-12-20T04:26:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0297",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U001",
        "timestamp": {
          "$date": "2025-07-31T00:12:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0379",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U010",
        "timestamp": {
          "$date": "2025-01-28T19:51:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0068",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U115",
        "timestamp": {
          "$date": "2024-12-23T20:39:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0187",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U179",
        "timestamp": {
          "$date": "2025-03-10T21:42:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0234",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U060",
        "timestamp": {
          "$date": "2025-07-10T00:23:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0150",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U142",
        "timestamp": {
          "$date": "2025-01-09T02:08:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0295",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U114",
        "timestamp": {
          "$date": "2024-11-12T13:46:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0101",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U024",
        "timestamp": {
          "$date": "2025-09-17T04:01:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0183",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2024-11-12T12:13:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0383",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U101",
        "timestamp": {
          "$date": "2025-04-09T10:37:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0035",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U122",
        "timestamp": {
          "$date": "2025-03-09T13:10:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0472",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U080",
        "timestamp": {
          "$date": "2024-11-18T20:32:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0011",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U020",
        "timestamp": {
          "$date": "2025-05-06T17:54:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0238",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U070",
        "timestamp": {
          "$date": "2025-04-04T15:41:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0083",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U125",
        "timestamp": {
          "$date": "2025-06-09T06:01:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0284",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U128",
        "timestamp": {
          "$date": "2025-02-17T01:23:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0014",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U048",
        "timestamp": {
          "$date": "2025-04-17T23:42:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0232",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U109",
        "timestamp": {
          "$date": "2025-02-17T18:35:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0265",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U112",
        "timestamp": {
          "$date": "2025-06-26T16:38:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0432",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U049",
        "timestamp": {
          "$date": "2025-06-01T08:00:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0059",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U188",
        "timestamp": {
          "$date": "2025-02-04T02:45:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0405",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U071",
        "timestamp": {
          "$date": "2025-02-06T23:45:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0377",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2025-09-06T19:49:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0247",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U137",
        "timestamp": {
          "$date": "2025-08-06T17:30:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0451",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U130",
        "timestamp": {
          "$date": "2024-10-08T15:03:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0372",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U199",
        "timestamp": {
          "$date": "2025-04-04T17:33:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0417",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U128",
        "timestamp": {
          "$date": "2025-03-24T06:13:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0413",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U079",
        "timestamp": {
          "$date": "2024-11-27T23:22:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0191",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U116",
        "timestamp": {
          "$date": "2025-01-05T13:42:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0412",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U039",
        "timestamp": {
          "$date": "2024-11-04T01:57:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0382",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U104",
        "timestamp": {
          "$date": "2024-11-07T17:15:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0271",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U068",
        "timestamp": {
          "$date": "2025-09-11T09:01:25Z"
        }
      },
      {
        "user_id": "U130",
        "timestamp": {
          "$date": "2025-09-25T21:19:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0295",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U138",
        "timestamp": {
          "$date": "2025-05-17T13:19:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0372",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U031",
        "timestamp": {
          "$date": "2025-01-12T21:17:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0344",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U087",
        "timestamp": {
          "$date": "2025-01-22T09:13:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0448",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U008",
        "timestamp": {
          "$date": "2025-08-12T07:44:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0129",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U096",
        "timestamp": {
          "$date": "2025-02-21T01:50:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0008",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U064",
        "timestamp": {
          "$date": "2024-11-14T16:53:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0164",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-07-19T16:30:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0303",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2024-10-23T09:53:33Z"
        }
      },
      {
        "user_id": "U186",
        "timestamp": {
          "$date": "2024-10-30T21:15:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0312",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2025-03-20T17:57:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0484",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U057",
        "timestamp": {
          "$date": "2025-04-28T08:45:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0038",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U125",
        "timestamp": {
          "$date": "2025-08-27T05:55:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0294",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U096",
        "timestamp": {
          "$date": "2025-02-12T21:59:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0085",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2024-11-03T12:59:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0266",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U061",
        "timestamp": {
          "$date": "2025-07-28T01:01:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0261",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U057",
        "timestamp": {
          "$date": "2025-04-29T00:47:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0243",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U084",
        "timestamp": {
          "$date": "2025-02-01T19:50:31Z"
        }
      },
      {
        "user_id": "U020",
        "timestamp": {
          "$date": "2025-02-16T09:42:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0034",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U179",
        "timestamp": {
          "$date": "2025-03-30T03:23:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0393",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U032",
        "timestamp": {
          "$date": "2025-06-13T15:58:24Z"
        }
      },
      {
        "user_id": "U107",
        "timestamp": {
          "$date": "2025-06-25T19:32:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0499",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U149",
        "timestamp": {
          "$date": "2025-04-10T18:51:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0382",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U054",
        "timestamp": {
          "$date": "2025-02-25T08:52:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0119",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U120",
        "timestamp": {
          "$date": "2025-05-30T15:20:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0199",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U100",
        "timestamp": {
          "$date": "2025-01-29T11:23:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0291",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U174",
        "timestamp": {
          "$date": "2025-01-15T10:26:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0279",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2024-12-18T17:36:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0385",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U077",
        "timestamp": {
          "$date": "2025-04-08T15:03:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0274",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U033",
        "timestamp": {
          "$date": "2025-05-05T13:35:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0243",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U022",
        "timestamp": {
          "$date": "2025-04-09T21:17:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0486",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U108",
        "timestamp": {
          "$date": "2025-02-01T04:08:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0295",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U172",
        "timestamp": {
          "$date": "2025-08-25T14:22:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0340",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2024-10-20T02:13:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0316",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2025-02-19T01:38:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0068",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U096",
        "timestamp": {
          "$date": "2025-08-03T03:01:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0209",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U037",
        "timestamp": {
          "$date": "2024-10-20T06:57:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0286",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U121",
        "timestamp": {
          "$date": "2025-04-24T06:41:07Z"
        }
      },
      {
        "user_id": "U052",
        "timestamp": {
          "$date": "2025-04-14T06:09:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0230",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2025-04-09T22:09:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0435",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2025-06-29T00:54:01Z"
        }
      },
      {
        "user_id": "U009",
        "timestamp": {
          "$date": "2025-06-18T04:09:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0383",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U026",
        "timestamp": {
          "$date": "2025-08-03T21:49:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0317",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U105",
        "timestamp": {
          "$date": "2024-10-27T13:38:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0019",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U055",
        "timestamp": {
          "$date": "2025-05-26T20:43:35Z"
        }
      },
      {
        "user_id": "U080",
        "timestamp": {
          "$date": "2025-05-02T01:12:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0033",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2024-12-24T19:43:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0483",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U014",
        "timestamp": {
          "$date": "2025-01-30T02:34:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0309",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2024-10-10T12:35:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0466",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U032",
        "timestamp": {
          "$date": "2025-01-11T03:40:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0291",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U005",
        "timestamp": {
          "$date": "2025-08-16T17:29:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0296",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U151",
        "timestamp": {
          "$date": "2024-11-17T14:21:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0227",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U083",
        "timestamp": {
          "$date": "2024-12-20T21:05:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0482",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U046",
        "timestamp": {
          "$date": "2025-02-03T12:21:40Z"
        }
      },
      {
        "user_id": "U106",
        "timestamp": {
          "$date": "2025-02-11T08:08:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0192",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U099",
        "timestamp": {
          "$date": "2024-11-13T01:15:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0164",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U058",
        "timestamp": {
          "$date": "2025-06-16T15:59:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0234",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U200",
        "timestamp": {
          "$date": "2025-05-18T18:42:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0424",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U028",
        "timestamp": {
          "$date": "2025-01-10T02:42:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0258",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2025-02-02T18:58:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0292",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2025-07-13T22:29:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0290",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U010",
        "timestamp": {
          "$date": "2024-12-10T21:17:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0139",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2025-06-14T19:25:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0039",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2025-07-01T17:28:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0302",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U035",
        "timestamp": {
          "$date": "2025-03-10T19:23:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0011",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U151",
        "timestamp": {
          "$date": "2025-06-12T00:11:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0395",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2025-05-04T06:31:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0139",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U032",
        "timestamp": {
          "$date": "2025-09-03T05:04:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0237",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2025-07-07T05:06:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0018",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2024-12-22T23:27:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0427",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U178",
        "timestamp": {
          "$date": "2024-10-06T09:11:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0265",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U148",
        "timestamp": {
          "$date": "2025-04-03T12:40:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0455",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U126",
        "timestamp": {
          "$date": "2025-07-07T11:52:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0391",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U025",
        "timestamp": {
          "$date": "2025-02-01T02:11:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0026",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2025-09-16T13:47:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0427",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U188",
        "timestamp": {
          "$date": "2024-11-26T15:14:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0090",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U050",
        "timestamp": {
          "$date": "2025-02-13T05:29:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0195",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U160",
        "timestamp": {
          "$date": "2025-02-25T13:52:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0090",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2024-12-31T07:17:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0115",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2025-09-04T10:06:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0231",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U004",
        "timestamp": {
          "$date": "2025-08-25T19:05:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0374",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2025-01-02T13:18:11Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0046",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U103",
        "timestamp": {
          "$date": "2025-01-05T03:57:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0495",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U092",
        "timestamp": {
          "$date": "2025-01-09T21:45:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0067",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U023",
        "timestamp": {
          "$date": "2025-04-26T15:23:42Z"
        }
      },
      {
        "user_id": "U008",
        "timestamp": {
          "$date": "2025-04-14T01:32:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0404",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U018",
        "timestamp": {
          "$date": "2024-10-14T05:50:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0168",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U104",
        "timestamp": {
          "$date": "2025-07-01T06:26:48Z"
        }
      },
      {
        "user_id": "U056",
        "timestamp": {
          "$date": "2025-07-14T14:02:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0304",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U193",
        "timestamp": {
          "$date": "2025-01-03T18:24:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0171",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U101",
        "timestamp": {
          "$date": "2025-07-07T03:54:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0429",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U055",
        "timestamp": {
          "$date": "2025-09-22T09:59:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0117",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2025-04-25T07:55:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0088",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U029",
        "timestamp": {
          "$date": "2025-07-06T04:18:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0487",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U003",
        "timestamp": {
          "$date": "2025-05-10T12:05:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0120",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U172",
        "timestamp": {
          "$date": "2025-01-09T16:04:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0031",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U161",
        "timestamp": {
          "$date": "2025-08-16T09:43:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0008",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U051",
        "timestamp": {
          "$date": "2025-02-07T03:19:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0424",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U043",
        "timestamp": {
          "$date": "2024-12-11T13:27:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0133",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2025-09-20T03:21:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0397",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U049",
        "timestamp": {
          "$date": "2025-02-20T13:24:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0199",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U101",
        "timestamp": {
          "$date": "2025-08-17T05:13:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0155",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U003",
        "timestamp": {
          "$date": "2025-05-07T14:11:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0210",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U076",
        "timestamp": {
          "$date": "2025-03-11T00:08:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0362",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U069",
        "timestamp": {
          "$date": "2024-12-06T07:37:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0369",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-09-06T11:39:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0183",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2025-05-09T14:06:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0026",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U013",
        "timestamp": {
          "$date": "2025-02-07T13:47:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0107",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U032",
        "timestamp": {
          "$date": "2025-06-02T21:41:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0264",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U182",
        "timestamp": {
          "$date": "2025-08-02T04:10:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0078",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U096",
        "timestamp": {
          "$date": "2025-08-19T14:50:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0082",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U013",
        "timestamp": {
          "$date": "2024-12-25T00:25:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0441",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U146",
        "timestamp": {
          "$date": "2025-05-04T00:20:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0109",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U171",
        "timestamp": {
          "$date": "2025-08-28T08:34:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0242",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U017",
        "timestamp": {
          "$date": "2025-06-06T02:40:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0062",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U147",
        "timestamp": {
          "$date": "2024-10-10T07:24:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0209",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2025-02-13T22:03:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0099",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U193",
        "timestamp": {
          "$date": "2024-11-09T08:38:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0079",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2025-08-10T23:58:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0039",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U093",
        "timestamp": {
          "$date": "2025-04-16T06:54:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0235",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U174",
        "timestamp": {
          "$date": "2024-12-24T03:38:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0237",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U129",
        "timestamp": {
          "$date": "2025-03-09T23:08:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0308",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U152",
        "timestamp": {
          "$date": "2025-02-07T16:55:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0225",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U058",
        "timestamp": {
          "$date": "2025-07-13T13:38:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0245",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U125",
        "timestamp": {
          "$date": "2025-01-25T22:05:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0002",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U095",
        "timestamp": {
          "$date": "2025-01-05T05:09:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0054",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U071",
        "timestamp": {
          "$date": "2025-02-01T12:15:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0317",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U017",
        "timestamp": {
          "$date": "2025-04-19T12:42:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0289",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U036",
        "timestamp": {
          "$date": "2025-01-31T20:05:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0128",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U109",
        "timestamp": {
          "$date": "2025-03-06T19:45:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0075",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U058",
        "timestamp": {
          "$date": "2025-08-08T07:24:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0104",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2025-03-12T16:34:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0024",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U177",
        "timestamp": {
          "$date": "2025-06-22T23:12:52Z"
        }
      },
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2025-06-21T22:46:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0039",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U094",
        "timestamp": {
          "$date": "2024-12-16T07:54:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0479",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U121",
        "timestamp": {
          "$date": "2025-06-14T19:31:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0139",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U072",
        "timestamp": {
          "$date": "2024-09-29T15:13:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0089",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U162",
        "timestamp": {
          "$date": "2025-08-16T14:25:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0478",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U195",
        "timestamp": {
          "$date": "2025-06-30T11:21:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0376",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2024-12-15T22:57:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0160",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U032",
        "timestamp": {
          "$date": "2025-04-10T16:58:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0066",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U066",
        "timestamp": {
          "$date": "2025-07-21T10:07:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0408",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U179",
        "timestamp": {
          "$date": "2025-09-26T21:41:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0430",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U041",
        "timestamp": {
          "$date": "2025-05-25T00:50:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0435",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2025-04-06T08:25:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0142",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U180",
        "timestamp": {
          "$date": "2025-01-24T12:28:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0214",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U048",
        "timestamp": {
          "$date": "2025-03-16T22:16:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0197",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U106",
        "timestamp": {
          "$date": "2025-02-13T01:11:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0152",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U046",
        "timestamp": {
          "$date": "2024-12-20T08:45:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0320",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U099",
        "timestamp": {
          "$date": "2025-03-13T06:28:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0288",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U049",
        "timestamp": {
          "$date": "2024-12-14T05:44:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0060",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U031",
        "timestamp": {
          "$date": "2025-06-07T08:37:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0128",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U129",
        "timestamp": {
          "$date": "2025-01-02T16:08:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0442",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U097",
        "timestamp": {
          "$date": "2025-07-08T13:49:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0088",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U025",
        "timestamp": {
          "$date": "2025-08-12T16:52:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0497",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U041",
        "timestamp": {
          "$date": "2024-12-31T07:52:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0415",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U175",
        "timestamp": {
          "$date": "2024-10-24T03:39:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0289",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2025-09-05T11:42:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0111",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U031",
        "timestamp": {
          "$date": "2025-02-10T07:14:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0009",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U062",
        "timestamp": {
          "$date": "2025-09-06T23:08:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0025",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U164",
        "timestamp": {
          "$date": "2025-07-07T20:44:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0178",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U189",
        "timestamp": {
          "$date": "2025-07-16T03:48:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0474",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2025-02-07T21:19:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0310",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U028",
        "timestamp": {
          "$date": "2025-06-16T18:55:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0269",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U142",
        "timestamp": {
          "$date": "2024-09-29T20:20:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0078",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2025-01-19T17:31:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0044",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U198",
        "timestamp": {
          "$date": "2025-04-21T13:06:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0414",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U187",
        "timestamp": {
          "$date": "2025-02-04T04:13:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0050",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U186",
        "timestamp": {
          "$date": "2025-07-30T03:36:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0275",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U139",
        "timestamp": {
          "$date": "2025-04-13T21:38:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0292",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U168",
        "timestamp": {
          "$date": "2025-05-01T22:46:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0472",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-08-27T14:28:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0084",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U083",
        "timestamp": {
          "$date": "2025-01-04T01:02:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0182",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U197",
        "timestamp": {
          "$date": "2024-10-25T20:54:38Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0291",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2025-05-19T10:11:11Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0298",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U180",
        "timestamp": {
          "$date": "2025-05-18T11:40:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0494",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U025",
        "timestamp": {
          "$date": "2024-10-11T15:48:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0396",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U094",
        "timestamp": {
          "$date": "2025-04-11T02:46:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0160",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U149",
        "timestamp": {
          "$date": "2024-09-29T10:01:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0260",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U099",
        "timestamp": {
          "$date": "2024-11-30T12:39:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0006",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U095",
        "timestamp": {
          "$date": "2025-09-08T21:36:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0134",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U074",
        "timestamp": {
          "$date": "2025-09-08T16:55:46Z"
        }
      },
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2025-09-13T02:41:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0306",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U134",
        "timestamp": {
          "$date": "2025-01-18T18:07:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0222",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U009",
        "timestamp": {
          "$date": "2025-02-16T02:44:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0469",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U104",
        "timestamp": {
          "$date": "2025-03-27T13:06:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0431",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U080",
        "timestamp": {
          "$date": "2024-11-23T21:16:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0487",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U054",
        "timestamp": {
          "$date": "2025-08-12T12:54:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0016",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U010",
        "timestamp": {
          "$date": "2025-05-25T00:48:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0436",
      "month": {
        "$date": "2024-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2024-09-29T13:03:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0165",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U060",
        "timestamp": {
          "$date": "2025-08-12T16:22:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0482",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U048",
        "timestamp": {
          "$date": "2025-06-22T19:49:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0346",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U096",
        "timestamp": {
          "$date": "2025-09-13T06:34:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0223",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U053",
        "timestamp": {
          "$date": "2025-07-13T05:53:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0005",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U042",
        "timestamp": {
          "$date": "2025-04-03T09:44:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0371",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U064",
        "timestamp": {
          "$date": "2025-06-27T17:12:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0120",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U102",
        "timestamp": {
          "$date": "2024-10-23T02:42:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0416",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U176",
        "timestamp": {
          "$date": "2025-01-01T10:08:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0183",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U039",
        "timestamp": {
          "$date": "2025-01-07T06:36:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0212",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U185",
        "timestamp": {
          "$date": "2025-03-10T05:16:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0366",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U152",
        "timestamp": {
          "$date": "2025-02-03T00:02:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0313",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U036",
        "timestamp": {
          "$date": "2025-01-01T11:19:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0223",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U192",
        "timestamp": {
          "$date": "2025-02-22T20:12:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0312",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U064",
        "timestamp": {
          "$date": "2025-05-09T16:25:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0417",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U016",
        "timestamp": {
          "$date": "2025-09-27T04:33:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0219",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U053",
        "timestamp": {
          "$date": "2025-06-19T17:43:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0420",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2024-12-21T02:12:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0088",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U021",
        "timestamp": {
          "$date": "2025-05-07T16:24:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0182",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U094",
        "timestamp": {
          "$date": "2024-12-24T04:43:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0238",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U031",
        "timestamp": {
          "$date": "2024-10-08T02:42:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0316",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U033",
        "timestamp": {
          "$date": "2025-07-09T18:54:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0137",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U134",
        "timestamp": {
          "$date": "2024-11-04T05:10:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0242",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U076",
        "timestamp": {
          "$date": "2024-11-25T10:57:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0302",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U093",
        "timestamp": {
          "$date": "2024-10-18T16:01:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0194",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U041",
        "timestamp": {
          "$date": "2024-10-25T18:14:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0389",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U097",
        "timestamp": {
          "$date": "2025-08-15T15:25:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0260",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U134",
        "timestamp": {
          "$date": "2025-05-15T17:59:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0353",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U104",
        "timestamp": {
          "$date": "2025-02-27T12:57:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0304",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U164",
        "timestamp": {
          "$date": "2025-08-29T15:26:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0005",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U107",
        "timestamp": {
          "$date": "2024-11-11T15:05:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0405",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U193",
        "timestamp": {
          "$date": "2025-03-05T06:48:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0142",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U016",
        "timestamp": {
          "$date": "2025-05-16T15:46:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0420",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U184",
        "timestamp": {
          "$date": "2025-03-15T18:50:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0121",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U099",
        "timestamp": {
          "$date": "2025-07-15T00:10:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0210",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U135",
        "timestamp": {
          "$date": "2024-10-02T02:40:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0161",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U018",
        "timestamp": {
          "$date": "2025-09-05T12:25:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0169",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U143",
        "timestamp": {
          "$date": "2025-06-14T03:56:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0138",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U069",
        "timestamp": {
          "$date": "2024-11-13T09:40:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0453",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U090",
        "timestamp": {
          "$date": "2024-12-25T01:21:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0026",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U013",
        "timestamp": {
          "$date": "2025-08-18T00:29:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0397",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U151",
        "timestamp": {
          "$date": "2025-08-26T08:38:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0427",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U001",
        "timestamp": {
          "$date": "2025-04-08T03:21:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0157",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U191",
        "timestamp": {
          "$date": "2024-12-22T23:21:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0094",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U188",
        "timestamp": {
          "$date": "2025-03-05T05:50:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0007",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2024-10-17T03:08:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0430",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U148",
        "timestamp": {
          "$date": "2025-08-31T14:14:17Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0193",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U198",
        "timestamp": {
          "$date": "2025-04-16T22:24:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0066",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2024-10-05T21:44:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0156",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U150",
        "timestamp": {
          "$date": "2025-01-02T09:36:24Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0046",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U076",
        "timestamp": {
          "$date": "2024-10-16T02:15:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0121",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U096",
        "timestamp": {
          "$date": "2025-02-03T01:43:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0358",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U197",
        "timestamp": {
          "$date": "2024-12-07T08:10:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0436",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U045",
        "timestamp": {
          "$date": "2025-05-16T06:14:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0099",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U182",
        "timestamp": {
          "$date": "2025-07-10T19:21:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0120",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U006",
        "timestamp": {
          "$date": "2025-06-28T15:43:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0209",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U189",
        "timestamp": {
          "$date": "2025-07-21T09:00:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0162",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U110",
        "timestamp": {
          "$date": "2024-10-22T04:24:11Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0465",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U165",
        "timestamp": {
          "$date": "2025-06-24T18:08:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0224",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U074",
        "timestamp": {
          "$date": "2025-03-08T23:57:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0149",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2024-11-03T19:05:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0480",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2024-12-24T05:21:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0227",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2025-05-07T10:17:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0418",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U131",
        "timestamp": {
          "$date": "2024-10-05T03:50:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0103",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U186",
        "timestamp": {
          "$date": "2024-10-14T08:05:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0212",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U190",
        "timestamp": {
          "$date": "2025-04-07T04:54:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0049",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U100",
        "timestamp": {
          "$date": "2025-03-27T19:23:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0444",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U198",
        "timestamp": {
          "$date": "2025-09-01T06:15:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0092",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U075",
        "timestamp": {
          "$date": "2025-03-03T05:31:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0091",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U111",
        "timestamp": {
          "$date": "2025-09-08T06:02:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0214",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U127",
        "timestamp": {
          "$date": "2025-04-05T11:28:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0443",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U144",
        "timestamp": {
          "$date": "2025-07-16T18:57:50Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0326",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U096",
        "timestamp": {
          "$date": "2025-03-05T18:38:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0199",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U065",
        "timestamp": {
          "$date": "2024-11-30T04:57:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0337",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U172",
        "timestamp": {
          "$date": "2025-04-30T11:28:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0468",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U122",
        "timestamp": {
          "$date": "2025-05-15T21:51:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0369",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U012",
        "timestamp": {
          "$date": "2025-05-22T21:31:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0355",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U188",
        "timestamp": {
          "$date": "2025-01-26T17:01:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0138",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U173",
        "timestamp": {
          "$date": "2025-08-26T04:32:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0216",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U042",
        "timestamp": {
          "$date": "2025-02-20T21:44:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0355",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U193",
        "timestamp": {
          "$date": "2024-11-01T11:06:32Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0183",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U132",
        "timestamp": {
          "$date": "2025-09-25T20:14:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0239",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2024-10-25T23:19:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0263",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U159",
        "timestamp": {
          "$date": "2024-10-27T01:58:52Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0297",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U199",
        "timestamp": {
          "$date": "2025-09-12T09:56:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0232",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2024-12-09T11:01:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0491",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U063",
        "timestamp": {
          "$date": "2025-06-25T04:24:43Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0452",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U070",
        "timestamp": {
          "$date": "2025-06-02T04:59:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0259",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U038",
        "timestamp": {
          "$date": "2025-03-31T03:17:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0219",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U200",
        "timestamp": {
          "$date": "2024-10-07T12:38:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0292",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U089",
        "timestamp": {
          "$date": "2024-12-07T12:43:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0383",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U158",
        "timestamp": {
          "$date": "2024-10-21T07:22:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0386",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U156",
        "timestamp": {
          "$date": "2024-11-14T07:33:46Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0001",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U174",
        "timestamp": {
          "$date": "2025-04-06T01:17:37Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0089",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U172",
        "timestamp": {
          "$date": "2024-10-05T08:15:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0074",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U189",
        "timestamp": {
          "$date": "2025-06-20T08:11:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0003",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U046",
        "timestamp": {
          "$date": "2025-09-04T13:28:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0010",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U124",
        "timestamp": {
          "$date": "2025-09-07T13:31:00Z"
        }
      },
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2025-09-10T15:17:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0130",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U171",
        "timestamp": {
          "$date": "2025-04-21T16:44:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0065",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U133",
        "timestamp": {
          "$date": "2025-03-01T06:01:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0367",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U124",
        "timestamp": {
          "$date": "2025-03-09T23:39:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0449",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2025-04-01T06:53:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0254",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U092",
        "timestamp": {
          "$date": "2025-07-28T22:02:14Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0442",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U053",
        "timestamp": {
          "$date": "2025-05-21T20:42:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0328",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U123",
        "timestamp": {
          "$date": "2025-03-15T06:40:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0493",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U153",
        "timestamp": {
          "$date": "2025-04-18T00:05:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0011",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U126",
        "timestamp": {
          "$date": "2024-12-23T06:36:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0221",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U030",
        "timestamp": {
          "$date": "2025-01-16T04:42:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0070",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U027",
        "timestamp": {
          "$date": "2024-10-10T15:39:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0403",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U114",
        "timestamp": {
          "$date": "2025-01-06T16:03:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0399",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U077",
        "timestamp": {
          "$date": "2025-09-03T23:59:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0497",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U020",
        "timestamp": {
          "$date": "2025-06-14T14:21:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0424",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U115",
        "timestamp": {
          "$date": "2025-02-07T20:51:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0412",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2025-03-11T19:11:01Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0326",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U068",
        "timestamp": {
          "$date": "2025-05-30T01:50:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0217",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U187",
        "timestamp": {
          "$date": "2024-12-20T13:37:03Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0458",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U019",
        "timestamp": {
          "$date": "2025-05-27T15:24:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0297",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U129",
        "timestamp": {
          "$date": "2025-03-30T23:26:57Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0385",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U128",
        "timestamp": {
          "$date": "2025-02-20T05:13:15Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0146",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U091",
        "timestamp": {
          "$date": "2024-10-09T14:17:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0478",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U082",
        "timestamp": {
          "$date": "2025-08-18T13:23:48Z"
        }
      },
      {
        "user_id": "U187",
        "timestamp": {
          "$date": "2025-08-02T17:40:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0370",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U069",
        "timestamp": {
          "$date": "2025-03-14T23:51:49Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0403",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U122",
        "timestamp": {
          "$date": "2024-11-20T20:29:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0020",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U180",
        "timestamp": {
          "$date": "2025-04-07T18:54:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0162",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U126",
        "timestamp": {
          "$date": "2025-05-26T18:18:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0096",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U165",
        "timestamp": {
          "$date": "2025-07-30T05:14:10Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0026",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U084",
        "timestamp": {
          "$date": "2024-10-05T01:10:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0046",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U027",
        "timestamp": {
          "$date": "2024-12-24T06:27:26Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0332",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U135",
        "timestamp": {
          "$date": "2025-01-25T07:14:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0045",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U100",
        "timestamp": {
          "$date": "2024-10-15T14:48:48Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0276",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U140",
        "timestamp": {
          "$date": "2025-09-20T07:21:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0422",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U029",
        "timestamp": {
          "$date": "2024-10-13T20:50:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0325",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U152",
        "timestamp": {
          "$date": "2024-11-25T21:03:51Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0491",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U166",
        "timestamp": {
          "$date": "2025-01-01T03:19:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0252",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U160",
        "timestamp": {
          "$date": "2024-12-10T17:30:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0030",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U187",
        "timestamp": {
          "$date": "2025-07-02T18:57:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0405",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U132",
        "timestamp": {
          "$date": "2024-11-01T00:22:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0013",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U041",
        "timestamp": {
          "$date": "2024-12-02T22:48:29Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0240",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U087",
        "timestamp": {
          "$date": "2025-08-21T20:59:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0044",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U170",
        "timestamp": {
          "$date": "2025-03-29T03:33:45Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0371",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U118",
        "timestamp": {
          "$date": "2025-03-30T14:20:02Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0356",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2025-01-30T16:32:55Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0358",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U188",
        "timestamp": {
          "$date": "2025-06-02T12:12:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0483",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U034",
        "timestamp": {
          "$date": "2025-07-12T11:08:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0076",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U001",
        "timestamp": {
          "$date": "2024-10-20T19:05:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0402",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U055",
        "timestamp": {
          "$date": "2024-11-13T18:07:23Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0275",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U200",
        "timestamp": {
          "$date": "2025-07-11T15:45:22Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0302",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U036",
        "timestamp": {
          "$date": "2024-12-07T18:40:42Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0204",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U125",
        "timestamp": {
          "$date": "2025-08-16T06:01:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0024",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U182",
        "timestamp": {
          "$date": "2024-10-20T17:06:18Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0402",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U023",
        "timestamp": {
          "$date": "2024-10-21T08:23:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0431",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U007",
        "timestamp": {
          "$date": "2025-09-08T01:32:00Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0486",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U047",
        "timestamp": {
          "$date": "2025-05-08T05:43:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0385",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U180",
        "timestamp": {
          "$date": "2025-06-23T11:02:27Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0177",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U178",
        "timestamp": {
          "$date": "2024-12-28T21:56:08Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0012",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U132",
        "timestamp": {
          "$date": "2025-05-01T01:49:19Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0245",
      "month": {
        "$date": "2025-02-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U086",
        "timestamp": {
          "$date": "2025-02-08T06:46:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0374",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U075",
        "timestamp": {
          "$date": "2024-12-09T07:54:35Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0029",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U115",
        "timestamp": {
          "$date": "2024-10-27T12:06:13Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0246",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U119",
        "timestamp": {
          "$date": "2025-05-29T16:56:44Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0172",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U093",
        "timestamp": {
          "$date": "2025-07-18T18:48:33Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0360",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U157",
        "timestamp": {
          "$date": "2024-10-13T03:15:31Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0044",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U152",
        "timestamp": {
          "$date": "2025-05-14T08:34:30Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0044",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U154",
        "timestamp": {
          "$date": "2024-11-04T22:57:04Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0130",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U038",
        "timestamp": {
          "$date": "2025-01-01T00:01:28Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0089",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U197",
        "timestamp": {
          "$date": "2025-06-19T23:48:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0196",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U184",
        "timestamp": {
          "$date": "2025-08-30T05:29:58Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0485",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U044",
        "timestamp": {
          "$date": "2025-06-01T14:58:56Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0253",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U113",
        "timestamp": {
          "$date": "2025-01-01T12:37:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0484",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U129",
        "timestamp": {
          "$date": "2024-10-16T20:29:41Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0262",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U169",
        "timestamp": {
          "$date": "2025-03-28T01:35:06Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0423",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U026",
        "timestamp": {
          "$date": "2024-11-08T21:23:09Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0082",
      "month": {
        "$date": "2024-10-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U018",
        "timestamp": {
          "$date": "2024-10-22T09:48:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0337",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U141",
        "timestamp": {
          "$date": "2024-11-12T00:33:21Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0421",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2025-04-02T00:42:54Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0357",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U195",
        "timestamp": {
          "$date": "2025-08-16T20:43:20Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0354",
      "month": {
        "$date": "2025-09-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U155",
        "timestamp": {
          "$date": "2025-09-03T05:44:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0164",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U031",
        "timestamp": {
          "$date": "2025-08-28T13:30:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0413",
      "month": {
        "$date": "2024-12-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U153",
        "timestamp": {
          "$date": "2024-12-29T22:32:34Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0023",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U149",
        "timestamp": {
          "$date": "2025-04-27T08:28:59Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0128",
      "month": {
        "$date": "2025-06-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U086",
        "timestamp": {
          "$date": "2025-06-15T02:47:16Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0086",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U153",
        "timestamp": {
          "$date": "2025-04-01T17:51:39Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0240",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U112",
        "timestamp": {
          "$date": "2025-04-30T03:52:53Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0328",
      "month": {
        "$date": "2025-01-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U047",
        "timestamp": {
          "$date": "2025-01-03T20:31:47Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0010",
      "month": {
        "$date": "2025-08-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U047",
        "timestamp": {
          "$date": "2025-08-18T17:47:05Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0067",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U020",
        "timestamp": {
          "$date": "2024-11-30T06:54:25Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0328",
      "month": {
        "$date": "2025-05-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U041",
        "timestamp": {
          "$date": "2025-05-01T01:00:07Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0385",
      "month": {
        "$date": "2025-07-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U040",
        "timestamp": {
          "$date": "2025-07-11T18:44:40Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0094",
      "month": {
        "$date": "2024-11-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U023",
        "timestamp": {
          "$date": "2024-11-27T13:09:36Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0313",
      "month": {
        "$date": "2025-03-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U055",
        "timestamp": {
          "$date": "2025-03-15T23:38:12Z"
        }
      }
    ]
  },
  {
    "id": {
      "book_id": "B0114",
      "month": {
        "$date": "2025-04-01T00:00:00.000Z"
      }
    },
    "views": [
      {
        "user_id": "U110",
        "timestamp": {
          "$date": "2025-04-28T13:56:34Z"
        }
      }
    ]
  }
    ]
)

db.bucket.countDocuments()

db.bucket.find()

// Working with bucket pattern

var bucket_pipeline = [
    {
        $unwind: {
          path: "$views",
          preserveNullAndEmptyArrays: false
        }
    },
    {
        $project: {
            book_id: "$id.book_id",
            user_id: "$views.user_id",
            date: {$dateFromParts: {
                year: {$year: {$getField: {field: "$date", input: "$views.timestamp"}}},
                month: {$month: {$getField: {field: "$date", input: "$views.timestamp"}}},
                day: 1
            }}
        }
    }
]

bucket_result = db.bucket.aggregate(bucket_pipeline)
bucket_result