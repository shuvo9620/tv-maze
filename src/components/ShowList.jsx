import { useState, useEffect } from 'react';
import ShowCard from './ShowCard';


const ShowList = () => {
    const [shows, setShows] = useState([]);

    const url = 'https://api.tvmaze.com/search/shows?q=all';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setShows(data))
            .catch(error => {
                console.error('Error fetching shows:', error);
            });
    }, []);

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
            {
                shows.map(show => <ShowCard
                    key={show.id}
                    show={show}
                ></ShowCard>)
            }
        </div>
    );
};

export default ShowList;
