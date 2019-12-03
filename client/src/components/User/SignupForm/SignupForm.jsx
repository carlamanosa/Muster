import React, { useState, useRef, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../../../utils/Account/User';
import UserError from '../Error';
import { Link } from 'react-router-dom';
import "./SignupForm.css";
import Row from "react-bootstrap/Row";

const { USER_LOADING, SET_USER, USER_ERROR, FRIEND_ID } = User.actions;

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
    const[{ friendId }] = User.useContext();
    console.log(friendId);
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
            friendId,
            email,
            password,
            displayName,
            firstName,
            lastName,
            location
        }).then(user => {
            const newFriendId = friendId + 1;
            userDispatch({ type: SET_USER, user });
            userDispatch({ type: FRIEND_ID, newFriendId});
        }).catch((err) => {
            userDispatch({ type: USER_ERROR, message: err });
        });
    }

    return (
        <Fragment id="signupForm">
            <h2>Sign Up</h2>
            <br />
            <Form
                validated={validated}
                onSubmit={handleSubmit}
                className={className}
                noValidate>

                {/* First Name */}
                <Form.Group controlId="formBasicFirstName">
                    <Form.Control id="form-input"
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="First Name"
                        ref={firstNameInput} />
                </Form.Group>

                {/* Last Name */}
                <Form.Group controlId="formBasicLastName">
                    <Form.Control id="form-input"
                        pattern=".*\S+.*"
                        type="text"
                        placeholder="Last Name"
                        ref={lastNameInput} />
                </Form.Group>

                {/* Display Name */}
                <Form.Group controlId="formBasicDisplayName">
                    <Form.Control id="form-input"
                        required
                        pattern={emailPattern}
                        type="text"
                        placeholder="Display Name"
                        ref={displayNameInput} />
                    <Form.Control.Feedback type="invalid">
                        <DisplayNameMessage />
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Control id="form-input"
                        required
                        pattern={emailPattern}
                        type="email"
                        placeholder="Email"
                        ref={emailInput} />
                    <Form.Control.Feedback type="invalid">
                        <EmailMessage />
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Control id="form-input"
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
                    <Form.Control id="form-input"
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
                    <Form.Control id="form-input"
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
                    <Form.Control id="form-input"
                        pattern=".*\S+.*"
                        type="number"
                        placeholder="Zipcode"
                        ref={zipInput}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Check id="checkbox"
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <UserError />

                <Form.Row id="submitButtonRow">
                <Button id="submit-button" type="submit">
                    {name}
                </Button>
                </Form.Row>
                <br />

                <Form.Row id="linkRow">
                <p>Already have a log in? Login <Link id="link" to="/login">here</Link></p>
                </Form.Row>

            </Form>
        </Fragment>
    );
}
