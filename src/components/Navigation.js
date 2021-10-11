import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./namelogo.png"
            height="50"
            width="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://radams017.github.io/react-portfolio#/">
              About Me
            </Nav.Link>
            <Nav.Link href="https://radams017.github.io/react-portfolio/#/projects">
              Projects
            </Nav.Link>
            <Nav.Link href="Ryan_Adams_Resume_v6.pdf" download>
              Resume
            </Nav.Link>
            <Nav.Link href="https://radams017.github.io/react-portfolio/#/contact">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
