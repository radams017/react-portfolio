import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            src="/namelogo.png"
            height="50"
            width="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/radams017/">Github</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/ryadams1/">
            LinkedIn
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
