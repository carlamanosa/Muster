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
                        {/* <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td> */}
                        </tr>
                        <tr>
                        <td>Monday</td>
                        {/* <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td> */}
                        </tr>
                        <tr>
                        <td>Tuesday</td>
                        {/* <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td> */}
                        </tr>
                        <tr>
                        <td>Wednesday</td>
                        {/* <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td> */}
                        </tr>
                        <tr>
                        <td>Thursday</td>
                        {/* <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td> */}
                        </tr>
                        <tr>
                        <td>Friday</td>
                        {/* <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td> */}
                        </tr>
                        <tr>
                        <td>Saturday</td>
                        {/* <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td> */}
                        </tr>
                    </tbody>
                    </Table>
                           
                </Card.Body>
                </Card>  

           
        </Container>
    );
}

export default UserWeek;
