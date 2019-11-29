import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Account/User';
import Testing from "../../components/Testing";

export default function () {
    
    User.refreshOnLoad();
    const [{ user }] = User.useContext();

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
                    <h2>this is the profilepage page</h2>
                    <Testing />
                </Col>
            </Row>
        </Container>
    );
}
