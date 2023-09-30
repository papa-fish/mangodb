import { createContext, useState } from "react";

// import getRandomMangas from "./utils/getRandomMangas";
import getTopManga from "./utils/getTopManga";

export const MangodbContext = createContext();

export function MangodbProvider(props) {
  
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    // const [ randomMangas, setRandomMangas ] = useState([]);
    const [ topMangas, setTopMangas] = useState([]);

    //   const generateRandomMangas = () => {
    //     getRandomMangas(8)
    //         .then((data) => {
    //             setRandomMangas(data);
    //         })
    //         .catch((error) => {
    //             console.error('Error while fetching data: ', error);
    //         });
    //   };

    const getTopMangas = () => {
        getTopManga(12)
            .then((data) => {
                setTopMangas(data);
            })
            .catch((error) => {
                console.error('Error while fetching data: ', error);
        });
    };

    const value = {
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        // generateRandomMangas,
        // randomMangas,
        getTopMangas,
        topMangas,
    };

    return(
        <MangodbContext.Provider value={value}>
            {props.children}
        </MangodbContext.Provider>
    );
};