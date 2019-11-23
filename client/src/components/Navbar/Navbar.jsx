/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from "./NavLink";
import NavbarBrand from "./NavbarBrand";
import User from "../../utils/Account/User";
import "./Navbar.css";

const { USER_LOADING, SET_USER } = User.actions;

function MyNavbar() {
  const [{ user }, userDispatch] = User.useContext();
  function logout() {
    userDispatch({ type: USER_LOADING });
    User.API.logout().then(user => {
        userDispatch({ type: SET_USER, user });
    });
  }
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        {!user.email && (
        <NavbarBrand to="/login">Muster</NavbarBrand>
        )}
        {user.email && (
          <Fragment>
            <NavbarBrand to="/">Muster</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/candle">Event</NavLink>
                <NavLink to="/candle/create">Create Event</NavLink>
                <Nav.Link eventKey="/logout" onClick={logout}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Fragment>
        )}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
