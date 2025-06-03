import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { type Review } from '../types/Review.tsx'
import ReviewList from '../components/ReviewList.tsx';
import AddReview from '../components/AddReview.tsx'

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>();

   const addReview = (newReview: Review) => {
      console.log('Adding review:', newReview);
    };

    return (
        <>
      <div>
        <AddReview addReview={(addReview)} />
      </div>
    </>
    );


};

export default Reviews;