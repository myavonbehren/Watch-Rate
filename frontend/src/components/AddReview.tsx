import { Form, Button, Card, FormGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import  { type Review } from '../types/Review';
import React from 'react';
import { useState } from 'react';

interface AddReviewProps {
    addReview: (review: Review) => void;
}

const AddReview: React.FC<AddReviewProps> = ({addReview}) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("");
    const [liked, setLiked] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const newReview: Review = {
            username: 'currentUser',
            title,
            content,
            rating: parseInt(rating, 10),
            liked: liked === 'false',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        addReview(newReview);
        setTitle('');
        setContent('');
        setRating('');
        setLiked('');
    };

    return (
        
    <Card className="mx-auto mt-4 shadow-sm">
        <Card.Body>
            <Card.Title className="mb-4" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Add a Review</Card.Title>

        <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-4" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter show title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    isInvalid={!title}
                    required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Review</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add a review..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                isInvalid={!content}
                required/>
            </Form.Group>

            <Button variant='primary' type='submit'>
                Save
            </Button>

        </Form>
        </Card.Body>
    </Card>
    );
};

export default AddReview;