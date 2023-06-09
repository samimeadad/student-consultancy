import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import member1 from '../../images/core-team/members/member1.jpg';
import { Link } from 'react-router-dom';

const CoreTeamMembers = () => {
    return (
        <Container className='text-center my-5 overflow-hidden w-100'>
            <Row className='g-5 my-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Chartered Accountant
                            </Card.Text>
                            <Link to="/core-team/member-1"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Partner
                            </Card.Text>
                            <Link to="/core-team/member-2"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Assistant Accountant
                            </Card.Text>
                            <Link to="/core-team/member-3"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='g-5 my-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Chartered Accountant
                            </Card.Text>
                            <Link to="/core-team/member-1"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Partner
                            </Card.Text>
                            <Link to="/core-team/member-2"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Assistant Accountant
                            </Card.Text>
                            <Link to="/core-team/member-3"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='g-5 my-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Chartered Accountant
                            </Card.Text>
                            <Link to="/core-team/member-1"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Partner
                            </Card.Text>
                            <Link to="/core-team/member-2"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card style={ { width: '22rem', height: "100%" } }>
                        <Card.Img variant="top" src={ member1 } style={ { borderRadius: "50%" } } className="img-fluid w-50 m-auto" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Sami Meadad Choudhury, Web Developer</Card.Title>
                            <Card.Text>
                                Assistant Accountant
                            </Card.Text>
                            <Link to="/core-team/member-3"><Button variant="dark">View Profile</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CoreTeamMembers;