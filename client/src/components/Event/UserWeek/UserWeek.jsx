/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import "./UserWeek.css";
import Event from "../../../utils/Account/Events";
import moment, { weekdays } from "moment";

// get user saved events from database
const { EVENTS_LOADING, SET_USER_EVENTS, EVENTS_ERROR } = Event.actions;

function UserWeek() {
    Event.refreshDbOnLoad();
    const [{ userEvents }] = Event.useContext();
    const [weekDates, setWeekDates] = useState([{
        date: "",
        day: ""
    }]);

    const getWeek = () => {
        const weekDateArr = [];
        for (let i = 0; i < 7; i++) {
            const date = moment().add(i, "day").format('YYYY[-]MM[-]DD');
            const day = moment().add(i, 'day').format('dddd');
            const datesObj = {
                date,
                day
            }
            weekDateArr.push(datesObj);
        }
        setWeekDates(weekDateArr);
        console.log(weekDateArr);
        console.log(userEvents);

    }

    useEffect(() => {
        getWeek();
    }, []);

    return (
        <Container id="user-week" style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto' }}>

            {/* table*/}
            {/* event listeners for clicking the day of the week or name of the event*/}
            <Table responsive>
                <tbody >
                    {weekDates.map(day => {
                        return (
                            <Fragment >
                                <tr>
                                    <td>{day.day}</td>
                                </tr>
                                <tr>
                                    <Card id="UserWeekDayCard" style={{ width: "100%" }}>
                                        <Card.Body><Card.Text>Captials at Ducks</Card.Text><Card.Text>7:00 PM</Card.Text></Card.Body>
                                    </Card>
                                </tr>
                            </Fragment>
                            )
                    })}
                </tbody>
            </Table>



        </Container>
    );
}

export default UserWeek;
