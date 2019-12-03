/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/Container";
import "./UserWeek.css";

// get user saved events from database

function UserWeek() {

    return (
        <Container id="user-week">
        
                     {/* table*/}
                {/* event listeners for clicking the day of the week or name of the event*/}
                <Table responsive>
                    <tbody>
                    
                        <td>Sunday</td>
                        
                        
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
                         

           
        </Container>
    );
}

export default UserWeek;
