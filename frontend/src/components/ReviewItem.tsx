import { useState, useEffect } from "react";
import { type Review } from '../types/Review'
import { reviewAPI } from '../services/reviewAPI'
import { Form, Button, Card, FormGroup, CardTitle, Row, Col} from 'react-bootstrap';
import StarRating from "./StarRating";
import LikeButton from "./LikeButton";

const ReviewList = () => {
    return (
        <Card className="p-0 shadow-sm border mx-auto" style={{ width: '95vw', maxWidth: '20rem'}}>
            <Card.Header>Username</Card.Header>
            <Card.Body className="text-start">
                <CardTitle className="mt-4" style={{fontSize: "1.2em"}}>Title</CardTitle>
                <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
                <Card.Text>Content</Card.Text>
                <Row>
                    <Col>
                    <StarRating rating ={3}></StarRating>
                    </Col>
                    <Col>
                    <LikeButton isLiked={true}></LikeButton>
                    </Col>
                </Row>
            </Card.Body>      
        </Card>
    );
};
export default ReviewList;