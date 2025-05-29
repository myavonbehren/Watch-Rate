import { useState, useEffect } from "react";
import { type Review } from '../types/Review'
import { reviewAPI } from '../services/reviewAPI'
import { Form, Button, Card, FormGroup, CardTitle, Row, Col} from 'react-bootstrap';
import StarRating from "./StarRating";
import LikeButton from "./LikeButton";


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
        <Card className="p-0 shadow-sm border" style={{  width: '40rem'  }}>
            <Card.Body>
                <CardTitle className="mt-4" style={{fontWeight: "bold", fontSize: "1.4em"}}>Reviews</CardTitle>
                <FormGroup className='mb-4'>
                <Row>
                    <Col>
                    <Card.Text>Title</Card.Text>
                    </Col>
                    <Col>
                    <Card.Text>Date</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <StarRating rating ={3}></StarRating>
                    </Col>
                    <Col>
                    <LikeButton isLiked={true}></LikeButton>
                    </Col>
                </Row>
                

            </FormGroup>    
            </Card.Body>      
        </Card>

    );

    

};

export default ReviewList;