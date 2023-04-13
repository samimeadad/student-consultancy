import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-5 overflow-hidden w-100'>
            <Container>
                <Navbar.Brand className='mb-2'>
                    <Row className='g-1'>
                        <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                            <Link to="/" className='text-dark text-decoration-none text-center'><img className='img-fluid' style={ { width: '75px' } } src={ logo } alt="logoImage" /></Link>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 9 } lg={ 9 }>
                            <h4 className='mt-2'>Student Consultancy Service</h4>
                        </Col>
                    </Row>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link className="me-2 text-dark text-decoration-none btn btn-light" to="/home"><h5 className='fw-bold'>Home</h5></Link>
                        <Link className="me-2 text-dark text-decoration-none btn btn-light" to="/about"><h5 className='fw-bold'>About Us</h5></Link>
                        <Link className="me-2 text-dark text-decoration-none btn btn-light" to="/core-team"><h5 className='fw-bold'>Meet Our Team</h5></Link>
                        <Link className="me-2 text-dark text-decoration-none btn btn-light" to="/services"><h5 className='fw-bold'>Services</h5></Link>
                        <Link className="me-2 text-dark text-decoration-none btn btn-light" to="/career"><h5 className='fw-bold'>Career</h5></Link>
                        <Link className="me-2 text-dark text-decoration-none btn btn-light" to="/contact"><h5 className='fw-bold'>Contact Us</h5></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;