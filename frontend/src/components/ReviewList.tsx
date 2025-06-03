import { useState, useEffect } from "react";
import { type Review } from '../types/Review'
import { reviewAPI } from '../services/reviewAPI'
import { Alert, Button, Card, CardTitle } from 'react-bootstrap';
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await reviewAPI.getAll();
                setReviews(data);
                setLoading(false);
            } catch (err) {
                console.error('Error: ', err)
                setError('Failed to fetch reviews');
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);
    
    const deleteReview = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            try {
                await reviewAPI.delete(id);
                setReviews(reviews.filter(review => review.id != id));
            } catch (err) {
                console.error('Error deleting review: ', error)
            }
        }
    };

    if (loading) return <div> Loading... </div>;
    if (error) return <Alert key="warning" variant="warning"> Error: {error} </Alert>;

    return (
        <div className="container-fluid">
            {reviews.length === 0 ? (
                <Alert key="dark" variant="dark">No reviews available</Alert>
            ) : (
                <div className="d-flex flex-wrap justify-content-start gap-3 mt-3">
                {reviews.map((review) => (
                    <div key={review.id}>
                    <ReviewItem
                        review={review}
                        deleteReview={deleteReview}
                    />
                    </div>
                ))}
                </div>
            )}
        </div>
    );
};

export default ReviewList;