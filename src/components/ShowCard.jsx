import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
       

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={show.show.image.medium} alt="Movie" />
                </figure>
                <div className="card-body h-[60vh]">
                    <h2 className="card-title">{show.show.name}</h2>
                    <p>Language: {show.show.language}</p>
                    <p>Genres: {show.show.genres}</p>
                    <p>Status: {show.show.status}</p>
                    <p>Runtime: {show.show.runtime}</p>
                    <p>Premiered: {show.show.premiered}</p>
                    <p>Rating: {show.show?.rating?.average}</p>
                    <div className="card-actions text-center">

                        <Link to={`/showDetails/${show.show.id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShowCard;
