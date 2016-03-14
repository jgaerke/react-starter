import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const GlobalNavbar = (props) => {
  return <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React Starter</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login</NavItem>
        <NavItem eventKey={2} href="#">Register</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default GlobalNavbar
