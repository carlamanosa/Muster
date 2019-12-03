import React, { Fragment, useEffect, useState } from "react";
import Event from '../../../utils/Account/Events';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";

import "./ApiCalendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { isSelected } from "react-big-calendar/lib/utils/selection";

const { EVENTS_ERROR, SET_QUERY_DATES, EVENTS_LOADING } = Event.actions;


function ApiCalendar() {
    const [/* user not needed */, eventDispatch] = Event.useContext();
    const [{ apiEvents, queryDates }] = Event.useContext();
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

    const apiEventsList = [];
    const savedApiEventsList = [];

    // change state and color for selected event 
    // send saved events to user database

    apiEvents.map(event => {
        apiEventsList.push({
            title: event.short_title,
            start: event.datetime_local,
            end: event.datetime_local,
            allDay: false,
            isSelected: true,
            resource: {id: event.id}
        })
    });

    const setDates = () => {
        eventDispatch({ type: SET_QUERY_DATES, dates });
    };

    const willWork = (idk) => {
        console.log(idk);
    }

    return (
        <Fragment>
            {/* calendar(2 weeks) to show events searched with buttons to go back and forth between weeks*/}
            <Calendar
                localizer={localizer}
                events={apiEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100vh" }}
                views={['month']}
                onSelectEvent={willWork}
                onDoubleClickEvent={willWork}
                onSelecting={willWork}
                />

            {/* modal for event*/}
            {/* MODAL- taxonomies, venue, city,  time, seatgeek link, mob attendees (bonus), add button*/}
        </Fragment>

    );
}

export default ApiCalendar;
