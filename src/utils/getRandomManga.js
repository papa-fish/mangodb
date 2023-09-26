const baseURL = 'https://api.jikan.moe/v4'
    
export default function getMangaBySearch(query) {
    const endpoint = '/random/manga';
    const url = `${baseURL}${endpoint}`;

    return fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
            return data.data
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            throw error
        });
};