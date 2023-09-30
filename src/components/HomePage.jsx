import { useContext, useEffect } from 'react';
import { MangodbContext } from '../mangodbContext';

import MangaList from './MangaList';

export default function HomePage() {
    
    const { generateRandomMangas } = useContext(MangodbContext);

    // useEffect(() => {
    //     generateRandomMangas();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return(
        <div>
            <h1>Home Page</h1>
            <MangaList />
        </div>
    );
};