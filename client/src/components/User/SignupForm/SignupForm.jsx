import React, { useState, useRef, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../../../utils/Account/User';
import UserError from '../Error';


function signupForm(){
    return (
        <Fragment>
            <h2>{name} Form</h2>
            <Form
                validated={validated}
                onSubmit={handleSubmit}
                className={className}
                noValidate>

            {/* progress bar */}
            <ul id="progressbar">
                <li class="active">Verify Phone</li>  
                <li>Upload Documents</li> 
                <li>Security Questions</li>
                 </ul>
                    
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
};

export default signupForm;
