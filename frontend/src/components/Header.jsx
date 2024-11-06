import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Trigger search and navigate to search page
    if (term.trim() !== "") {
      navigate(`/search?name=${term}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/home">SheyRooms</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
            <Nav.Link as={Link} to="/booknow">Book Now</Nav.Link>
            <Nav.Link as={Link} to="/display">Display</Nav.Link>
            <Nav.Link as={Link} to="/update">Update</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
          </Nav>

          {/* Search input triggers search automatically on change */}
          <div className="nav-search">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className="me-2"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
