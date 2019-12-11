import React from "react";
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalBody from 'react-bootstrap/ModalBody';
import Card from 'react-bootstrap/Card';
import "./MusterMob.css";


function MusterMob(props) {

    return (props.daySelected) ? (
        <ModalDialog id="saved-mob">
            <ModalBody style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto', 'justifyContent': 'center' }}>
                <Card className="card" style={{ width: "100%" }}>
                    <Card.Header id="event-title">
                        <Card.Title>{props.day}</Card.Title>
                        <Card.Subtitle>{props.date}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text id="event-date">Events?</Card.Text>
                    </Card.Body>
                </Card>
            </ModalBody>
        </ModalDialog>
    ) : (
            <ModalDialog id="saved-mob">
                <ModalBody style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto', 'justifyContent': 'center' }}>
                    <Card className="card" style={{ width: "100%" }}>
                        <Card.Header id="event-title">
                            <Card.Title>{props.event}</Card.Title>
                            <Card.Subtitle id="event-date">{props.day}, {props.date}</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text id="event-date">Mob?</Card.Text>
                        </Card.Body>
                    </Card>
                </ModalBody>
            </ModalDialog>
        )
}

export default MusterMob;
