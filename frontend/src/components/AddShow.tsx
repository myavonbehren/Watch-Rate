import { Form, Button, Card, CardHeader, ToggleButton, ButtonGroup} from 'react-bootstrap';
import { type Show } from '../types/Show';
import React, { useState } from 'react';

interface AddShowProps {
    addShow: (newShow: Show) => void;
}

const AddShow: React.FC<AddShowProps> = ({ addShow }) => {
    const [radioValue, setRadioValue] = useState('1');
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

    const handleWatchedToggle = (value: string) => {
        setRadioValue(value);

        setShow(prevShow => ({
            ...prevShow,
            isWatched: value === '1'
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setShow(prevShow => ({
            ...prevShow,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(false);

        addShow(show);
        
        setShow({
            username: 'default user',
            title: '',
            isWatched: false
        });
        setRadioValue('1');
    };

    //if (loading) return <Spinner animation="border" variant="warning" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
    //if (error) return <Alert key="warning" variant="warning"> Error: {error} </Alert>;
    
    return (
<Card className="p-0 shadow-sm border mx-auto w-100" style={{maxWidth: '20rem'}}>
        <CardHeader>Add Show</CardHeader>
        <Card.Body>
        <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-2" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter show title"
                    name='title'
                    onChange={handleChange}
                    value={show.title}
                    isInvalid={saved && !show.title}
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
                    onChange={(e) => handleWatchedToggle(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                
                ))}
            </ButtonGroup>
            </div>
            <div className="d-grid gap-2">
            <Button 
            variant='dark' 
            type='submit'
            >
            Add Show
            </Button>
            </div>
        </Form>
        </Card.Body>
    </Card>
    );
};

export default AddShow;