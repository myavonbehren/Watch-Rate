import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const AddReview = () => {
    return (
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Text className="text-muted"> Date</Form.Text>
        <FloatingLabel controlId="floatingTextarea2" label="">
        <Form.Control
            as="textarea"
            placeholder="Add a review..."
            style={{ height: '100px' }}/>
        </FloatingLabel>
    </Form.Group>
    <Button variant="primary" type="submit">
        Save
    </Button>
    </Form>

    );
};

export default AddReview;