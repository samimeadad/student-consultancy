import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import flag1 from '../../images/home/Countries/as-flag.gif';
import flag2 from '../../images/home/Countries/au-flag.gif';
import flag3 from '../../images/home/Countries/ca-flag.gif';

const Countries = () => {
    return (
        <div className='my-5 w-100 overflow-hidden'>
            <Container className='text-center'>
                <h1 className='text-center my-5'>COUNTRIES WE COVERED</h1>
                <Row className='g-5 text-center ms-4 my-3'>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <Card style={ { width: '18rem', height: "55%" } }>
                            <Card.Img variant="top" src={ flag1 } className="img-fluid m-auto" style={ { height: '12rem' } } />
                            <Card.Body>
                                <Card.Title className='fs-4'>Australia</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <Card style={ { width: '18rem', height: "55%" } }>
                            <Card.Img variant="top" src={ flag2 } className="img-fluid m-auto" style={ { height: '9rem' } } />
                            <Card.Body>
                                <Card.Title className='fs-4'>Austria</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <Card style={ { width: '18rem', height: "55%" } }>
                            <Card.Img variant="top" src={ flag3 } className="img-fluid m-auto" style={ { height: '12rem' } } />
                            <Card.Body>
                                <Card.Title className='fs-4'>Canada</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <Card style={ { width: '18rem', height: "55%" } }>
                            <Card.Img variant="top" src={ flag3 } className="img-fluid m-auto" style={ { height: '12rem' } } />
                            <Card.Body>
                                <Card.Title className='fs-4'>Australia</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="my-5"><br></br></div>
            <div className="my-5"><br></br></div>
        </div >
    );
};

export default Countries;