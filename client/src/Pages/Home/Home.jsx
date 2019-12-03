import React, { useEffect, Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Account/User';
import Event from '../../utils/Account/Events';
import MobList from "../../components/MobList/MobList";
import { EventMobCard } from "../../components";
import { EventUserWeek } from "../../components";

import './Home.css';
import TestingThings from "../../components/Testing/Testing";
import MobCard from "../../components/Event/MobCard";
import MyMob from "../../components/MyMob/MyMob";

export default function () {

    User.refreshOnLoad();
    // we eagerly load events here so when the user switches pages it will appear faster. 
    Event.refreshDbOnLoad();
    const [{ user }] = User.useContext();
    const [eventDispatch] = Event.useContext();

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
                    <EventUserWeek />
                </Col>

                <Col>
                    <h3>Muster Mob</h3>
                    <MyMob />
                </Col>
            </Row>

            <br/>

            
        </Container>
    );
}
