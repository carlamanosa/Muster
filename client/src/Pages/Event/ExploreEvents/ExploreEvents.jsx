import React from "react";
import Container from 'react-bootstrap/Container';
import User from '../../../utils/Account/User';
import { EventApiCalendar } from '../../../components';
import { EventSearchForm } from "../../../components";

export default function () {
    User.refreshOnLoad();

    return (
        <Container className="mt-5">
            <EventSearchForm />
            <EventApiCalendar />
        </Container>
    );
}
