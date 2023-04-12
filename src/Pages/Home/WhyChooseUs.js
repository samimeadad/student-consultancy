import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import whychooseus from '../../images/home/WhyChooseUs/whychooseus.jpeg';

const WhyChooseUs = () => {
    return (
        <Container className='my-5'>
            <h1 className='text-dark my-5 text-center'>WHY CHOOSE US</h1>
            <Row className='g-2'>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <img src={ whychooseus } alt="" className='img-fluid' />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <h4><b>&#x2713;</b>Internationally Recognised Universities</h4>
                    <h4><b>&#x2713;</b>High quality Education</h4>
                    <h4><b>&#x2713;</b>Short & flexible courses</h4>
                    <h4><b>&#x2713;</b>Affordable tuition fees</h4>
                    <h4><b>&#x2713;</b>Unique British Culture</h4>
                    <h4><b>&#x2713;</b>UK is the gateway of the rest of Europe</h4>
                    <h4><b>&#x2713;</b>Scholarships and Financial Support</h4>
                    <h4><b>&#x2713;</b>Strong Research Infrastructure</h4>
                    <h4><b>&#x2713;</b>Get the skills employers want</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default WhyChooseUs;