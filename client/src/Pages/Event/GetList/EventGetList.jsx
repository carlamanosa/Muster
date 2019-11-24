import React, { useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Event from '../../../utils/Account/Events';
import User from "../../../utils/Account/User";
import { EventError } from '../../../components';
import { useHistory } from 'react-router-dom';
import { EventRow } from '../../../components';

const { EVENTS_LOADING, SET_API_EVENTS, EVENTS_ERROR } = Event.actions;

export default function () {
    User.refreshOnLoad();

    // every time the user hits the event list page we will reload events.
    Event.refreshOnLoad();
    const [{ apiEvents, pageLoading }] = Event.useContext();

    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, eventDispatch] = Event.useContext();
    const typeInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const type = typeInput.current.value;

        // If we have an email and password we run the loginUser function and clear the form
        addEvent(type);
    };

    // addEvent does a post to our "api/login" route and if successful, redirects us the the members page
    function addEvent(type) {
        setValidated(false);
        eventDispatch({ type: EVENTS_LOADING });
        Event.API.eventAPI({
            type
        }).then(data => {
            const events = data.events;
            console.log(events);
            eventDispatch({ type: SET_API_EVENTS, events });
            history.push("/event/getlist");
        }).catch((err) => {
            eventDispatch({ type: EVENTS_ERROR, message: err });
        });
    }

    return pageLoading ? (
        <div className="d-flex justify-content-center mt-5">
            <Spinner className="mt-5" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
        ) : (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>Add Event</h2>
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
            <Container className="mt-5">
                <Row>
                    {console.log(apiEvents)}
            {apiEvents.map(event =>
                        <Col xs={12} md={6} lg={4} xl={3}>
                            <EventRow {...event} />
                        </Col>
                    )}
                </Row>
            </Container>
    </Container>
    );
}
