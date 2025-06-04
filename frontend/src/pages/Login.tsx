import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <Card className="p-0 shadow-sm border mx-auto" style={{width: '20rem'}}>
            <Card.Header>Login</Card.Header>
            <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </Form.Group>
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
                    <Button variant="warning" type="submit">Login</Button>
                    </div>
            </Form>
            </Card.Body>
        </Card>
    );
};

export default Login;