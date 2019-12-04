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
            <Card className="card" style = {{width: "100%"}}>
                <Card.Header id="event-title">Graduation!</Card.Header>
                <Card.Body>
                    <Card.Text id="event-date"> Wednesday, December 4th
                    </Card.Text>
                    <Card.Text>DeeDee</Card.Text>
                    <Card.Text>MeeraIsFire</Card.Text>
                    <Card.Text>DieLon</Card.Text>
                    <Card.Text>Lauren</Card.Text>
                    <Card.Text>Teach</Card.Text>
                    <Card.Text>Calum</Card.Text>
                    <Card.Text>Steven</Card.Text>
                    <Card.Text>Sean</Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card className="card" style = {{width: "100%"}}>
                <Card.Header id="event-title">Friday</Card.Header>
                <Card.Body>
                    <Card.Text id="event-date"> Capitals at Ducks
                    </Card.Text>
                    <Card.Text>DeeDee</Card.Text>
                    <Card.Text>MeeraIsFire</Card.Text>
                    <Card.Text>DieLon</Card.Text>
                    <Card.Text>Lauren</Card.Text>
                    <Card.Text>Teach</Card.Text>
                    <Card.Text>Steven</Card.Text>
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
