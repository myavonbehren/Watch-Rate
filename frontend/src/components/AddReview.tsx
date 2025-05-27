import { Form, Button, Card, FormGroup, FormControl } from 'react-bootstrap';
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
    <Card>
        <Card.Body>
        <Card.Title>Add a Review</Card.Title>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3" controlId='formTitle'>
                <Form.Label>Show</Form.Label>
                <Form.Control 
                    as='input'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    isInvalid={!title}
                    placeholder='Enter show title'/>
            </FormGroup>
            <FormGroup className="mb-3" controlId='formContent'>
                <Form.Label>Review</Form.Label>
                <Form.Control 
                    as='textarea' 
                    rows={3} 
                    placeholder='Enter your review' 
                    required
                    isInvalid={!content}
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}/>
            </FormGroup>
            <Button variant='primary' type='submit'>
                Save
            </Button>
        </Form>
        </Card.Body>
    </Card>
    );
};

export default AddReview;