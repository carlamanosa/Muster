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
            <Container>
                <Row>
                    <Col>
                    <h4>My Friends</h4>
                    <Card id="friend-list">
                        <Card.Body>
                            {/* Display friend name */}
                            {/* Display friend profile link */}
                        </Card.Body>
                    </Card>
                    

                    </Col>
                    <Col>
                    <h4>Common Friends</h4>
                        <Card id="common-friends">
                        <Card.Body>
                            {/* Display Common friends */}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default MobList;
