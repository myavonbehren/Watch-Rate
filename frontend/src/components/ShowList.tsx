import { Form, Button, Card, FormGroup, CardTitle, CardHeader, ToggleButton, ButtonGroup, Table} from 'react-bootstrap';
import  { type Review } from '../types/Review';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ShowList = () => {

    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th>Show Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>title of tv show</td>
                    <td>
                        <Button variant='warning' size='sm'>Watched</Button>
                    </td>
                    <td>
                        <Button variant='danger' size='sm'>Delete</Button>
                    </td>
                </tr>
                <tr>
                    <td>title of tv show</td>
                    <td>
                        <Button variant='warning' size='sm'>Watched</Button>
                    </td>
                    <td>
                        <Button variant='danger' size='sm'>Delete</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ShowList;