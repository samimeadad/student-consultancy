import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import middleImage1 from '../../images/home/MiddleImages/1.jpg';
import middleImage2 from '../../images/home/MiddleImages/2.jpg';
import middleImage3 from '../../images/home/MiddleImages/3.jpg';
import middleImage4 from '../../images/home/MiddleImages/4.jpg';
import background from '../../images/home/MiddleImages/blur-background-1.jpg';

const MiddleBanner = () => {
    return (
        <div className='w-100 overflow-hidden p-5' style={ { backgroundImage: `url(${ background })`, backgroundSize: "cover", overflow: 'hidden' } }>
            <Container className='my-5 text-start'>
                <Row className='g-5 my-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                        <Row className='my-5'>
                            <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                                <img src={ middleImage1 } alt="" className='img-fluid w-75' />
                            </Col>
                            <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                                <img src={ middleImage2 } alt="" className='img-fluid w-75' />
                            </Col>
                        </Row>
                        <Row className=''>
                            <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                                <img src={ middleImage3 } alt="" className='img-fluid w-75' />
                            </Col>
                            <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                                <img src={ middleImage4 } alt="" className='img-fluid w-75' />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <p className='pt-5'>
                            UK Student Consultants is one of THE BEST Student Consultant Agencies for students who are planning to study abroad.
                        </p>
                        <p className='py-3'>
                            UK Student Consultants understand the difficulties for a student that come with the admission process.We aim to help every student that walks through our doors. Whether it be choosing a course, an institution, starting an application or simply understanding the requirements, we offer our services to simplify the process.
                        </p>
                        <p className='py-3'>
                            UK Student Consultants has been successful in recruiting home and international students from diverse backgrounds, enrolling them to suitable universities that meet their personal and individual needs.
                        </p>
                        <p>
                            As a global student recruitment agency, we affiliate with many universities all over the world and will find the perfect course and venue that suits you. We encourage all the students from all over the world to experience their higher education in the universities of Europe and America.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="my-5"><br></br></div>
        </div>

    );
};

export default MiddleBanner;