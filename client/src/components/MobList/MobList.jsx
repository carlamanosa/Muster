/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
<<<<<<< HEAD
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
=======
>>>>>>> origin/db
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
                    Display Name 
                    Link

                    </Col>
                    <Col>
                    Common Friends
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default MobList;
