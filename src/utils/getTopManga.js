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