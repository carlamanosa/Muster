import React, { Fragment, useState, useRef, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Event from '../../../utils/Account/Events';

function ApiCalendar() {
    const [{ apiEvents, apiQuery }] = Event.useContext();

    // change state and color for selected event 
    // send saved events to user database
    console.log(apiEvents, apiQuery);

    return (
        <Fragment>
            {/* calendar(2 weeks) to show events searched with buttons to go back and forth between weeks*/}
            {/* Just displaying data returned from API in rows for now */}
            {apiEvents.map(event =>
                <Card className="m-2">
                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Subtitle class="mb-2 text-muted">{event.datetime_local}</Card.Subtitle>
                        <Card.Text>{event.url}</Card.Text>
                    </Card.Body>
                </Card>
            )}

            {/* modal for event*/}
            {/* MODAL- taxonomies, venue, city,  time, seatgeek link, mob attendees (bonus), add button*/}
        </Fragment>
    );
}

export default ApiCalendar;
