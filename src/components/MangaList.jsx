import { useContext } from "react";
import { MangodbContext } from "../mangodbContext";
import Manga from "./Manga";

export default function MangaList() {

    const { randomMangas } = useContext(MangodbContext);

    return(
        <div>
            {randomMangas.map((manga, index) => (
                <Manga key={index} manga={manga} />
            ))}
        </div>
    );
};