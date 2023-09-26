import { useContext } from 'react';
import { MangodbContext } from './mangodbContext';

import './App.css';
import MangaList from '../src/components/MangaList';

export default function App() {

  const {
    handleSearchForManga,
    searchTerm,
    setSearchTerm,
    searchResults,
  } = useContext(MangodbContext);

  return (
    <div className="App">

      <MangaList />

      <form onSubmit={handleSearchForManga}>
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
            <h2>{`${manga.title} by ${manga.authors.length > 0 ? manga.authors[0].name : 'Unknown Author'}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}