import { Form, Button, Card, FormGroup, CardTitle, Row, Col} from 'react-bootstrap';
import  { type Review } from '../types/Review';
import StarRating from './StarRating';
import React from 'react';
import { useState } from 'react';
import LikeButton from './LikeButton';

interface AddReviewProps {
    addReview: (review: Review) => void;
}

const AddReview: React.FC<AddReviewProps> = ({addReview}) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = useState("");
    const [rating, setRating] = useState<number>(0);
    const [liked, setLiked] = useState<boolean>(false);
    const [saved, setSaved] = useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSaved(true);
    
        const newReview: Review = {
            username: 'currentUser',
            title,
            content,
            rating,
            liked,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        addReview(newReview);
        setTitle('');
        setContent('');
        setRating(0);
        setLiked(false);
        
    };

    return (
        
    <Card className="p-0 shadow-sm border mx-auto" style={{ width: '95vw', maxWidth: '40rem'}}>
        <Card.Body>
        <CardTitle className="mt-4" style={{fontWeight: "bold", fontSize: "1.4em"}}>Write a Review</CardTitle>
            
        <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-4" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter show title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    isInvalid={saved && !title}
                    required/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formContent">
                <Form.Label>Review</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add a review..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                isInvalid={saved && !content}
                required/>
            </Form.Group>
            
            <FormGroup className='mb-2'>
                <Row>
                    <Col>
                        <Form.Label>Rating</Form.Label>
                        <StarRating rating={rating}
                        onRatingChange={setRating}>
                        </StarRating>
                    </Col>
                    <Col>
                        <Form.Label>Like</Form.Label>
                        <div>
                            <LikeButton isLiked={liked}
                            onToggle={handleLikeToggle}>
                            </LikeButton>
                        </div>
                    </Col>
                </Row>
            </FormGroup>             
            <div className="d-grid gap-2">
            <Button className="mt-3" variant='dark' type='submit'>
                Post Review
            </Button>
            </div>
        </Form>
        </Card.Body>
    </Card>
   
    );
};

export default AddReview;