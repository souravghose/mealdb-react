import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">PandaMart</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/restaurants">Restaurants</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;