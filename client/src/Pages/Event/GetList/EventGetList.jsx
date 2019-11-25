import React from "react";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table'
import Event from '../../../utils/Account/Events';
import User from "../../../utils/Account/User";
import { EventRow } from '../../../components';
import { EventSearchForm } from "../../../components";

export default function () {

    User.refreshOnLoad();
    Event.refreshApiOnLoad();
    const [{ apiEvents, pageLoading }] = Event.useContext();

    console.log("EventGetList.jsx.apiEvents: ", apiEvents);

    return pageLoading ? (
        <div className="d-flex justify-content-center mt-5">
            <Spinner className="mt-5" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    ) : (
            <Container className="mt-5">
                <EventSearchForm />                
                <Table>
                    <thead>
                        <tr>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody>
                    {console.log("on page render: ", apiEvents)}
                    {apiEvents.map(event =>
                        <EventRow {...event} />
                    )}
                    </tbody>
                </Table>
            </Container>
        );
}
