import { useContext } from "react";
import { MangodbContext } from "../mangodbContext";
import BookmarkButton from "./BookmarkButton";

import './SearchResults.css';

export default function SearchResults() {

    const { searchResults } = useContext(MangodbContext);

    return(
        <div className='manga-container'>
            {searchResults.map((manga) => (
            <div className="manga">
                <div className="manga-image">
                    <img key={manga.mal_id} src={manga.images.jpg.image_url} alt="" />
                </div>
                <h2>{manga.title}</h2>
                <h2>{`${manga.authors.length > 0 ? manga.authors[0].name : 'Unknown Author'}`}</h2>
                <BookmarkButton />
            </div>
            ))}
        </div>
    );
};