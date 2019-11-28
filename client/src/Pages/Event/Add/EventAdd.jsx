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

const { EVENTS_LOADING, ADD_USER_EVENT, EVENTS_ERROR } = Event.actions;

export default function () {
    User.refreshOnLoad();
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, eventDispatch] = Event.useContext();
    const idInput = useRef();
    const nameInput = useRef();
    const dateInput = useRef();
    const urlInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const id = idInput.current.value;
        const name = nameInput.current.value;
        const date = dateInput.current.value;
        const url = urlInput.current.value;

        // If we have an email and password we run the loginUser function and clear the form
        addEvent(id, name, date, url);
    };

    // addEvent does a post to our "api/login" route and if successful, redirects us the the members page
    function addEvent(id, name, date, url) {
        setValidated(false);
        eventDispatch({ type: EVENTS_LOADING });
        Event.API.addEvent({
            id,
            name,
            date,
            url
        }).then(event => {
            eventDispatch({ type: ADD_USER_EVENT, event });
        }).catch((err) => {
            eventDispatch({ type: EVENTS_ERROR, message: err });
        });
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>Add Event</h2>
                    <Form
                        validated={validated}
                        onSubmit={handleSubmit}
                        noValidate>
                        <Form.Group controlId="formEventId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                required
                                pattern=".*\S+.*"
                                type="number"
                                placeholder="Enter Event Id"
                                ref={idInput} />
                            <Form.Control.Feedback type="invalid">
                                ID is required.
                            </Form.Control.Feedback>
                        </Form.Group>

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

                        <Form.Group controlId="formEventDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                required
                                pattern=".*\S+.*"
                                type="number"
                                placeholder="Enter Event Date"
                                ref={dateInput} />
                            <Form.Control.Feedback type="invalid">
                                Date is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEventURL">
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Event URL"
                                ref={urlInput} />
                            <Form.Control.Feedback type="invalid">
                                URL is required and must be a number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <EventError />
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
