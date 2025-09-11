use("books");

db.books_collection.insertMany(
    [
  {
    "title": "Whispers of the Ocean",
    "author": "Liam Brooks",
    "isbn": "978-0-553-21311-5",
    "publisher": "Harbor House",
    "release_date": "2020-03-14",
    "narrator": "Sophia Turner",
    "duration_minutes": 545,
    "audio_format": "MP3"
  },
  {
    "title": "Whispers of the Ocean",
    "author": "Liam Brooks",
    "isbn": "978-0-553-21311-5",
    "publisher": "Harbor House",
    "release_date": "2020-03-14",
    "file_format": "EPUB",
    "file_size_mb": 4.7,
    "drm_protected": false
  },
  {
    "title": "Whispers of the Ocean",
    "author": "Liam Brooks",
    "isbn": "978-0-553-21311-5",
    "publisher": "Harbor House",
    "release_date": "2020-03-14",
    "page_count": 298,
    "cover_type": "Paperback",
    "dimensions": { "width_cm": 13.5, "height_cm": 20.3, "thickness_cm": 2.1 }
  },

  {
    "title": "Echoes of the Stars",
    "author": "Nora Kim",
    "isbn": "978-1-86197-876-9",
    "publisher": "Galaxy Press",
    "release_date": "2021-07-09",
    "narrator": "Daniel Green",
    "duration_minutes": 680,
    "audio_format": "AAC"
  },
  {
    "title": "Echoes of the Stars",
    "author": "Nora Kim",
    "isbn": "978-1-86197-876-9",
    "publisher": "Galaxy Press",
    "release_date": "2021-07-09",
    "file_format": "MOBI",
    "file_size_mb": 6.1,
    "drm_protected": true
  },
  {
    "title": "Echoes of the Stars",
    "author": "Nora Kim",
    "isbn": "978-1-86197-876-9",
    "publisher": "Galaxy Press",
    "release_date": "2021-07-09",
    "page_count": 412,
    "cover_type": "Hardcover",
    "dimensions": { "width_cm": 15.2, "height_cm": 23.0, "thickness_cm": 3.5 }
  },

  {
    "title": "Shadows in the Forest",
    "author": "David Zhang",
    "isbn": "978-0-7432-7350-2",
    "publisher": "Evergreen Books",
    "release_date": "2019-10-22",
    "narrator": "Rachel Lopez",
    "duration_minutes": 390,
    "audio_format": "WAV"
  },
  {
    "title": "Shadows in the Forest",
    "author": "David Zhang",
    "isbn": "978-0-7432-7350-2",
    "publisher": "Evergreen Books",
    "release_date": "2019-10-22",
    "file_format": "PDF",
    "file_size_mb": 8.9,
    "drm_protected": false
  },
  {
    "title": "Shadows in the Forest",
    "author": "David Zhang",
    "isbn": "978-0-7432-7350-2",
    "publisher": "Evergreen Books",
    "release_date": "2019-10-22",
    "page_count": 250,
    "cover_type": "Paperback",
    "dimensions": { "width_cm": 14.0, "height_cm": 21.0, "thickness_cm": 2.0 }
  },

  {
    "title": "The Hidden Flame",
    "author": "Maria Estevez",
    "isbn": "978-0-14-312774-1",
    "publisher": "Sunrise Publishing",
    "release_date": "2022-01-15",
    "narrator": "Henry Carter",
    "duration_minutes": 505,
    "audio_format": "MP3"
  },
  {
    "title": "The Hidden Flame",
    "author": "Maria Estevez",
    "isbn": "978-0-14-312774-1",
    "publisher": "Sunrise Publishing",
    "release_date": "2022-01-15",
    "file_format": "EPUB",
    "file_size_mb": 3.4,
    "drm_protected": true
  },
  {
    "title": "The Hidden Flame",
    "author": "Maria Estevez",
    "isbn": "978-0-14-312774-1",
    "publisher": "Sunrise Publishing",
    "release_date": "2022-01-15",
    "page_count": 330,
    "cover_type": "Hardcover",
    "dimensions": { "width_cm": 16.0, "height_cm": 24.0, "thickness_cm": 3.8 }
  },

  {
    "title": "Winds of Tomorrow",
    "author": "Omar Khalid",
    "isbn": "978-0-06-112008-4",
    "publisher": "Future Reads",
    "release_date": "2023-05-20",
    "narrator": "Isabella Chen",
    "duration_minutes": 610,
    "audio_format": "AAC"
  },
  {
    "title": "Winds of Tomorrow",
    "author": "Omar Khalid",
    "isbn": "978-0-06-112008-4",
    "publisher": "Future Reads",
    "release_date": "2023-05-20",
    "file_format": "MOBI",
    "file_size_mb": 5.7,
    "drm_protected": false
  },
  {
    "title": "Winds of Tomorrow",
    "author": "Omar Khalid",
    "isbn": "978-0-06-112008-4",
    "publisher": "Future Reads",
    "release_date": "2023-05-20",
    "page_count": 415,
    "cover_type": "Paperback",
    "dimensions": { "width_cm": 15.0, "height_cm": 22.5, "thickness_cm": 3.2 }
  },

  {
    "title": "Songs of the Desert",
    "author": "Fatima Noor",
    "isbn": "978-1-250-30752-6",
    "publisher": "Sahara Books",
    "release_date": "2018-06-01",
    "narrator": "Mark Evans",
    "duration_minutes": 450,
    "audio_format": "MP3"
  },
  {
    "title": "Songs of the Desert",
    "author": "Fatima Noor",
    "isbn": "978-1-250-30752-6",
    "publisher": "Sahara Books",
    "release_date": "2018-06-01",
    "file_format": "PDF",
    "file_size_mb": 7.1,
    "drm_protected": true
  },
  {
    "title": "Songs of the Desert",
    "author": "Fatima Noor",
    "isbn": "978-1-250-30752-6",
    "publisher": "Sahara Books",
    "release_date": "2018-06-01",
    "page_count": 280,
    "cover_type": "Hardcover",
    "dimensions": { "width_cm": 14.8, "height_cm": 22.8, "thickness_cm": 2.7 }
  },

  {
    "title": "The Last Kingdom",
    "author": "Arthur Blake",
    "isbn": "978-0-452-28423-4",
    "publisher": "Crown Books",
    "release_date": "2017-11-30",
    "narrator": "Emma James",
    "duration_minutes": 720,
    "audio_format": "WAV"
  },
  {
    "title": "The Last Kingdom",
    "author": "Arthur Blake",
    "isbn": "978-0-452-28423-4",
    "publisher": "Crown Books",
    "release_date": "2017-11-30",
    "file_format": "EPUB",
    "file_size_mb": 6.5,
    "drm_protected": false
  },
  {
    "title": "The Last Kingdom",
    "author": "Arthur Blake",
    "isbn": "978-0-452-28423-4",
    "publisher": "Crown Books",
    "release_date": "2017-11-30",
    "page_count": 520,
    "cover_type": "Paperback",
    "dimensions": { "width_cm": 16.2, "height_cm": 24.1, "thickness_cm": 4.1 }
  },

  {
    "title": "Beyond the Horizon",
    "author": "Clara Mitchell",
    "isbn": "978-0-316-76974-5",
    "publisher": "BlueSky",
    "release_date": "2020-02-18",
    "narrator": "Michael Stone",
    "duration_minutes": 395,
    "audio_format": "MP3"
  },
  {
    "title": "Beyond the Horizon",
    "author": "Clara Mitchell",
    "isbn": "978-0-316-76974-5",
    "publisher": "BlueSky",
    "release_date": "2020-02-18",
    "file_format": "MOBI",
    "file_size_mb": 4.9,
    "drm_protected": true
  },
  {
    "title": "Beyond the Horizon",
    "author": "Clara Mitchell",
    "isbn": "978-0-316-76974-5",
    "publisher": "BlueSky",
    "release_date": "2020-02-18",
    "page_count": 360,
    "cover_type": "Hardcover",
    "dimensions": { "width_cm": 15.5, "height_cm": 23.5, "thickness_cm": 3.0 }
  }
]

);

db.books_collection.countDocuments();

db.books_collection.find();

db.books_collection.deleteMany({});