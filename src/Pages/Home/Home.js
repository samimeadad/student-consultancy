import React from 'react';
import TopBanner from './TopBanner';
import BannerText from './BannerText';
import MiddleBanner from './MiddleBanner';
import WhyChooseUs from './WhyChooseUs';
import ScrollToTop from 'react-scroll-to-top';
import QuestionsAndAnswers from './QuestionsAndAnswers';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <BannerText />
            <MiddleBanner />
            <WhyChooseUs />
            <QuestionsAndAnswers />
            <ScrollToTop smooth />
        </div>
    );
};

export default Home;