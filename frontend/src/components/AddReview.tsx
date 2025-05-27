import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
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
        if (!title || !content) {
            alert('Title and Review are required!');
            return;
        }

        const newReview: Review = {
            username: 'currentUser', // Replace with actual user data
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
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Text className="text-muted"> Date</Form.Text>
        <FloatingLabel controlId="floatingTextarea2" label="">
        <Form.Control
            as="textarea"
            placeholder="Add a review..."
            style={{ height: '100px' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
        </FloatingLabel>
    </Form.Group>
    <Button variant="primary" type="submit">
        Save
    </Button>
    </Form>

    );
};

export default AddReview;