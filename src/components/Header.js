import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Notification from './Notification.jsx'; // Import the Popup component

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleToggleClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleNotificationClick = () => {
    setShowPopup(true);
    // setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
  };

  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg" className="custom-navbar">
        <div className="container-fluid">
          <Navbar.Brand as={NavLink} to="/" className="brand-logo mx-4">
            <strong>Hack-A-fest</strong>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            onClick={handleToggleClick}
            className="d-lg-none"
          >
            <i className={`fas fa-home ${isNavVisible ? 'icon-active' : 'icon-inactive'}`}></i>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="navbarNav"
            className={`collapse navbar-collapse ${isNavVisible ? 'show' : ''}`}
          >
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link rounded">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/event" className="nav-link rounded">Event</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link rounded">About Us</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <NavLink to="/login" className="btn btn-outline-info color-white">Login</NavLink>
              <NavLink to="/register" className="btn btn-outline-danger mx-2">Sign up</NavLink>
              <Nav.Link 
                className="nav-link text-light border border-light rounded p-2"
                onClick={handleNotificationClick}
              >
                <i className="fas fa-bell fa-md"></i>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Notification show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Header;
