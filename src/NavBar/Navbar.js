import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import {NavLink} from 'react-router-dom'

const NavBar1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark light expand="md">
        <NavbarBrand href="/">Onix Advisors</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" to="/register">Register</NavLink>
            </NavItem>
              <NavItem>
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar1;