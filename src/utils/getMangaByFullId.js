const baseURL = 'https://api.jikan.moe/v4';

export default function getMangaByFullId(query) {
    const endpoint = '/manga';
    const url = `${baseURL}${endpoint}${query}/full`;

    return fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return data.data
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation: ', error);
        });
};