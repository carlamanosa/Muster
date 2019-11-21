import React, { useRef } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { UseBuyBestContext } from "../../Utils/GlobalState";

const NavSearch = () => {
  const inputRef = useRef();
  const [_, dispatch] = UseBuyBestContext();

  function handleSubmit(ev) {
    ev.preventDefault();
    dispatch({ type: "search", type: inputRef.current.value });
    inputRef.current.value = "";
  }

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">BuyBest</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/wishlist">Wish List</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
      </Nav>
      <Form inline
      onClick={handleSubmit}
      >
        <FormControl type="text" ref={inputRef} placeholder="Search" className="mr-sm-2" />
        <Nav.Link href="/search"><Button type="submit" variant="outline-Dark">Search</Button></Nav.Link>
      </Form>
    </Navbar>
  );
};

export default NavSearch;