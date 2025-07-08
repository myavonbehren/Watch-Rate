/* eslint-disable react-hooks/rules-of-hooks */
import { Button} from 'react-bootstrap';
import { type Show } from '../types/Show';
import { useEffect, useState } from 'react';

interface ShowListProps {
  shows: Show[];
  toggleWatched: (id: number, currentState: boolean) => void;
  deleteShow: (id: number) => void;
}


const ShowList: React.FC<ShowListProps> = ({ shows, toggleWatched, deleteShow}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

    // console.log('ShowList component rendered with shows:', shows);
    return (
        <>
    {isMobile ? (
      <div className="d-sm-none">
        {shows.map(show => (
          <div key={show.id} className="card mb-3">
            <div className="card-body">
              <h6 className="card-title">{show.title}</h6>
              <div className="d-flex justify-content-between align-items-center">
                <Button 
                  variant={show.isWatched ? 'warning' : 'dark'} 
                  size='sm'
                  onClick={() => show.id && toggleWatched(show.id, show.isWatched)}>
                    {show.isWatched ? 'Watched' : 'Unwatched'}
                </Button>
                <Button 
                  variant='danger' 
                  size='sm' 
                  onClick={() => show.id && deleteShow(show.id)}>
                    Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
        <div className='table-responsive-sm'>
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
                        onClick={() => show.id && toggleWatched(show.id, show.isWatched)}>
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
        </div>
    )}
  </>
  );
};

export default ShowList;