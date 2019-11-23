/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import User from "../utils/Account/User";
import Event from "../utils/Account/Events";
import { Switch, Route } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {
    LoggedInRoute,
    LoggedOutRoute
} from "../components";
import {
    NotFound,
    Login,
    Signup,
    Home,
    EventAddList,
    EventGetList,
    EventAdd,
    EventGet
} from "../pages";

function Routes() {
    const [{ pageLoading }] = User.useContext();
    User.refreshOnLoad();
    return (
        <Fragment>
            {pageLoading ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner className="mt-5" animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Event.Provider>
                    <Switch>
                        <LoggedInRoute exact path="/" component={Home} />
                        <LoggedInRoute exact path="/event/addlist" component={EventAddList} />
                        <LoggedInRoute exact path="/event/getlist" component={EventGetList} />
                        <LoggedInRoute exact path="/event/add" component={EventAdd} />
                        <LoggedInRoute exact path="/event/get" component={EventGet} />
                        <LoggedOutRoute exact path="/login" component={Login} />
                        <LoggedOutRoute exact path="/signup" component={Signup} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Event.Provider>
            )}
        </Fragment>
    );
}

export default Routes;
