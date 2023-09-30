export default function Manga(props) {

    const imageUrl = props.manga.images.jpg.image_url;
    const title = props.manga.title;
    const author = props.manga.authors.length > 0 ? props.manga.authors[0].name : 'Unknown Author'

    return(
        <div>
            <div className="card-container">
                <img src={imageUrl} alt="" />
            </div>
            <h2>{title}</h2>
            <h2>{author}</h2>
        </div>
    );
};