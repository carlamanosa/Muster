/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import "./MobCard.css";
// get Mob List from database
// get Mob Events from each mobs object

export default function MobCard({ name, date, url }) {
    return (
        <Fragment>
            <Card className="card">
                <Card.Header id="event-title">Capitals at Ducks{name}</Card.Header>
                <Card.Body>
                    <Card.Text id="event-date"> 2019-12-06T19:00:00 - 2019-12-06T19:00:00
                        {date}
                    </Card.Text>
                    <Card.Text id="event-url">
                        {url}
                    </Card.Text>
                    <Card.Text id="mob">
                        Mob:
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* card */}
            {/* Turnary object (?) if they click on day of the week or name of event - default current day of week */}
            {/* Option 1 - Day of the week */}
            {/* display- event of the day, attendees */}
            {/* Option 2 - Event selected */}
            {/* display- date, attendees, link to event info */}

            {/* scrollable within card */}
        </Fragment>
    );
}
