import React from "react";
import Card from 'react-bootstrap/Card';

export default function MyLink({ event }) {
    return (
        <Card className="m-2">
            <Card.Body>
                {console.log(event)}
                <Card.Title>{event}</Card.Title>
                <Card.Subtitle class="mb-2 text-muted">Link: {event}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}