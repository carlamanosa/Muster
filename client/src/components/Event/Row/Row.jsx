import React from "react";
import Card from 'react-bootstrap/Card';

export default function MyLink({ name, scent, height }) {
    return (
        <Card className="m-2">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle class="mb-2 text-muted">{scent}</Card.Subtitle>
                <Card.Text>This is the Event Row instead of the Event Card {height} cm</Card.Text>
            </Card.Body>
        </Card>
    );
}