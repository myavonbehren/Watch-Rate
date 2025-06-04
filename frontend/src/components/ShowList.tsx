import { Button } from 'react-bootstrap';
import { showAPI } from '../services/showAPI';
import { type Show } from '../types/Show';
import { useEffect, useState } from 'react';

const ShowList = () => {
    const [shows, setShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const data = await showAPI.getAll();
                setShows(data);
                setLoading(false);
            } catch (err) {
                console.error('Error: ', err)
                setError('Failed to fetch shows');
                setLoading(false);
            }
        };
        fetchShows();
    }, []);

    const updateWatched = async (id: number, currentState: boolean) => {
        const newState = !currentState;
        try {
            console.log('before the await')
            await showAPI.updateWatched(id, newState);
            console.log('after the await')
            setShows(shows.map(show => 
                show.id === id ? { ...show, isWatched: newState } : show
            ));
        } catch (err) {
            setError('Failed to update show watch status');
        }
    };

    const deleteShow = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this show?')) {
            try {
                await showAPI.delete(id);
                setShows(shows.filter(show => show.id != id));
            } catch (err) {
                console.error('Error deleting show: ', err)
            }
        }
    };

    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th>Show Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {shows.map(show => (
                <tr key={show.id}>
                    <td>{show.title}</td>
                    <td>        
                        <Button 
                        variant={show.isWatched ? 'warning' : 'dark'} 
                        size='sm'
                        onClick={() => show.id && updateWatched(show.id, show.isWatched)}>
                            {show.isWatched ? 'Watched' : 'Unwatched'}
                        </Button>
                    </td>
                    <td>
                        <Button 
                        variant='danger' 
                        size='sm' 
                        onClick={() => show.id && deleteShow(show.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ShowList;