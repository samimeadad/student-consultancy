import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-to-top';
import MessageFromFounder from './MessageFromFounder';

const AboutUs = () => {
    return (
        <Container>
            <MessageFromFounder />
            <ScrollToTop smooth />
        </Container>
    );
};

export default AboutUs;