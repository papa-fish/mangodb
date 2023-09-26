const baseURL = 'https://api.jikan.moe/v4';

export default function getRandomMangas(count) {
    const endpoint = '/random/manga';
    const url = `${baseURL}${endpoint}`;

    const requests = [];

    const makeRequest = () => {
        return fetch(url)
            .then((response) => {
                if (!response) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => data.data)
            .catch((error) => {
                console.error('There was a problem with the fetch operation: ', error);
                throw error;
            });
        }

    const fetchMangaWithRetry = () => {
        return makeRequest()
            .then((manga) => {
                const isHentai = manga.genres.some((genre) => genre.name === 'Hentai');

                if (isHentai) {
                    return fetchMangaWithRetry();
                };
                return manga;
            })
            .catch((error) => {
                console.error('Error while fetching data: ', error);
                throw error;
            });
        };

    for (let i = 0; i < count; i++) {
        requests.push(fetchMangaWithRetry());
    };

    return Promise.all(requests);
};