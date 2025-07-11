import { type Review } from '../types/Review'
import { Button, Card, CardTitle, Row, Col, Stack} from 'react-bootstrap';
import StarRating from "./StarRating";
import LikeButton from "./LikeButton";
import { getUser } from '../services/authService';

interface ReviewItemProps {
    review: Review;
    deleteReview: (id: number) => void;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review, deleteReview }) => {
    const currentUser = getUser();
    const isOwner = currentUser && review.userId === parseInt(currentUser.nameid); 

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (        
    <Card className="p-0 shadow-sm border mt-2" style={{ width: 'min(20rem, calc(100vw - 2rem))', maxWidth: '20rem'}}>
            <Card.Header className="bg-white">{review.username}</Card.Header>
            <Card.Body className="text-start">
                <Row className="align-items-center">
                    <Col><CardTitle style={{fontSize: "1.2em"}}>{review.title}</CardTitle></Col>
                    <Col className="text-end"><Card.Subtitle className="mb-2 text-muted">{formatDate(review.createdAt || review.updatedAt)}</Card.Subtitle></Col>
                </Row>
                <Row className="mb-1">
                    <Col>
                    <StarRating rating ={review.rating} size={15}></StarRating>
                    </Col>
                    <Col className="text-end">
                    <LikeButton isLiked={review.liked} size={15}></LikeButton>
                    </Col>
                </Row>

                <Card.Text>{review.content}</Card.Text>
                
            </Card.Body> 
            {isOwner && (
            <Card.Footer className="d-flex justify-content-end" style={{ backgroundColor: '#f8f9fa' }}>
                <Stack direction="horizontal" gap={2}>
                    <Card.Link href={`/edit/${review.id}`}><Button variant="outline-dark" size="sm"> Edit </Button></Card.Link>
                    <Button variant="danger" size="sm" onClick={() => review.id && deleteReview(review.id)}> Delete </Button>
                </Stack>
            </Card.Footer>
            )}
        </Card>
    );
};
export default ReviewItem;