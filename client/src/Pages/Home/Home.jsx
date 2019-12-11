import React, { useState, Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Account/User';
import Event from '../../utils/Account/Events';
import MobList from "../../components/MobList/MobList";
import { EventUserWeek } from "../../components";
import moment from "moment";

import './Home.css';
import TestingThings from "../../components/Testing/Testing";
import MusterMob from "../../components/MusterMob/MusterMob";

export default function () {

    User.refreshOnLoad();
    // we eagerly load events here so when the user switches pages it will appear faster. 
    Event.refreshDbOnLoad();
    const [{ user }] = User.useContext();
    const [selection, setSelection] = useState({
        date: moment().format('ll'),
        day: moment().format('dddd'),
        event: "",
        time: "",
        daySelected: true,
        eventId: ""
    });

    // useEffect(() => {
    //     const startPos = {
    //         lat: 0,
    //         long: 0
    //     };
    //     const geoSuccess = function (position) {
    //         startPos.lat = position.coords.latitude;
    //         startPos.long = position.coords.longitude;
    //         console.log("userLocation: ", startPos);
    //         console.log("Call USER_LOCATION dispatch here");
    //     };
    //     navigator.geolocation.getCurrentPosition(geoSuccess);
    // }, []);
    const selectionChange = (bool, clicked) => {
        setSelection({
            date: moment(clicked.date).format('ll'),
            day: clicked.day,
            event: clicked.event,
            time: clicked.time,
            daySelected: bool,
            eventId: clicked.id
        })
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col >
                    <h2 id="welcome-sign">
                        Welcome back, {" "}
                        <span className="member-name">
                            {user.firstName} 
                        </span>
                    </h2>
                </Col>
            </Row>

            <br />
            
            <Row>

                <Col>
                <h3> User Week</h3>
                    <br />
                    <EventUserWeek onSelection={selectionChange}/>
                </Col>

                <Col id="MusterSection">
                    <h3>Muster Mob</h3>
                    <MusterMob {...selection}/>
                </Col>
            </Row>

            <br/>

            
        </Container>
    );
}
