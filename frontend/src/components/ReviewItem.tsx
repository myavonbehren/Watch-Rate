import { useState, useEffect } from "react";
import { type Review } from '../types/Review'
import { reviewAPI } from '../services/reviewAPI'
import { Button, Card, CardTitle, Row, Col, Stack} from 'react-bootstrap';
import StarRating from "./StarRating";
import LikeButton from "./LikeButton";

const ReviewList = () => {
    return (
        <Card className="p-0 shadow-sm border" style={{ width: '95vw', maxWidth: '20rem'}}>
            <Card.Header className="bg-white">Username</Card.Header>
            <Card.Body className="text-start">
                <Row className="align-items-center">
                    <Col><CardTitle style={{fontSize: "1.2em"}}>Title</CardTitle></Col>
                    <Col className="text-end"><Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle></Col>
                </Row>
                <Row className="mb-1">
                    <Col>
                    <StarRating rating ={3} size={15}></StarRating>
                    </Col>
                    <Col className="text-end">
                    <LikeButton isLiked={true} size={15}></LikeButton>
                    </Col>
                </Row>

                <Card.Text>Content</Card.Text>
                
            </Card.Body> 
            <Card.Footer className="d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
                <Stack direction="horizontal" gap={2} >
                    <Button variant="outline-primary" size="sm"> Edit </Button>
                    <Button variant="danger" size="sm"> Delete </Button>
                </Stack>
            </Card.Footer>     
        </Card>
    );
};
export default ReviewList;