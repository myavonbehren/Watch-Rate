import { Form, Button, Card, FormGroup, CardTitle, Row, Col, Spinner, Alert} from 'react-bootstrap';
import  { type Review } from '../types/Review';
import StarRating from '../components/StarRating';
import React from 'react';
import { useState, useEffect } from 'react';
import LikeButton from '../components/LikeButton';
import { useNavigate, useParams } from 'react-router-dom';
import { reviewAPI } from '../services/reviewAPI';

const AddReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [saved, setSaved] = useState(false);

    const [review, setReview] = useState<Review>({
        title: '',
        content: '',
        rating: 0,
        liked: false,
    });

    useEffect(() => {
        if (id) {
            const fetchReview = async () => {
                setLoading(true);
                try {
                    const data = await reviewAPI.getById(Number(id));
                    setReview(data);
                } catch (err) {
                    setError('Failed to fetch review details')
                }
                setLoading(false);
            };
            fetchReview();
        }

    }, [id]);

    const handleLikeToggle = () => {
        setReview(prevReview => ({
        ...prevReview,
        liked: !prevReview.liked
        }));
    };

    const handleRating = (newRating: number) => {
        setReview(prevReview => ({
        ...prevReview,
        rating: newRating
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setReview(prevReview => ({
            ...prevReview,
            [name]: type === 'number' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSaved(false)

        try {
            if (id) {
                await reviewAPI.update(Number(id), review);
            } else {
                await reviewAPI.create(review);
            }
            navigate('/');
        } catch (err) {
            setError(`Failed to ${id ? 'update' : 'create'} review`);
            setLoading(false);
        }
    };

    if (loading) return <Spinner animation="border" variant="warning" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
    //if (error) return <Alert key="warning" variant="warning"> Error: {error} </Alert>;

    return (
        
<Card className="p-0 shadow-sm border mx-auto" style={{ width: 'calc(95vw - 3rem)', maxWidth: '40rem' }}>
        <Card.Body>
        {error && (
                <Alert 
                variant="danger"
                dismissible
                onClose={()=> setError('')}
                > Error: {error} </Alert>
            )}
        <CardTitle className="mt-4" style={{fontWeight: "bold", fontSize: "1.4em"}}>{id ? 'Edit Review' :'Write a Review'}</CardTitle>
        <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-4" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter show title"
                    name='title'
                    value={review.title}
                    onChange={handleChange}
                    isInvalid={saved && !review.title}
                    required/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formContent">
                <Form.Label>Review</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                name='content'
                placeholder="Add a review..."
                value={review.content}
                onChange={handleChange}
                isInvalid={saved && !review.content}
                required/>
            </Form.Group>
            
            <FormGroup className='mb-2'>
                <Row>
                    <Col>
                        <Form.Label>Rating</Form.Label>
                        <StarRating rating={review.rating}
                        onRatingChange={handleRating}>
                        </StarRating>
                    </Col>
                    <Col>
                        <Form.Label>Like</Form.Label>
                        <div>
                            <LikeButton isLiked={review.liked}
                            onToggle={handleLikeToggle}>
                            </LikeButton>
                        </div>
                    </Col>
                </Row>
            </FormGroup>             
            <div className="d-grid gap-2">
            <Button className="mt-3" variant='dark' type='submit'>
                {id ? 'Update Review' : 'Post Review'}
            </Button>
            </div>
        </Form>
        </Card.Body>
    </Card>
    );
};
export default AddReview;