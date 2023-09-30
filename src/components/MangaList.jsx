import { useContext } from "react";
import { MangodbContext } from "../mangodbContext";
import Manga from "./Manga";

import "./SearchResults.css";

export default function MangaList() {

    const { randomMangas } = useContext(MangodbContext);

    return(
        <div className="manga-container">
            {randomMangas.map((manga, index) => (
                <Manga key={index} manga={manga} />
            ))}
        </div>
    );
};