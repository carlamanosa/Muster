import React, { useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Event from '../../../utils/Account/Events';
import User from "../../../utils/Account/User";
import { EventError } from '../../../components';
import { useHistory } from 'react-router-dom';

const { EVENTS_LOADING, ADD_EVENT, EVENTS_ERROR } = Event.actions;

export default function () {
    User.refreshOnLoad();
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, eventDispatch] = Event.useContext();
    const nameInput = useRef();
    const scentInput = useRef();
    const heightInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const name = nameInput.current.value;
        const scent = scentInput.current.value;
        const height = heightInput.current.value;

        // If we have an email and password we run the loginUser function and clear the form
        eventAPI(name, scent, height);
    };

    // addEvent does a post to our "api/login" route and if successful, redirects us the the members page
    function eventAPI(name, scent, height) {
        setValidated(false);
        eventDispatch({ type: EVENTS_LOADING });
        Event.API.eventAPI({
            name,
            scent,
            height
        }).then(event => {
            eventDispatch({ type: ADD_EVENT, event });
            history.push("/event/getlist");
        }).catch((err) => {
            eventDispatch({ type: EVENTS_ERROR, message: err });
        });
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>Add (API) Event</h2>
                    <Form
                        validated={validated}
                        onSubmit={handleSubmit}
                        noValidate>
                        <Form.Group controlId="formEventName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                pattern=".*\S+.*"
                                type="text"
                                placeholder="Enter Event Name"
                                ref={nameInput} />
                            <Form.Control.Feedback type="invalid">
                                Name is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEventScent">
                            <Form.Label>Scent</Form.Label>
                            <Form.Control
                                required
                                pattern=".*\S+.*"
                                type="text"
                                placeholder="Enter Event Scent"
                                ref={scentInput} />
                            <Form.Control.Feedback type="invalid">
                                Scent is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEventHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter Event Height"
                                ref={heightInput} />
                            <Form.Control.Feedback type="invalid">
                                Height is required and must be a number.
                            </Form.Control.Feedback>
                        </Form.Group>
                            <EventError />
                        <Button variant="primary" type="submit">
                            Add (API) Event
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
