import { Button, Spinner, Alert } from 'react-bootstrap';
import { type Show } from '../types/Show';
import React, { useEffect, useState } from 'react';

interface ShowListProps {
  shows: Show[];
  toggleWatched: (id: number) => void;
  deleteShow: (id: number) => void;
}

const ShowList: React.FC<ShowListProps> = ({ shows, toggleWatched, deleteShow}) => {
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
                {shows.map(show => (
                <tr key={show.id}>
                    <td>{show.title}</td>
                    <td>        
                        <Button 
                        variant={show.isWatched ? 'warning' : 'dark'} 
                        size='sm'
                        onClick={() => toggleWatched}>
                            {show.isWatched ? 'Watched' : 'Unwatched'}
                        </Button>
                    </td>
                    <td>
                        <Button 
                        variant='danger' 
                        size='sm' 
                        onClick={() => deleteShow}>
                            Delete
                        </Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ShowList;