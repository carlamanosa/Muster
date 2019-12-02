import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../../utils/Account/User';


export default function () {
    
    User.refreshOnLoad();
    const [{ user }] = User.useContext();

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2>About User Sign Up Page</h2>
                </Col>
            </Row>
        </Container>
    );
}
