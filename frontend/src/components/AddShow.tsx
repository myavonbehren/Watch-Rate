import { Form, Button, Card, CardHeader, ToggleButton, ButtonGroup, Spinner, Alert} from 'react-bootstrap';
import { type Show } from '../types/Show';
import { showAPI } from '../services/showAPI';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddShow = () => {
    const [radioValue, setRadioValue] = useState('1');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [saved, setSaved] = useState(false);

    const radios = [
        { name: 'Watched', value: '1' },
        { name: 'Unwatched', value: '2' },
    ];

    const [show, setShow] = useState<Show>({
        username: 'default user',
        title: '',
        isWatched: false
    });

    /*
    const [review, setReview] = useState<Review>({
            username: 'default user',
            title: '',
            content: '',
            rating: 0,
            liked: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    */

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    }

    if (loading) return <Spinner animation="border" variant="warning" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
    if (error) return <Alert key="warning" variant="warning"> Error: {error} </Alert>;
    
    return (
    <Card className="p-0 shadow-sm border mx-auto" style={{width: '20rem'}}>
        <CardHeader>Add Show</CardHeader>
        <Card.Body>
        <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-2" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter show title"
                    name='title'
                    //value={review.title}
                    //onChange={handleChange}
                    //isInvalid={saved && ! review.title}
                    required/>
            </Form.Group>
            <div className="d-grid gap-2">
            <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant='outline-warning'
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                
                ))}
            </ButtonGroup>
            </div>
            <div className="d-grid gap-2">
            <Button variant='dark' type='submit'>
                Add Show
            </Button>
            </div>
        </Form>
        </Card.Body>
    </Card>
    );
};

export default AddShow;