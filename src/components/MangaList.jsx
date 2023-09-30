import { useContext, useEffect } from "react";
import { MangodbContext } from "../mangodbContext";
import Manga from "./Manga";

import "../pages/SearchResultsPage.css";

export default function MangaList() {

    const { topMangas, getTopMangas } = useContext(MangodbContext);

    useEffect(() => {
        getTopMangas();
        // eslint-disable-next-line
    },[]);

    return(
        <div className="manga-container">
            {topMangas.map((manga, index) => (
                <Manga key={index} manga={manga} />
            ))}
        </div>
    );
};