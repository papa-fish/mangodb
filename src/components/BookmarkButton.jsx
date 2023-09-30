import { useState } from "react";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function BookmarkButton() {

    const [ isBookmarked, setIsBookmarked ] = useState(false)

    function handleBookmark() {
        setIsBookmarked(!isBookmarked);
    };

    return(
        <div>
        {isBookmarked ? (
            <FavoriteIcon onClick={handleBookmark}></FavoriteIcon>
        ) : (
            <FavoriteBorderIcon onClick={handleBookmark}></FavoriteBorderIcon>
        )}
        </div>
    );
};