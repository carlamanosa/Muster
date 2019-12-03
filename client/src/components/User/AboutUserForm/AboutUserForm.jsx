import React, { useState, useRef, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../../../utils/Account/User';
import UserError from '../Error';
import { Link } from 'react-router-dom';
import Drag from "./Drag.jsx";
import "./AboutUserForm.css";

const { USER_LOADING, USER_ERROR, ABOUT_USER } = User.actions;

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

    // const firstNameInput = useRef();


    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         setValidated(true);
    //         return;
    //     }
    //     const firstName = firstNameInput.current.value;

    //     // If we have everything, we run the loginUser function and clear the form
    //     doAboutFunc(questions, aboutUser);
    // };

    // // doUserFunc does a post to our "api/abouts" route and if successful, *will (hopefully)* redirect them to the AboutUser page
    // function doAboutFunc(questions, aboutUser) {
    //     setValidated(false);
    //     userDispatch({ type: USER_LOADING });
    //     api({
    //         questions,
    //         aboutUser
    //     }).then(about => {
    //         userDispatch({ type: ABOUT_USER, about });
    //     }).catch((err) => {
    //         userDispatch({ type: USER_ERROR, message: err });
    //     });
    // }

    return (
        <h1>Hello About User Form</h1>
        // <Fragment id="aboutUserForm">
        //     <h2>Tell Us About Yourself</h2>
        //     <br />
        //     <div>
        //         <Drag onChange={setDragAbout}/>

        //     </div>
        //     <Form
        //         validated={validated}
        //         onSubmit={handleSubmit}
        //         className={className}
        //         noValidate>

        //         {/* First Name */}
        //         <Form.Group controlId="formBasicFirstName">
        //             <Form.Control id="form-input"
        //                 pattern=".*\S+.*"
        //                 type="text"
        //                 placeholder="First Name"
        //                 ref={firstNameInput} />
        //         </Form.Group>

        //         {/* Last Name */}
        //         <Form.Group controlId="formBasicLastName">
        //             <Form.Control id="form-input"
        //                 pattern=".*\S+.*"
        //                 type="text"
        //                 placeholder="Last Name"
        //                 ref={lastNameInput} />
        //         </Form.Group>

        //         {/* Display Name */}
        //         <Form.Group controlId="formBasicDisplayName">
        //             <Form.Control id="form-input"
        //                 required
        //                 pattern={emailPattern}
        //                 type="text"
        //                 placeholder="Display Name"
        //                 ref={displayNameInput} />
        //             <Form.Control.Feedback type="invalid">
        //                 <DisplayNameMessage />
        //             </Form.Control.Feedback>
        //         </Form.Group>

        //         {/* Email */}
        //         <Form.Group controlId="formBasicEmail">
        //             <Form.Control id="form-input"
        //                 required
        //                 pattern={emailPattern}
        //                 type="email"
        //                 placeholder="Email"
        //                 ref={emailInput} />
        //             <Form.Control.Feedback type="invalid">
        //                 <EmailMessage />
        //             </Form.Control.Feedback>
        //         </Form.Group>

        //         {/* Password */}
        //         <Form.Group controlId="formBasicPassword">
        //             <Form.Control id="form-input"
        //                 required
        //                 pattern={passwordPattern}
        //                 type="password"
        //                 placeholder="Password"
        //                 ref={passwordInput} />
        //             <Form.Control.Feedback type="invalid">
        //                 <PasswordMessage />
        //             </Form.Control.Feedback>
        //         </Form.Group>

        //         {/* City */}
        //         <Form.Group controlId="formBasicCity">
        //             <Form.Control id="form-input"
        //                 pattern=".*\S+.*"
        //                 type="text"
        //                 placeholder="City"
        //                 ref={cityInput}
        //             />
        //             <Form.Control.Feedback type="invalid">
        //                 Please provide a valid city.
        //             </Form.Control.Feedback>
        //         </Form.Group>

        //         {/* State */}
        //         <Form.Group md="3" controlId="formBasicState">
        //             <Form.Control id="form-input"
        //                 pattern=".*\S+.*"
        //                 type="text"
        //                 placeholder="State"
        //                 ref={stateInput}
        //             />
        //             <Form.Control.Feedback type="invalid">
        //                 Please provide a valid state.
        //             </Form.Control.Feedback>
        //         </Form.Group>

        //         {/* Zip */}
        //         <Form.Group md="3" controlId="formBasicZip">
        //             <Form.Control id="form-input"
        //                 pattern=".*\S+.*"
        //                 type="number"
        //                 placeholder="Zipcode"
        //                 ref={zipInput}
        //             />
        //             <Form.Control.Feedback type="invalid">
        //                 Please provide a valid zip.
        //             </Form.Control.Feedback>
        //         </Form.Group>

        //         <Form.Group>
        //             <Form.Check id="checkbox"
        //                 required
        //                 label="Agree to terms and conditions"
        //                 feedback="You must agree before submitting."
        //             />
        //         </Form.Group>
        //         <UserError />

        //         <Form.Row id="submitButtonRow">
        //         <Button id="submit-button" type="submit">
        //             {name}
        //         </Button>
        //         </Form.Row>
        //         <br />

        //         <Form.Row id="linkRow">
        //         <p>Already have a log in? Login <Link id="link" to="/login">here</Link></p>
        //         </Form.Row>

        //     </Form>
        // </Fragment>
    );
}

export default AboutUserForm;
