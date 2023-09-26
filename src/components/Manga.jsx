export default function Manga({ key, manga }) {

    return(
        <div>
            <div className="card-container">
                <img key={key} src={manga.images.jpg.image_url} alt={`Manga ${key}`} />
            </div>
            <h2>{manga.title}</h2>
            <h2>{`${manga.authors.length > 0 ? manga.authors[0].name : 'Unknown Author'}`}</h2>
        </div>
    );
};