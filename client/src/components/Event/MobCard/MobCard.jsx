/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card'
// get Mob List from database
// get Mob Events from each mobs object

export default function MobCard({ name, date, url }) {
    return (
        <Fragment>
            <Card bg="info" text="white" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {date}
                    </Card.Text>
                    <Card.Text>
                        {url}
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
