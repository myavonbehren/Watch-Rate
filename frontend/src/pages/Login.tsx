import React from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { configureReviewApiWithBasicAuth, setBasicAuth } from '../services/authService';
import { reviewAPI } from '../services/reviewAPI';

interface LoginProps {
    isNewUser: boolean;
}

const Login: React.FC<LoginProps> = ({isNewUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // If new user, register the user
            if (isNewUser) {
                //const creds = setBasicAuth(email, password);
                console.log('Registering user:', { email, password, username });
                //await reviewAPI.registerUser({ email, password, username });
                await reviewAPI.registerUser({ email, password: setBasicAuth(email, password), username: username });
            }

            setBasicAuth(email, password);

            await reviewAPI.loginUser({ email, password });

            reviewAPI.getUserShows();

            // Test creds by making a request
            //const api = configureReviewApiWithBasicAuth();
            //await api.get('/shows');
            
            //await reviewAPI.getAll();

            navigate('/watchlist');

        } catch (err) {
            // Clear invalid credentials on failureAdd commentMore actions
            localStorage.removeItem('basicAuth');
            setError('Invalid username or password');
            console.error('Login failed:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="p-0 shadow-sm border mx-auto" style={{width: '20rem'}}>
            
            <Card.Header>{isNewUser ? 'Sign Up' : 'Login'}</Card.Header>
            <Card.Body>
            {error && <Alert variant='danger' dismissible onClose={()=> setError('')}>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                {isNewUser &&
                <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </Form.Group>}
                <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                    <div className="d-grid gap-2">
                    {isNewUser ? 
                    <Button variant="warning" type="submit" disabled={loading}>
                        {loading ? 'Signing up..' : 'Sign Up'}
                    </Button>
                    :
                    <Button variant="warning" type="submit" disabled={loading}>
                        {loading ? 'Logging in..' : 'Login'}
                    </Button>
                    }
                    
                    </div>
            </Form>
            </Card.Body>
        </Card>
    );
};

export default Login;