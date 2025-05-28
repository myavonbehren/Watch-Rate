import { Form, Button, Card, FormGroup, FormControl, Container, Row, Col, CardSubtitle, CardFooter, CardTitle } from 'react-bootstrap';
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

            <Button variant='primary' type='submit'>
                Save
            </Button>
        </Form>
        </Card.Body>
        <Card.Footer className="text-muted p-0 px-4 py-2">Date</Card.Footer>
    </Card>
    );
};

export default AddReview;