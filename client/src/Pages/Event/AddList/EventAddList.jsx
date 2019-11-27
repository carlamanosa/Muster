import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import User from '../../../utils/Account/User';
import Event from '../../../utils/Account/Events';
import { EventMobCard } from '../../../components';

export default function () {
    User.refreshOnLoad();
    // every time the user hits the event list page we will reload events.
    Event.refreshDbOnLoad();
    const [{events, pageLoading}] = Event.useContext();

    return pageLoading ? (
            <div className="d-flex justify-content-center mt-5">
                <Spinner className="mt-5" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        ) : (
        <Container className="mt-5">
            <Row>
                {events.map(event =>
                <Col xs={12} md={6} lg={4} xl={3}>
                    <EventMobCard {...event} />
                </Col>
                )}
            </Row>
        </Container>
        );
}