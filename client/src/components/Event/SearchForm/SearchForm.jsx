import React, { useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Event from '../../../utils/Account/Events';
import { EventError } from "../../../components";

const { SET_API_EVENTS, EVENTS_ERROR } = Event.actions;

export default function () {
    const [validated, setValidated] = useState(false);

    const typeInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const params = typeInput.current.value;

        setApiParams(params);
    };

    function setApiParams(params) {
        console.log("setApiParams() params: ", params);
    }

    return (
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h2>Search Events</h2>
                        <Form
                            validated={validated}
                            onSubmit={handleSubmit}
                            noValidate>
                            <Form.Group controlId="formEventName">
                                <Form.Label>Type</Form.Label>
                                <Form.Control
                                    required
                                    pattern=".*\S+.*"
                                    type="text"
                                    placeholder="Enter Event Type"
                                    ref={typeInput} />
                                <Form.Control.Feedback type="invalid">
                                    Type is required.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <EventError />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
}
