import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Event from '../../../utils/Account/Events';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";

import "./ApiCalendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


function ApiCalendar() {
    const [{ apiEvents, apiQuery }] = Event.useContext();

    // change state and color for selected event 
    // send saved events to user database
    console.log(apiEvents, apiQuery);

    const localizer = momentLocalizer(moment) // or globalizeLocalizer

    const myEventsList = [
        {
            title: "Some Title",
            start: new Date(),
            end: new Date(moment().add(1, "days")),
            allDay: true
        }
    ];


    return (
        <Fragment>
            {/* calendar(2 weeks) to show events searched with buttons to go back and forth between weeks*/}
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100vh" }}
            />


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
