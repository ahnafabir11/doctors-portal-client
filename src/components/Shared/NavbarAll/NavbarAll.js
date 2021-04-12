import './NavbarAll.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarAll = () => {
  return (
    <div className="Navbar py-4">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav_link_text">Home</Link>
            <Link to="/appointment" className="nav_link_text">Appointment</Link>
            <Link to="/dashboard" className="nav_link_text">DashBoard</Link>
            <Link to="/" className="nav_link_text">Reviews</Link>
            <Link to="/" className="nav_link_text">Blog</Link>
            <Link to="/" className="nav_link_text">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarAll;