import { useState, useEffect } from "react";
import { type Review } from '../types/Review'
import { reviewAPI } from '../services/reviewAPI'
import { Button, Card, CardTitle } from 'react-bootstrap';
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
    if (error) return <div> Error: {error} </div>;

    return (
        <div className="container-fluid">
            <Card className="p-0 shadow-sm border mx-auto" style={{ width: '95vw', maxWidth: '40rem'}}>
                <Card.Body>
                    <CardTitle className="mt-4" style={{fontWeight: "bold", fontSize: "1.4em"}}>Reviews</CardTitle>
                    <Card.Link href="/add"><Button className="mt-2">Add Review</Button></Card.Link>
                    {reviews.length === 0 ? (
                        <p>No reviews available</p>
                    ) : (
                        reviews.map((review) => (
                            <ReviewItem
                            review={review}
                            deleteReview={deleteReview}></ReviewItem>
                        ))
                    )}
            </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewList;