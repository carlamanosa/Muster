/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import "./UserWeek.css";

// get user saved events from database

function UserWeek() {

    return (
        <Container id="user-week" style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto' }}>

            {/* table*/}
            {/* event listeners for clicking the day of the week or name of the event*/}
            <Table responsive>
                <tbody >

                    <td>Sunday</td>
                    <br />
                    <tr>
                        <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </tr>                    
                    <tr>
                        <td>Monday</td>
                    </tr>
                    <tr>
                        <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </tr>                    
                    <tr>
                        <td>Tuesday</td>
                    </tr>
                    <tr>
                        <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </tr>                    
                    <tr id="TodayDisplay">
                        <td>Wednesday</td>
                    </tr>
                    <tr>
                        <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </tr>                    
                    <tr>
                        <td>Thursday</td>
                    </tr>
                    <tr>
                        <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </tr>                    
                    <tr>
                        <td>Friday</td>
                    </tr>
                    <tr>
                        <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </tr>                    
                    <tr>
                        <td>Saturday</td>
                    </tr>
                    <tr>
                        <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </tr>                    
                </tbody>
            </Table>



        </Container>
    );
}

export default UserWeek;
