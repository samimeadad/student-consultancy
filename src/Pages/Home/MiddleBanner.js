import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import middleImage1 from '../../images/home/MiddleImages/1.jpg';
import middleImage2 from '../../images/home/MiddleImages/2.jpg';
import middleImage3 from '../../images/home/MiddleImages/3.jpg';
import middleImage4 from '../../images/home/MiddleImages/4.jpg';

const MiddleBanner = () => {
    return (
        <Container className='my-5 text-start'>
            <Row className='g-5'>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <p className='pt-5'>
                        UK Student Consultants is one of THE BEST Student Consultant Agencies for students who are planning to study in the UK.
                    </p>
                    <p className='py-3'>
                        UK Student Consultants understand the difficulties for a student that come with the admission process.We aim to help every student that walks through our doors. Whether it be choosing a course, an institution, starting an application or simply understanding the requirements, we offer our services to simplify the process.
                    </p>
                    <p className='py-3'>
                        UK Student Consultants has been successful in recruiting home and international students from diverse backgrounds, enrolling them to suitable universities that meet their personal and individual needs.
                    </p>
                    <p>
                        As a global student recruitment agency, we affiliate with many universities and will find the perfect course and venue that suits you. We encourage all the students from all over the world to experience their higher education in the universities of the UK.
                    </p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
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
            </Row>
        </Container>
    );
};

export default MiddleBanner;