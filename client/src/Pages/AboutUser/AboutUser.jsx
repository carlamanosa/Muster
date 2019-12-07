import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutUserForm from "../../components/User/AboutUserForm";
import User from '../../utils/Account/User';

import './AboutUser.css';

function CheckBoxMessage() {
    return (
        <Fragment>
            You must pick at least one.
        </Fragment>
    );
}

export default function () {
    User.refreshOnLoad();

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <AboutUserForm />
                </Col>
            
            </Row>
        </Container>
    );
}
