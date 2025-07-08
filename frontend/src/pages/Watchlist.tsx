import { useEffect, useState } from 'react';
import AddShow from '../components/AddShow';
import ShowList from '../components/ShowList';
import { reviewAPI } from '../services/reviewAPI';
import { type Show } from '../types/Show';
import { Alert, Spinner } from 'react-bootstrap';

const Watchlist: React.FC = () => {
    const [shows, setShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const data = await reviewAPI.getUserShows();
                setShows(data);
                setLoading(false);
            } catch (err) {
                console.error('Error: ', err)
                setError('Failed to fetch shows');
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        fetchShows();
    }, []);

    const updateWatched = async (id: number, currentState: boolean) => {
        const newState = !currentState;
        try {
            await reviewAPI.updateWatched(id, newState);
            setShows(shows.map(show => 
                show.id === id ? { ...show, isWatched: newState } : show
            ));
        } catch (err) {
            setError('Failed to update show watch status');
        }
    };

    const createShow = async (newShow: Show) => {
        setLoading(true);
        try {
            const createdShow = await reviewAPI.createShow(newShow);
            setShows(prevShows => [...prevShows, createdShow]);
            setLoading(false);
        } catch (err) {
            setError('Failed to add show');
            throw err;
        }
    };

    const deleteShow = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this show?')) {
            try {
                await reviewAPI.deleteShow(id);
                setShows(shows.filter(show => show.id != id));
            } catch (err) {
                console.error('Error deleting show: ', err)
            }
        }
    };

    if (loading) return <Spinner animation="border" variant="warning" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
    // if (error) return <Alert key="warning" variant="warning"> Error: {error} </Alert>;
    

    return (
    <div className="container">
        <h1 className='mb-4'>Watchlist</h1>
            {error && (
                <Alert 
                variant="danger"
                dismissible
                onClose={()=> setError('')}
                > Error: {error} </Alert>
        )}

        <div className="mb-4 d-block d-sm-none text-center">
            <AddShow addShow={createShow}/>
        </div>
    

        <div className="d-none d-sm-flex flex-wrap gap-4 justify-content-center">
            <div className='flex-shrink-0'>
                <AddShow addShow={createShow}/>
            </div>
            <div className="flex-grow-1" style={{ minWidth: '0' }}>
                <ShowList
                shows={shows}
                toggleWatched={updateWatched}
                deleteShow={deleteShow}
                />
            </div>
        </div>
    

        <div className="d-block d-sm-none">
            <ShowList
            shows={shows}
            toggleWatched={updateWatched}
            deleteShow={deleteShow}
            />
        </div>
    </div>
    );
};
export default Watchlist;