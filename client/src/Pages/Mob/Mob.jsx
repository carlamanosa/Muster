import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Account/User';
import MobList from "../../components/MobList/MobList";
import SuggestedFriends from "../../components/SuggestedFriends";

export default function () {
    
    User.refreshOnLoad();
    return (
        <Container  className="mt-3">
            <Row>
                <Col>
                    <h2>My mob</h2>
                    <br />
                    <MobList />
                </Col>
                <Col>
                    <h2>Suggested Friends</h2>
                    <br />
                    <SuggestedFriends />
                </Col>
            </Row>
        </Container>
    );
}
