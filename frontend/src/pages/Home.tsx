import React from 'react';
import ReviewList from '../components/ReviewList';

const Home: React.FC = () => {
    return (
        <div className='container-fluid pt-5 mt-3'>
            <h1>Recent Activity</h1>
            <ReviewList></ReviewList>
        </div>
    );
};

export default Home;