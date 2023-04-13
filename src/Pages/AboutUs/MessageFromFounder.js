import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../images/aboutus/messagefromfounder-banner.jpg';

const MessageFromFounder = () => {
    return (
        <Container className='my-5 text-justified'>
            <div className="text-center mb-5 overflow-hidden w-100">
                <img src={ banner } alt="bannerImage" className='img-fluid' />
            </div>
            <Row className='g-5 my-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h1>Photo of the CEO/Founder</h1>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                    <div>
                        <p>
                            It gives me great pleasure to welcome you to Student Consultancy Service. As the founder and chairman of Student Consultancy Service educational consultancy, I am privileged to be a part of the education industry today. Understanding the competitive environment, we strive to facilitate excellent educational options for the personal growth and career fulfilment of students aspiring to study abroad.
                        </p>
                        <p>
                            With more than a decade of experience in the field of overseas education consultancy, I have realised that it is one of the most volatile industries in the world and most specifically in Bangladesh. We provide a vital service to obtain admission to popular courses in premium institutions, colleges, and universities overseas, extending an adaptable service package that ensures complete support and guidance right from pre-application processes.
                        </p>
                        <p>
                            Our highly dedicated and committed team strives to achieve excellence in the field of overseas educational consultancy, and I am honoured to be the leader of this team. The success of our organisation, ever since it was established in 2012, can be attributed to our ability to continually identify and respond to the changing demands across the ever-expanding international education sector.
                        </p>
                        <p>
                            With a keen focus on quality education, we are steadfast in our path, giving assistance and aid to students for attaining meritorious heights. We work closely to serve students in fulfilling their academic dreams through a cost-effective package and professional guidance. We look forward to answering your queries and ensuring effective assistance for your education, overseas.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MessageFromFounder;