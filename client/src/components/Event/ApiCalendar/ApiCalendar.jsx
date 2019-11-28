import React, { Fragment, useState, useRef, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Event from '../../../utils/Account/Events';
import { EventError } from "../../../components";
import Location from "../../../utils/Account/Location";

const { SET_API_EVENTS, EVENTS_ERROR } = Event.actions;

// get state to make api request

function ApiCalendar() {
    const [validated, setValidated] = useState(false);
    const [eventDispatch] = Event.useContext();

    const typeInput = useRef();
    const taxoInput = useRef();
    const cityInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const params = {
            type: typeInput.current.value,
            taxo: taxoInput.current.value,
            city: cityInput.current.value
        };

        setApiParams(params);
    };

    function setApiParams(params) {
        console.log("setApiParams() params: ", params);
    }


    // build api request 
    // change state and color for selected event 
    // send saved events to user database



    return (
        <Fragment>
            {/* search bar to get user events, query input (taxonomies filter) */}
            <Form
                validated={validated}
                onSubmit={handleSubmit}
                noValidate>
                <Form.Group controlId="formEventType">
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
                <Form.Group controlId="formEventTaxo">
                    <Form.Label>Taxo</Form.Label>
                    <Form.Control
                        required
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="Enter Event Type"
                        ref={taxoInput} />
                    <Form.Control.Feedback type="invalid">
                        Type is required.
                                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formEventCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        required
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="Enter Event Type"
                        ref={cityInput} />
                    <Form.Control.Feedback type="invalid">
                        Type is required.
                                </Form.Control.Feedback>
                </Form.Group>
                <EventError />
                <Button variant="primary" type="submit">
                    Submit
                            </Button>
            </Form>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>
            {/* calendar(2 weeks) to show events searched with buttons to go back and forth between weeks*/}
            {/* modal for event*/}
            {/* MODAL- taxonomies, venue, city,  time, seatgeek link, mob attendees (bonus), add button*/}


        </Fragment>
    );
}

export default ApiCalendar;
