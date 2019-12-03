import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Account/User';
import MobList from "../../components/MobList/MobList";
import SuggestedFriends from "../../components/SuggestedFriends";
import SearchFriends from "../../components/SearchFriends";

export default function () {
    
    User.refreshOnLoad();
    const [{ user }] = User.useContext();

    

    return (
        <Container className="mt-2">
            <Row>
                <Col>
                    <h3>My mob</h3>
                    <br />
                    <MobList />
                </Col>
                <Col>
                    <h3>Search Friends</h3>
                    <br />
                    <SearchFriends />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3>Suggested Friends</h3>
                    <br />
                    <SuggestedFriends />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}
