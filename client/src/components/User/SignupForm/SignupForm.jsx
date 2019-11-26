import React, { useState, useRef, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../../../utils/Account/User';
import UserError from '../Error';
import "./SignupForm.css";

const { USER_LOADING, SET_USER, USER_ERROR } = User.actions;

export default function ({
    api,
    name,
    emailPattern,
    passwordPattern,
    EmailMessage = "",
    PasswordMessage = ""
}) {
    User.refreshOnLoad();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, userDispatch] = User.useContext();
    const emailInput = useRef();
    const passwordInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const email = emailInput.current.value;
        const password = passwordInput.current.value;

        // If we have an email and password we run the loginUser function and clear the form
        doUserFunc(email, password);
    };

    // doUserFunc does a post to our "api/login" route and if successful, redirects us the the members page
    function doUserFunc(email, password) {
        setValidated(false);
        userDispatch({ type: USER_LOADING });
        api({
            email,
            password
        }).then(user => {
            userDispatch({ type: SET_USER, user });
        }).catch((err) => {
            userDispatch({ type: USER_ERROR, message: err });
        });
    }

    return (
        <Fragment>
            <h2>{name} Form Does this Change?</h2>
            <ul id="progressbar">
                <li class="active">Verify Phone</li>  
                <li>Upload Documents</li> 
                <li>Security Questions</li>
                 </ul>

            <Form
                validated={validated}
                onSubmit={handleSubmit}
                className={className}
                noValidate>
                                
            {/* Email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        pattern={emailPattern}
                        type="email"
                        placeholder="Enter email"
                        ref={emailInput} />
                    <Form.Control.Feedback type="invalid">
                        <EmailMessage />
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        pattern={passwordPattern}
                        type="password"
                        placeholder="Password"
                        ref={passwordInput} />
                    <Form.Control.Feedback type="invalid">
                        <PasswordMessage />
                    </Form.Control.Feedback>
                </Form.Group>
                    <UserError />
                <Button variant="primary" type="submit">
                    {name}
                </Button>
            </Form>
        </Fragment>
    );
}
