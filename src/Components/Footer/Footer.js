import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

//component for footer
const Footer = () => {
    return (
        <footer className="bg-light text-dark p-5 overflow-hidden w-100">
            <div className="text-center mb-5 overflow-hidden w-100">
                <img style={ { width: '75px' } } src={ logo } alt="logoImage" className='img-fluid' />
            </div>
            <div className="container my-5 overflow-hidden">
                <h5 className="text-justify text-dark text-center overflow-hidden">
                    We are a UK based higher education consultancy creating a rewarding higher education experience for international students in the UK
                </h5>
            </div>
            <Container className='my-5 overflow-hidden'>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h3 className="text-dark fw-bold text-center mb-3">About UK Student Consultants</h3>
                        <p className="text-justify text-dark ms-2">As one of the leading consultancy services, UK Student Consultants has access to an extensive network of schools and universities in the United Kingdom. We guarantee guidance and ease to students all over world to help them reach their true potential. Our aim is to connect you with top institutions accross the United Kingdom and to support your development throughout your academic career. Grow together.</p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } className="text-center">
                        <h3 className="text-dark mb-5 fw-bold">Locations</h3>
                        <p>
                            <span>London</span>
                            <br />
                            <span>Sussex</span>
                            <br />
                            <span>Bristol</span>
                            <br />
                            <span>Liverpool</span>
                            <br />
                            <span>Birmingham</span>
                            <br />
                            <span>Manchester</span>
                        </p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } className="text-center">
                        <h3 className="text-dark mb-5 fw-bold overflow-hidden">Navigation</h3>
                        <p className='overflow-hidden text-center'>
                            <Link to="/home" className='text-decoration-none'><span>HOME</span></Link>
                            <br />
                            <Link to="/about" className='text-decoration-none'><span>ABOUT</span></Link>
                            <br />
                            <Link to="/service" className='text-decoration-none'><span>SERVICE</span></Link>
                            <br />
                            <Link to="/contact" className='text-decoration-none'><span>CONTACT</span></Link>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='text-center overflow-hidden'>
                <p>
                    <Button variant='light' className='p-3'><h5><FontAwesomeIcon className="text-danger" icon={ faPhoneVolume } /> <a className="text-decoration-none text-danger fw-bold" href="tel: +44123456789"> : +44123456789</a></h5></Button>
                </p>
                <p className="text-dark text-center fs-6 fw-bold">UK Students Consultancy Service, Whitechapel Road, London, UK</p>
                <p className="text-secondary text-center fs-6"><small className='fw-bold'>Copyright &copy; { ( new Date().getFullYear() ) } UK Student Consultants</small></p>
            </Container>
        </footer>
    );
};

export default Footer;