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
    className,
    emailPattern,
    passwordPattern,
    EmailMessage = "",
    PasswordMessage = "",
    DisplayNameMessage = ""
}) {
    User.refreshOnLoad();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, userDispatch] = User.useContext();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const displayNameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const cityInput = useRef();
    const stateInput = useRef();
    const zipInput = useRef();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;
        const displayName = displayNameInput.current.value;
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        const location = {
            city: cityInput.current.value,
            state: stateInput.current.value,
            zip: zipInput.current.value
        }

        // If we have everything, we run the loginUser function and clear the form
        doUserFunc(email, password, displayName, firstName, lastName, location);
    };

    // doUserFunc does a post to our "api/login" route and if successful, *will (hopefully)* redirect them to the AboutUser page
    function doUserFunc(email, password, displayName, firstName, lastName, location) {
        setValidated(false);
        userDispatch({ type: USER_LOADING });
        api({
            email,
            password,
            displayName,
            firstName,
            lastName,
            location
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

                {/* First Name */}
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="First Name"
                        ref={firstNameInput} />
                </Form.Group>

                {/* Last Name */}
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="Last Name"
                        ref={lastNameInput} />
                </Form.Group>

                {/* Display Name */}
                <Form.Group controlId="formBasicDisplayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                        required
                        pattern={emailPattern}
                        type="text"
                        placeholder="Choose a Display Name"
                        ref={displayNameInput} />
                    <Form.Control.Feedback type="invalid">
                        <DisplayNameMessage />
                    </Form.Control.Feedback>
                </Form.Group>

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

                {/* City */}
                <Form.Group controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="City"
                        ref={cityInput}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>

                {/* State */}
                <Form.Group md="3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="State"
                        ref={stateInput}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Zip */}
                <Form.Group md="3" controlId="formBasicZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                        pattern=".*\S+.*"
                        type="number"
                        placeholder="Zip"
                        ref={zipInput}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <UserError />
                <Button variant="primary" type="submit">
                    {name}
                </Button>
            </Form>
        </Fragment>
    );
}
