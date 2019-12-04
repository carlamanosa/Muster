/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import "./MobList.css";
// geting Mob List from database 
// get info from mob list objects 

function MobList() {


    return (
        //    list of mob friends
        //  col 1-display name, link to profile
        // search for friends (bar)
        // col 2- common friends


        <Fragment>
            <Container id="friend-list" style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto' }}>
                <Card style={{ width: "100%" }}>
                    <Card.Body>DeeDee</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>MeeraIsFire</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>DieLon</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>Lauren</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>Teach</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>Calum</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>Zachary</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>MacieBaby</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>Steven</Card.Body>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Body>Sean</Card.Body>
                </Card>
            </Container>
        </Fragment>
    );
}

export default MobList;
