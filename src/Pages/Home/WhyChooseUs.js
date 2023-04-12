import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import whychooseus from '../../images/home/WhyChooseUs/whychooseus.jpeg';

const WhyChooseUs = () => {
    return (
        <Container className='my-5'>
            <h1 className='text-dark my-5 text-center'>WHY CHOOSE US</h1>
            <Row className='g-5 my-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h5>Support With Every Aspect Of The Application</h5>
                    <p>Our students get a team of experts who focus on each area of the application process. Each student is paired with an expert Strategist who oversees their application and helps them create a list of safety, target and reach schools.</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h5>Access To Former Admissions Officers (FAOs)</h5>
                    <p>Our experts have previously been the decision-makers at the top universities in the UK & US. Our FAO service includes a full application review.</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h5>Extracurricular Support Program</h5>
                    <p>We provide our students with a range of unique out-of-classroom opportunities — from the ability to intern at Uber or PwC, to teaming them up with like-minded scientists, coders, humanitarians, artists and/or musicians from around the world.</p>
                </Col>
            </Row>
            <Row className='g-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h5>Our National and Global UK Student Consultants Alumni Networks</h5>
                    <p>Our UK Student Consultants Alumni Network connects students from all 8 Ivy League schools, MIT, Stanford, Oxford, Cambridge and more. Many of our alumni return to support future admits.</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h5>Our Student Success</h5>
                    <p>Our students are 4x more likely to gain admission to the Ivy League and other top schools than the general applicant. All our student results are audited by one of the Big Four accounting firms — making our reporting both accurate and reliable.</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h5>Our Founders Have Done It</h5>
                    <p>Our Co-Founder and CEO Jamie Beaton is only 26 but is a graduate of Harvard, Stanford and Oxford. Many university consultancies are run by people that don’t know what it's like to succeed at a competitive institution in the last 5-8 years...but we do!</p>
                </Col>
            </Row>
            <Row className='g-2 my-5'>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <img src={ whychooseus } alt="" className='img-fluid' />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <h4><b>&#x2713;</b>Internationally Recognised Universities</h4>
                    <h4><b>&#x2713;</b>High Quality Education</h4>
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