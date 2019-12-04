/* eslint-disable react/prefer-stateless-function */
import React, { Fragment, useContext, useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import "./MobCard.css";
import Event from "../../../utils/Account/Events";
import User from "../../../utils/Account/User";
// get Mob List from database
// get Mob Events from each mobs object

function MobCard() {
    User.refreshOnLoad();
   
    return (
        <Fragment>
            <Card className="card">
                <Card.Header id="event-title">Drake</Card.Header>
                <Card.Body>
                    <Card.Text id="event-date"> March 2020
                        
                    </Card.Text>
                    <Card.Text id="event-url"> drake.com
                        
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

export default MobCard;
