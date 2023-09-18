import "./movie.css"
export const Moviecard = ({movie}) =>{

    const {name,imdb_rating,genre,duration,img_link} = movie;
    return(
        <div className="card-c">
            <div className="card-img">
                <img className="card-img-size" src={img_link} alt="movie-card" />
            </div>
            <div>
                <span className="title">{name}</span>
            </div>
            <div>
                <span className="genre">{genre}</span>
            </div>
            <div className="rating">
                <span>Rating: {imdb_rating}</span>
                <span>{duration} mins</span>
            </div>
        </div>
    )
}