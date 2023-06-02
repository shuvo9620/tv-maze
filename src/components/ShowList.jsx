import { useState, useEffect } from 'react';
import ShowSummary from './ShowSummary';

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
            {
                shows.map(show => <ShowSummary
                    key={show.id}
                    show={show}
                ></ShowSummary>)
            }
        </div>
    );
};

export default ShowList;
