export interface TVShow {
    id: number;
    name: string;
    first_air_date: string;
    last_air_date: string;
    poster_path: string;
    created_by: { name: string; }[];
    overview: string;
    number_of_seasons: number;
    number_of_episodes: number;
    genres: { name: string; }[];
    seasons: { season_number: number;}[];

}

/*
{
  "adult": false,
  "backdrop_path": "/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
  "created_by": [
    {
      "id": 3442409,
      "credit_id": "6217f14d0e597b00412768f1",
      "name": "Dan Erickson",
      "original_name": "Dan Erickson",
      "gender": 2,
      "profile_path": "/qzQ30V43kbVoMjJXRw6ydkicXEP.jpg"
    }
  ],
  "episode_run_time": [],
  "first_air_date": "2022-02-17",
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    }
  ],
  "homepage": "https://tv.apple.com/show/umc.cmc.1srk2goyh2q2zdxcx605w8vtx",
  "id": 95396,
  "in_production": true,
  "languages": [
    "en"
  ],
  "last_air_date": "2025-03-20",
  "last_episode_to_air": {
    "id": 5469142,
    "name": "Cold Harbor",
    "overview": "Mark forms a shaky alliance in an all-or-nothing play, while the team makes a dangerous last stand.",
    "vote_average": 9.1,
    "vote_count": 46,
    "air_date": "2025-03-20",
    "episode_number": 10,
    "episode_type": "finale",
    "production_code": "210",
    "runtime": 76,
    "season_number": 2,
    "show_id": 95396,
    "still_path": "/1FhuOQo7aBclaOE2WenXmZMCDYn.jpg"
  },
  "name": "Severance",
  "next_episode_to_air": null,
  "networks": [
    {
      "id": 2552,
      "logo_path": "/4KAy34EHvRM25Ih8wb82AuGU7zJ.png",
      "name": "Apple TV+",
      "origin_country": ""
    }
  ],
  "number_of_episodes": 19,
  "number_of_seasons": 3,
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_name": "Severance",
  "overview": "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
  "popularity": 51.9621,
  "poster_path": "/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
  "production_companies": [
    {
      "id": 100640,
      "logo_path": "/5BR67T28TVm2UMH8GCRDftafsaJ.png",
      "name": "Endeavor Content",
      "origin_country": "US"
    },
    {
      "id": 2932,
      "logo_path": "/4uLKLjGivVg2YnAIhAn8k7ZuVFj.png",
      "name": "Red Hour",
      "origin_country": "US"
    },
    {
      "id": 181874,
      "logo_path": "/crrgXvLhDO9c57HYrbO4H58Vxmb.png",
      "name": "Fifth Season",
      "origin_country": "US"
    },
    {
      "id": 254490,
      "logo_path": null,
      "name": "Animals & People",
      "origin_country": ""
    },
    {
      "id": 166623,
      "logo_path": "/rvmwTPf8K4tMFCSqzS4rKs9K0Eo.png",
      "name": "Westward",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "seasons": [
    {
      "air_date": "2021-12-15",
      "episode_count": 1,
      "id": 443382,
      "name": "Specials",
      "overview": "",
      "poster_path": "/f3E2o8DbW9QSzu31yY3Q1av5JO7.jpg",
      "season_number": 0,
      "vote_average": 0
    },
    {
      "air_date": "2022-02-17",
      "episode_count": 9,
      "id": 135726,
      "name": "Season 1",
      "overview": "At Lumon Industries, employees undergo \"severance,\" a procedure dividing their work and personal memories. Mark, a grieving team leader, begins to uncover the dark secrets of the company, forcing him and his coworkers to confront questions of identity, free will, and corporate control.",
      "poster_path": "/lFf6LLrQjYldcZItzOkGmMMigP7.jpg",
      "season_number": 1,
      "vote_average": 8.4
    },
    {
      "air_date": "2025-01-16",
      "episode_count": 10,
      "id": 401674,
      "name": "Season 2",
      "overview": "In season two, Mark and his friends learn the dire consequences of trifling with the severance barrier, leading them further down a path of woe.",
      "poster_path": "/Rb7sga832Cyqvafd7CqOzbwdK4.jpg",
      "season_number": 2,
      "vote_average": 8.3
    },
    {
      "air_date": null,
      "episode_count": 0,
      "id": 447475,
      "name": "Season 3",
      "overview": "",
      "poster_path": null,
      "season_number": 3,
      "vote_average": 0
    }
  ],
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Returning Series",
  "tagline": "There's more to work than life.",
  "type": "Scripted",
  "vote_average": 8.415,
  "vote_count": 1953
}
*/
