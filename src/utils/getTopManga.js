const baseURL = 'https://api.jikan.moe/v4';

export default function getTopManga(query) {
    const endpoint = '/top/manga';
    const url = `${baseURL}${endpoint}?limit=${query}`;

    return fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return data.data;
        })
        .catch((error) => {
            console.log('There was a problem with the fetch operation: ', error);
            throw error;
        });
};


// {
//     "data": [
//       {
//         "mal_id": 0,
//         "url": "string",
//         "images": {
//           "jpg": {
//             "image_url": "string",
//             "small_image_url": "string",
//             "large_image_url": "string"
//           },
//           "webp": {
//             "image_url": "string",
//             "small_image_url": "string",
//             "large_image_url": "string"
//           }
//         },
//         "approved": true,
//         "titles": [
//           {
//             "type": "string",
//             "title": "string"
//           }
//         ],
//         "title": "string",
//         "title_english": "string",
//         "title_japanese": "string",
//         "type": "Manga",
//         "chapters": 0,
//         "volumes": 0,
//         "status": "Finished",
//         "publishing": true,
//         "published": {
//           "from": "string",
//           "to": "string",
//           "prop": {
//             "from": {
//               "day": 0,
//               "month": 0,
//               "year": 0
//             },
//             "to": {
//               "day": 0,
//               "month": 0,
//               "year": 0
//             },
//             "string": "string"
//           }
//         },
//         "score": 0,
//         "scored_by": 0,
//         "rank": 0,
//         "popularity": 0,
//         "members": 0,
//         "favorites": 0,
//         "synopsis": "string",
//         "background": "string",
//         "authors": [
//           {
//             "mal_id": 0,
//             "type": "string",
//             "name": "string",
//             "url": "string"
//           }
//         ],
//         "serializations": [
//           {
//             "mal_id": 0,
//             "type": "string",
//             "name": "string",
//             "url": "string"
//           }
//         ],
//         "genres": [
//           {
//             "mal_id": 0,
//             "type": "string",
//             "name": "string",
//             "url": "string"
//           }
//         ],
//         "explicit_genres": [
//           {
//             "mal_id": 0,
//             "type": "string",
//             "name": "string",
//             "url": "string"
//           }
//         ],
//         "themes": [
//           {
//             "mal_id": 0,
//             "type": "string",
//             "name": "string",
//             "url": "string"
//           }
//         ],
//         "demographics": [
//           {
//             "mal_id": 0,
//             "type": "string",
//             "name": "string",
//             "url": "string"
//           }
//         ]
//       }
//     ],
//     "pagination": {
//       "last_visible_page": 0,
//       "has_next_page": true,
//       "items": {
//         "count": 0,
//         "total": 0,
//         "per_page": 0
//       }
//     }
//   }