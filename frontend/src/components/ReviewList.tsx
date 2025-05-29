import { useState, useEffect } from "react";
import { type Review } from '../types/Review'
import { reviewAPI } from '../services/reviewAPI'

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
                setError('Failed to fetch reviews');
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);


}