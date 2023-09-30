import { createContext, useState } from "react";

// import getMangaBySearch from './utils/getMangaBySearch';
import getRandomMangas from "./utils/getRandomMangas";

export const MangodbContext = createContext();


export function MangodbProvider(props) {
  
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ randomMangas, setRandomMangas ] = useState([]);

      const generateRandomMangas = () => {
        getRandomMangas(8)
            .then((data) => {
                setRandomMangas(data);
            })
            .catch((error) => {
                console.error('Error while fetching data: ', error);
            });
      };

      

    const value = {
        // handleSearchForManga,
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        generateRandomMangas,
        randomMangas
    };

    return(
        <MangodbContext.Provider value={value}>
            {props.children}
        </MangodbContext.Provider>
    );
};