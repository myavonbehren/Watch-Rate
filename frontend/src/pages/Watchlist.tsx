import React from 'react';
import AddShow from '../components/AddShow';
import ShowList from '../components/ShowList';

const Watchlist: React.FC = () => {
    return (
        <div>
            <h1>Watchlist</h1>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                <div className='flex-shrink-0'>
                    <AddShow/>
                </div>
                <div className="flex-grow-1" style={{ minWidth: '300px' }}>
                    <ShowList/>
                </div>
            </div>
        </div>
    );
};
export default Watchlist;