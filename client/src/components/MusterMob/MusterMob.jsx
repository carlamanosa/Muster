import React, { useEffect } from "react";
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalBody from 'react-bootstrap/ModalBody';
import Card from 'react-bootstrap/Card';
import User from "../../utils/Account/User";
import Mob from "../../utils/Account/Mobs";
import "./MusterMob.css";

function MusterMob(props) {
    console.log("MusterMob: ", props)

    const getMobDay = async () => {
        const allMobEvents = [];
        const mobEvents = props.mobEvents;
        mobEvents.map(event=> {
            allMobEvents.push({
                date: event.event.end,
                name: event.name,
                thing: event.event.title
            })
        })
        console.log("allMobEvents: ", allMobEvents)
        // allMobEvents.forEach(event=> {
        //     for(let i = 0; i < weekDateArr.length; i++) {
        //         if(event.date === weekDateArr[i].date) {
        //             weekDateArr[i].event = event.event;
        //             weekDateArr[i].time = event.time;
        //             weekDateArr[i].id = event.id;
        //         }
        //     }
        // })
        // setWeekDates(weekDateArr);
        // console.log(weekDateArr);
    }

    useEffect(() => {
        getMobDay();      
    }, [props]);


    // const getMobEvent = async () => {
    //     const allMobEvents = [];
    //     const mobEvents = props.mobEvents;
    //     events.map(event=> {
    //         allSavedEvents.push({
    //             date: event.end,
    //             event: event.title,
    //             time: event.time,
    //             id: event.resource.id
    //         })
    //     })
    //     console.log(allSavedEvents)
    //     const weekDateArr = [];
    //     for (let i = 0; i < 7; i++) {
    //         const date = moment().add(i, "day").format('YYYY[-]MM[-]DD');
    //         const day = moment().add(i, 'day').format('dddd');
    //         const datesObj = {
    //             date,
    //             day,
    //             event: "",
    //             time: "",
    //             id: ""
    //         }
    //         weekDateArr.push(datesObj);
    //     }
    //     allSavedEvents.forEach(event=> {
    //         for(let i = 0; i < weekDateArr.length; i++) {
    //             if(event.date === weekDateArr[i].date) {
    //                 weekDateArr[i].event = event.event;
    //                 weekDateArr[i].time = event.time;
    //                 weekDateArr[i].id = event.id;
    //             }
    //         }
    //     })
    //     setWeekDates(weekDateArr);
    //     console.log(weekDateArr);
    // }


    return (props.daySelected) ? (
        <ModalDialog id="saved-mob">
            <ModalBody style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto', 'justifyContent': 'center' }}>
                <Card className="card" style={{ width: "100%" }}>
                    <Card.Header id="event-day-title">
                        <Card.Title>{props.day}</Card.Title>
                        <Card.Subtitle>{props.date}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text id="event-date-events">Events?</Card.Text>
                    </Card.Body>
                </Card>
            </ModalBody>
        </ModalDialog>
    ) : (
            <ModalDialog id="saved-mob">
                <ModalBody style={{ 'maxHeight': '23rem', 'paddingTop': '1rem', 'minHeight': '23rem', 'overflowY': 'auto', 'justifyContent': 'center' }}>
                    <Card className="card" style={{ width: "100%" }}>
                        <Card.Header id="event-title">
                            <Card.Title>{props.event}</Card.Title>
                            <Card.Subtitle id="event-date">{props.day}, {props.date}</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text id="mob-events">Mob?</Card.Text>
                        </Card.Body>
                    </Card>
                </ModalBody>
            </ModalDialog>
        )
}

export default MusterMob;
