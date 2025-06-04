import { useEffect, useState } from 'react';
import AddShow from '../components/AddShow';
import ShowList from '../components/ShowList';
import { showAPI } from '../services/showAPI';
import { type Show } from '../types/Show';
import { Alert, Spinner } from 'react-bootstrap';}

const Watchlist: React.FC = () => {
    const [shows, setShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

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

    const addShow = async 

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

    if (loading) return <Spinner animation="border" variant="warning" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
    if (error) return <Alert key="warning" variant="warning"> Error: {error} </Alert>;
    

    return (
        <div>
            <h1 className='mb-4'>Watchlist</h1>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                <div className='flex-shrink-0'>
                    <AddShow addShow={AddShow}/>
                </div>
                <div className="flex-grow-1" style={{ minWidth: '300px' }}>
                    <ShowList/>
                </div>
            </div>
        </div>
    );
};
export default Watchlist;