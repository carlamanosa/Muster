import React, { useState, useRef, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Event from '../../../utils/Account/Events';
import { EventError } from "../../../components";
import EventApiCalendar from "../ApiCalendar";
import "./SearchForm.css";


const { SET_API_EVENTS, EVENTS_ERROR, SET_API_QUERY, EVENTS_LOADING, DISPLAY_EVENTS } = Event.actions;

export default function () {
    Event.refreshDbOnLoad();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, eventDispatch] = Event.useContext();
    const [{ apiEvents }] = Event.useContext();

    // Where we store the user's input from our search form
    // This one is the text input from the search bar that we'll send as a query to the API
    const qInput = useRef();

    // The stuff that happens when the submits the form
    const handleSubmit = event => {
        // Stops the page from refreshing
        event.preventDefault();
        // Taylor's Stuff
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        // Our params object that we'll send to the API request
        // Built from user's input
        const rawQ = qInput.current.value;
        const q = (rawQ.split(" ")).join("+");
        // Calling the function to make the API request (sending it our user's params)
        setEventAPI(q);
    };

    const updateQueryDates = (newDates) => {
        console.log("newDates: ", newDates);
    }

    // Build and then make API call (in progess)
    function setEventAPI(q) {
        const key = "client_id=MTk1OTI0NDF8MTU3NDQ1Mjc1MC43NQ&client_secret=24c6903bd6b5005c4d5de56d640bf9c071cf6f6a42b4a55c96dee81ebc08df14";
        const queryURL = `https://api.seatgeek.com/2/events?geoip=true&per_page=100&q=${q}&datetime_local.gte=2019-11-29&datetime_local.lte=2019-12-31&${key}`;
        eventDispatch({ type: SET_API_QUERY, queryURL });
        Event.API.eventAPI(
            queryURL
        ).then(results => {
            eventDispatch({ type: SET_API_EVENTS, results });
            console.log(apiEvents);
        }).catch((err) => {
            eventDispatch({ type: EVENTS_ERROR, message: err });
        });
    }


    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>

                    <h2>Search Events</h2>
                    <br />
                    <br />
                    {/* search bar to get user events, query input (taxonomies filter) */}
                    <Form id="search-area"
                        validated={validated}
                        onSubmit={handleSubmit}
                        noValidate>
                        <Form.Row>
                            {/* Drop Down List of Taxonomies Options
                            <Form.Group as={Col} controlId="formGridTaxo">
                                <Form.Control
                                    required
                                    ref={taxoInput}
                                    as="select">
                                    <option>Concert</option>
                                    <option>Sports</option>
                                </Form.Control>
                            </Form.Group> */}

                            {/* Input Box (Search bar) for query input */}
                            <Form.Group as={Col} controlId="formGridQ" id="search-box">
                                <Form.Control
                                    pattern=".*\S+.*"
                                    type="text"
                                    placeholder="Search Events"
                                    ref={qInput} />
                                
                            </Form.Group>
                            <Button variant="light" type="submit" id="submit-button2">
                                    Submit
                                </Button>
                        </Form.Row>

                        <EventError />
                    </Form>
                </Col>
            </Row>
            <br />
            <br />
            <EventApiCalendar onUpdateDate={updateQueryDates}/>
        </Container>
    );
}
