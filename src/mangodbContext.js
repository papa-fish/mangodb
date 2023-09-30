import { createContext, useState } from "react";
import { getUser } from './utils/users_service';

import getTopManga from "./utils/getTopManga";

export const MangodbContext = createContext();

export function MangodbProvider(props) {
  
    const [ user, setUser ] = useState(getUser());
    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });
    const [ error, setError ] = useState("");
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ topMangas, setTopMangas] = useState([]);

    function login(user) {
      setUser(user)
    };
  
    function logout() {
      localStorage.removeItem('token');
      setUser(null);
    };

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
        user,
        formData,
        setFormData,
        error,
        setError,
        login,
        logout,
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        getTopMangas,
        topMangas,
    };

    return(
        <MangodbContext.Provider value={value}>
            {props.children}
        </MangodbContext.Provider>
    );
};