import { useState, useEffect } from "react";
import { type Review } from '../types/Review'
import { reviewAPI } from '../services/reviewAPI'
import { Form, Button, Card, FormGroup, CardTitle, Row, Col} from 'react-bootstrap';
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
    {/*
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
                setError('Failed to fetch reviews');
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);
    */}

    return (
        <Card className="p-0 shadow-sm border mx-auto" style={{ width: '95vw', maxWidth: '40rem'}}>
            <Card.Body>
                <CardTitle className="mt-4" style={{fontWeight: "bold", fontSize: "1.4em"}}>Reviews</CardTitle>
            <ReviewItem></ReviewItem>
            </Card.Body>
        </Card>
    );

    

};

export default ReviewList;