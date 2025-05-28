import { Form, Button, Card, FormGroup, CardTitle } from 'react-bootstrap';
import  { type Review } from '../types/Review';
import StarRating from './StarRating';
import React from 'react';
import { useState } from 'react';
import { Heart, HeartFill } from "react-bootstrap-icons";


interface AddReviewProps {
    addReview: (review: Review) => void;
}

const AddReview: React.FC<AddReviewProps> = ({addReview}) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = useState("");
    const [rating, setRating] = useState<number>(0);
    const [liked, setLiked] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const newReview: Review = {
            username: 'currentUser',
            title,
            content,
            rating,
            liked: liked === 'false',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        addReview(newReview);
        setTitle('');
        setContent('');
        setRating(0);
        setLiked('');
        
    };

    return (
        
     <Card className="p-0 shadow-sm border" style={{  width: '40rem'  }}>
        
        <Card.Body>
            <CardTitle style={{fontWeight: "bold", fontSize: "1.4em"}}>Write a Review</CardTitle>
            
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

            <FormGroup>
                <Form.Label>Rating</Form.Label>
                <StarRating rating={rating}
                onRatingChange={setRating}>
                </StarRating>
                <Form.Label>Like</Form.Label>

            </FormGroup>

            <Button variant='primary' type='submit'>
                Save
            </Button>
        </Form>
        </Card.Body>
        <Card.Footer className="text-muted p-0 px-4 py-2">{new Date().toISOString()}</Card.Footer>
    </Card>
    );
};

export default AddReview;