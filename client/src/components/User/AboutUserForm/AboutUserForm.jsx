import React, { useState, useRef, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../../../utils/Account/User';
import UserError from '../Error';
import { Link } from 'react-router-dom';
import Drag from "./Drag.jsx";
import "./AboutUserForm.css";

const { USER_LOADING, USER_ERROR, ABOUT_USER, SET_USER } = User.actions;

function AboutUserForm({
    api,
    name,
    className,
    CheckBoxMessage = ""
}) {
    User.refreshOnLoad();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, userDispatch] = User.useContext();
    const [dragAbout, setDragAbout] = useState(["Have a Quiet Night in", "Try a New Restaurant", "Go to a Concert/Show", "Watch Sports"]);
    const [question2, setQuestion2] = useState();
    const [question3, setQuestion3] = useState();

    function doUserFunc(newUserInfo) {
        setValidated(false);
        userDispatch({ type: USER_LOADING });
        api({
            newUserInfo
        }).then(user => {
            userDispatch({ type: SET_USER, user });
        }).catch((err) => {
            userDispatch({ type: USER_ERROR, message: err });
        });
    }



    return (
        <Fragment>
            <h1>Tell Us About Yourself</h1>
            <Drag />
        </Fragment>);
}

export default AboutUserForm;
