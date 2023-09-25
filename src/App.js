import React, { useState } from 'react';

import getMangaBySearch from './utils/getMangaBySearch';

import './App.css';

function App() {

  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMangaBySearch(searchTerm)
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error while fetching data:', error);
      });
  };

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Enter manga title' 
        />
        <button type='submit'>Search</button>
      </form>

      <div className='image-container'>
        {searchResults.map((manga, index) => (
          <div>
            <img key={index} src={manga.images.jpg.image_url} alt={`Manga ${index}`} />
            <h2>{`${manga.title} by ${manga.authors[0].name}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
