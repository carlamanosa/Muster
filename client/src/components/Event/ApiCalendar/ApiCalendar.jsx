import React, { Fragment, useEffect, useState } from "react";
import Event from '../../../utils/Account/Events';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";

import "./ApiCalendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import User from "../../User";
import { set } from "mongoose";

const { EVENTS_ERROR, SET_, EVENTS_LOADING } = Event.actions;

function MyEvent(props) {
    return (
        <div>
            {props.event && props.event.resource && props.event.resource.hamburger ? "it's here" : "it isn't here."} {props.title}
        </div>
    )
}


function ApiCalendar() {
    const [/* user not needed */, eventDispatch] = Event.useContext();
    const [{ apiEvents }] = Event.useContext();
    const [apiEventsList, setApiEventsList] = useState([]);
    const [savedApiEventsList, setSavedApiEventsList] = useState([]);
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
                resource: {id: event.id}
            })
        });
        setApiEventsList(newApiEventsList);
    }, [apiEvents]);

    const updateItem = (item, updatedFields) => {
        const newApiEventsList = apiEventsList.map(event => {
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

    const includes = (event) => {
        return savedApiEventsList.reduce((prev, item) => prev || item.resource.id === event.resource.id, false)
    }

    // change state and color for selected event 
    // send saved events to user database

    

    const updateSavedEventList = (newEvent) => {
        if (!includes(newEvent)) {
            setSavedApiEventsList([...savedApiEventsList, newEvent])
            updateItem(newEvent, { hamburger: true })
        } else {
            setSavedApiEventsList(savedApiEventsList.filter(item => item.resource.id !== newEvent.resource.id ))
            updateItem(newEvent, { hamburger: "" });
        }
        console.log(savedApiEventsList);
    }

    // update user's events in db
    // const updateDbEvents = (eventList) => {
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
                style={{ height: "100vh" }}
                views={['month']}
                components={{
                    event: MyEvent
                }}
                onSelectEvent={updateSavedEventList}
                />

            {/* modal for event*/}
            {/* MODAL- taxonomies, venue, city,  time, seatgeek link, mob attendees (bonus), add button*/}
        </Fragment>

    );
}

export default ApiCalendar;
