import React from 'react';
import { Container } from 'react-bootstrap';

const BannerText = () => {
    return (
        <Container className='text-center my-5 overflow-hidden w-100'>
            <section className='my-5 text-center'>
                <div className='my-5 text-center'>
                    <h1>Welcome to UK Student Consultancy Service</h1>
                    <h1 className='text-warning fw-bold'>______________________________</h1>
                </div>
                <div className='my-5 text-start w-75 m-auto' style={ { textAlign: "justify" } }>
                    <p style={ { textAlign: "justify" } }>
                        UK Student Consultants was first founded in July 2012 in the heart of London and now operating from both London and Birmingham. We are an experienced and professional student consultancy firm and we provide the highest standards of academic tutoring, mentoring and admissions support.
                    </p>
                    <p style={ { textAlign: "justify" } }>
                        What makes Path unique is our tutors actively teach in Britain’s leading independent schools and we hand-pick the best one to support you. Enabling direct access to Britain’s most qualified teachers through private one-to-one online lessons.
                    </p>
                    <p style={ { textAlign: "justify" } }>
                        Our firms are registered to carry on student consultancy all over the UK.
                    </p>
                </div>
            </section>
        </Container>
    );
};

export default BannerText;