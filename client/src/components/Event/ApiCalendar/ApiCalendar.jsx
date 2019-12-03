import React, { Fragment, useEffect, useState } from "react";
import Event from '../../../utils/Account/Events';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./ApiCalendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import User from "../../User";
import { set } from "mongoose";

const { EVENTS_ERROR, SET_EVENTS, EVENTS_LOADING } = Event.actions;

function MyEvent(props) {
    const [displayclass, setDisplayClass] = useState("notSelected");
    useEffect(() => {
        props.event && props.event.resource && props.event.resource.eventSelected ? setDisplayClass("selected") : setDisplayClass("notSelected")
    }, [props.event.resource.eventSelected]);

    return (
        <div id={displayclass}>
            <div id="padding">
                {props.title}
            </div>
        </div>
    )
}

function ApiCalendar() {
    const [/* user not needed */, eventDispatch] = Event.useContext();
    const [{ apiEvents }] = Event.useContext();
    const [apiEventsList, setApiEventsList] = useState([]);
    const [savedApiEventsList, setSavedApiEventsList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalEvent, setModalEvent] = useState({});
    const localizer = momentLocalizer(moment);

    const today = moment().format('YYYY[-]MM[-]DD');
    const twoWeeks = moment().add(14, 'day');
    console.log(moment(twoWeeks).format('YYYY[-]MM[-]DD'));
    const step = moment(today).endOf('month').toDate();
    const endMonth = moment(step).format('YYYY[-]MM[-]DD');
    const dates = {
        startDate: today,
        endDate: endMonth
    }

    useEffect(() => {
        eventDispatch({ type: EVENTS_LOADING });
    }, []);

    useEffect(() => {
        const newApiEventsList = [];
        apiEvents.map(event => {
            newApiEventsList.push({
                title: event.short_title,
                start: event.datetime_local,
                end: event.datetime_local,
                allDay: false,
                isSelected: true,
                resource: { id: event.id }
            })
        });
        setApiEventsList(newApiEventsList);
    }, [apiEvents]);

    const updateSavedEventList = () => {
        if (!includes(modalEvent)) {
            setSavedApiEventsList([...savedApiEventsList, modalEvent])
            updateItem(modalEvent, { eventSelected: true })
        } else {
            setSavedApiEventsList(savedApiEventsList.filter(item => item.resource.id !== modalEvent.resource.id))
            updateItem(modalEvent, { eventSelected: "" });
        }
        setShowModal(false);
        console.log(savedApiEventsList);
    }

    const includes = (event) => {
        return savedApiEventsList.reduce((prev, item) => prev || item.resource.id === event.resource.id, false)
    }

    const updateItem = (item, updatedFields) => {
        const newApiEventsList = apiEventsList.map(event => {
            // console.log("newApiEvents")
            if (event.resource.id === item.resource.id) {
                const resource = {
                    ...event.resource,
                    ...updatedFields
                }
                console.log({
                    ...item,
                    resource
                });
                return {
                    ...item,
                    resource
                }
            }
            return event;
        });
        setApiEventsList(newApiEventsList);
    }

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = (event) => {
        console.log("handleShowModal.event: ", event);
        setModalEvent(event);
        setShowModal(true);
    }


    // update user's events in db
    // const updateDbEvents = (eventList) => {
    //     Event.refreshApiOnLoad();
    //     Event.API.updateEvents(
    //         eventList
    //     ).then(events => {
    //         eventDispatch({ type: USER_EVENTS, events});
    //     }).catch((err) => {
    //         eventDispatch({ type: EVENTS_ERROR, message: err });
    //     });
    // }

    return (
        <Fragment>
            {/* calendar(month) to show events searched with buttons to go back and forth between weeks*/}
            <Calendar
                localizer={localizer}
                events={apiEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "80vh" }}
                views={['month']}
                components={{
                    event: MyEvent
                }}
                onSelectEvent={handleShowModal}
                popup={true}
            />

            {/* modal for event*/}
            <Modal show={showModal} onHide={handleCloseModal} animation={false}>
                <Modal.Title>{modalEvent.title}</Modal.Title>
                <Modal.Body>{modalEvent.start} - {modalEvent.end}</Modal.Body>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={updateSavedEventList}>
                    Save Event
                </Button>
            </Modal>
            {/* MODAL- taxonomies, venue, city,  time, seatgeek link, mob attendees (bonus), add button*/}
        </Fragment>

    );
}

export default ApiCalendar;
