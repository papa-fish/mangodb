import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MangodbContext } from "../mangodbContext";

import getMangaBySearch from "../utils/getMangaBySearch";

export default function SearchBar() {

    const { 
        searchTerm, 
        setSearchTerm,
        setSearchResults,
    } = useContext(MangodbContext);

    const navigate = useNavigate();

    const handleSearchForManga = (e) => {
        e.preventDefault();
        getMangaBySearch(searchTerm)
          .then((data) => {
            setSearchResults(data);
            navigate('/searchresults');
          })
          .catch((error) => {
            console.error('Error while fetching data: ', error);
          });
      };

    return(
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
    );
};