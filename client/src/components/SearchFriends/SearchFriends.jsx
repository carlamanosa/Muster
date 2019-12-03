/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./SearchFriends.css";
// geting Mob List from database 
// get info from mob list objects 

function SearchFriends() {

    return (
        
            <Container id="searchFriends">
                <br />
                <Form >
                        <Form.Row id="searchArea" >
                            <Col>
                            <Form.Control id="searchBar" placeholder="" />
                            </Col>
                            <Col>
                            <Button variant="light">Search</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                                            
                    
            </Container>
        
    );
}

export default SearchFriends;
