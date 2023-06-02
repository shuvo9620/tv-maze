import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await response.json();
                setShow(data);
            } catch (error) {
                console.error('Error fetching show details:', error);
            }
        };

        fetchShowDetails();
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    const summary = show.summary;
    const plainTextSummary = summary.replace(/<[^>]+>/g, '');

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto">
            <figure><img className='w-full' src={show.image.medium} alt="Album" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title">{show.name}</h2>
                <p>Language: {show.language}</p>
                <p>Genres: {show.genres}</p>
                <p>Status: {show.status}</p>
                <p>Runtime: {show.runtime}</p>
                <p>Premiered: {show.premiered}</p>
                <p>Rating: {show?.rating?.average}</p>
                <p >{plainTextSummary}</p>
                <div className="card-actions text-center mt-4 ">
                    <Link className='btn btn-primary' to={`/booking/${show.name}`}>Book Ticket</Link>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
