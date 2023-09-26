import { createContext, useState, useEffect } from "react";

import getMangaBySearch from './utils/getMangaBySearch';
import getRandomMangas from "./utils/getRandomMangas";

export const MangodbContext = createContext();

export function MangodbProvider(props) {

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ randomMangas, setRandomMangas ] = useState([]);

    useEffect(() => {
        generateRandomMangas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

      const generateRandomMangas = (e) => {
        getRandomMangas(10)
            .then((data) => {
                setRandomMangas(data);
            })
            .catch((error) => {
                console.error('Error while fetching data: ', error);
            });
      };

      const handleSearchForManga = (e) => {
        e.preventDefault();
        getMangaBySearch(searchTerm)
          .then((data) => {
            setSearchResults(data);
          })
          .catch((error) => {
            console.error('Error while fetching data: ', error);
          });
      };

    const value = {
        handleSearchForManga,
        searchTerm,
        setSearchTerm,
        searchResults,
        generateRandomMangas,
        randomMangas
    };

    return(
        <MangodbContext.Provider value={value}>
            {props.children}
        </MangodbContext.Provider>
    );
};