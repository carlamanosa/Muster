import React, { Fragment, useState, useRef, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Event from '../../../utils/Account/Events';
import { EventError } from "../../../components";
import Location from "../../../utils/Account/Location";

const { SET_API_EVENTS, ADD_USER_EVENT, DELETE_USER_EVENT, SET_EVENT_STATE, EVENTS_ERROR } = Event.actions;

// get state to make api request

function ApiCalendar() {
    // Getting user's last stored location

    // Taylor's Stuff
    const [validated, setValidated] = useState(false);

    // eventDispatch lets us use all the event context stuff
    const [eventDispatch] = Event.useContext();

    // Where we store the user's input from our search form
    // This one is the filter (sports, concerts, theatre, etc)
    const taxoInput = useRef();
    // This one is the text input from the search bar that we'll send as a query to the API
    const qInput = useRef();

    // The stuff that happens when the submits the form
    const handleSubmit = event => {
        // stops the page from refreshing
        event.preventDefault();

        // Taylor's Stuff
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        // Our params object that we'll send to the API request
        // Built from user's input
        const params = {
            taxo: taxoInput.current.value,
            q: qInput.current.value
        };

        // Calling the function to make the API request (sending it our user's params)
        setApiParams(params);
    };

    // API call (in progress)
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
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTaxo">
                        <Form.Control
                            required
                            ref={taxoInput}
                            as="select">
                            <option>Choose...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridQ">
                        <Form.Control
                            required
                            pattern=".*\S+.*"
                            type="text"
                            placeholder="Search Events"
                            ref={qInput} />
                        <Form.Control.Feedback type="invalid">
                            Something is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form.Row>
                <EventError />
            </Form>

            {/* calendar(2 weeks) to show events searched with buttons to go back and forth between weeks*/}
            {/* modal for event*/}
            {/* MODAL- taxonomies, venue, city,  time, seatgeek link, mob attendees (bonus), add button*/}


        </Fragment>
    );
}

export default ApiCalendar;
