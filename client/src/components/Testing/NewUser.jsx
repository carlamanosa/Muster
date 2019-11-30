import React, { useState, useRef, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from "../../utils/Account/User";
import UserError from '../User/Error';

const { USER_LOADING, ABOUT_USER, USER_ERROR } = User.actions;

export default function () {
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, userDispatch] = User.useContext();

    useEffect(() => {
        userDispatch({ type: USER_LOADING });
    }, []);

    // Where we store the user's input from our search form
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const displayNameInput = useRef();
    const cityInput = useRef();
    const stateInput = useRef();
    const zipInput = useRef();

    // The stuff that happens when form is submitted
    const handleSubmit = event => {
        // Stops the page from refreshing
        event.preventDefault();
        // Taylor's Stuff
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        // Our params object that we'll send to the DB
        // Built from user's input
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;
        const displayName = displayNameInput.current.value;
        const city = cityInput.current.value;
        const state = stateInput.current.value;
        const zip = zipInput.current.value;

        // Calling the function (dispatch) to send the user's answers to the db
        console.log(firstName, lastName, displayName, city, state, zip);
    };


    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2>New User Questions</h2>
                    <Form
                        validated={validated}
                        onSubmit={handleSubmit}
                        noValidate>
                        <Form.Row>

                            {/* Getting New User's First Name */}
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    pattern=".*\S+.*"
                                    type="text"
                                    placeholder="First Name"
                                    ref={firstNameInput} />
                            </Form.Group>

                            {/* Getting New User's Last Name */}
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    pattern=".*\S+.*"
                                    type="text"
                                    placeholder="Last Name"
                                    ref={lastNameInput} />
                            </Form.Group>

                            {/* Getting New User's Display Name */}
                            <Form.Group as={Col} controlId="formGridDisplayName">
                                <Form.Label>Display name</Form.Label>
                                <Form.Control
                                    pattern=".*\S+.*"
                                    type="text"
                                    placeholder="Display Name"
                                    ref={displayNameInput} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="formGridCity">
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
                            <Form.Group as={Col} md="3" controlId="formGridState">
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
                            <Form.Group as={Col} md="3" controlId="formGridZip">
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
                        </Form.Row>
                        <Form.Row>
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form.Row>
                    </Form>
                </Col>
                <UserError />
            </Row>
        </Container>
    );
}
