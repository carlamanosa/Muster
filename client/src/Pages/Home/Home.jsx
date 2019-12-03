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
        <Container className="mt-5">
            <Row>
                <Col >
                    <h2>
                        Welcome{" "}
                        <span className="member-name">
                            {user.firstName} ({user.displayName})
                        </span>
                    </h2>
                </Col>
            </Row>

            
            <Row>

                <Col>
                <h2> User Week</h2>
                    <EventUserWeek />
                </Col>

                <Col>
                    <h2>Muster Mob</h2>
                    <MyMob />
                </Col>
            </Row>

            <br/>

            <Row>
                <Col>
                    <MobList />
                </Col>
                </Row>
        </Container>
    );
}
