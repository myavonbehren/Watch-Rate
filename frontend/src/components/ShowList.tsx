import { Button} from 'react-bootstrap';
import { type Show } from '../types/Show';

interface ShowListProps {
  shows: Show[];
  toggleWatched: (id: number, currentState: boolean) => void;
  deleteShow: (id: number) => void;
}


const ShowList: React.FC<ShowListProps> = ({ shows, toggleWatched, deleteShow}) => {
    // console.log('ShowList component rendered with shows:', shows);
    return (
  <>
      <div className="d-block d-sm-none">
        {shows.map(show => (
          <div key={show.id} className="card mb-2 p-1">
            <div className="card-body">

              <div className="text-center">
                <small className="text-muted fw-bold d-block">Show Name</small>
                <div className="fw-bold mb-3" style={{fontSize: '1.1rem'}}>{show.title}</div>
              </div>
              

              <hr className="my-2" />
              
              <div className="row text-center g-2">
                <div className="col-6">
                  <small className="fw-bold text-muted d-block mb-2">Status</small>
                  <Button 
                    variant={show.isWatched ? 'warning' : 'dark'} 
                    size='sm'
                    className="w-100 btn-sm"
                    onClick={() => show.id !== undefined && toggleWatched(show.id, show.isWatched)}>
                      {show.isWatched ? 'Watched' : 'Unwatched'}
                  </Button>
                </div>
                <div className="col-6">
                  <small className="fw-bold text-muted d-block mb-2">Actions</small>
                  <Button 
                    variant='danger' 
                    size='sm'
                    className="w-100 btn-sm"
                    onClick={() => show.id !== undefined && deleteShow(show.id)}>
                      Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    <div className='table-responsive d-none d-sm-block'>
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
  </>
);
};

export default ShowList;