import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Account/User';
import Event from '../../utils/Account/Events';
import MobList from "../../components/MobList/MobList";

const { USER_LOCATION } = Event.actions;

export default function () {
    
    User.refreshOnLoad();
    // we eagerly load events here so when the user switches pages it will appear faster. 
    Event.refreshDbOnLoad();
    const [{user}] = User.useContext();
    const [eventDispatch] = Event.useContext();

    useEffect(() => {
        const startPos = {
            lat: 0,
            long: 0
        };
        const geoSuccess = function (position) {
            startPos.lat = position.coords.latitude;
            startPos.long = position.coords.longitude;
            console.log("userLocation: ", startPos);
            console.log("Call USER_LOCATION dispatch here");
        };
        navigator.geolocation.getCurrentPosition(geoSuccess);
    }, []);


    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>
                        Welcome{" "}
                        <span className="member-name">
                            {user.email}
                        </span>
                    </h2>
                </Col>
            </Row>

            <MobList />
        </Container>
    );
}
