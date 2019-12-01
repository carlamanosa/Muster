/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import "./UserWeek.css";

// get user saved events from database

function UserWeek() {

    return (
        <Container>
            <Card id="user-week">
                <Card.Body>

                     {/* table*/}
                {/* event listeners for clicking the day of the week or name of the event*/}
                <Table responsive>
                    <tbody>
                        <tr>
                        <td>Sunday</td>
                        
                        </tr>
                        <tr>
                        <td>Monday</td>
                        
                        </tr>
                        <tr>
                        <td>Tuesday</td>
                       
                        </tr>
                        <tr>
                        <td>Wednesday</td>
                        
                        </tr>
                        <tr>
                        <td>Thursday</td>
                        
                        </tr>
                        <tr>
                        <td>Friday</td>
                        
                        </tr>
                        <tr>
                        <td>Saturday</td>
                        
                        </tr>
                    </tbody>
                    </Table>
                           
                </Card.Body>
                </Card>  

           
        </Container>
    );
}

export default UserWeek;
