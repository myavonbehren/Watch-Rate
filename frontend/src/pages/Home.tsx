import React from 'react';
import ReviewList from '../components/ReviewList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Recent Activity</h1>
            <ReviewList></ReviewList>
        </div>
    );
};

export default Home;