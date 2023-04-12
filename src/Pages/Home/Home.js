import React from 'react';
import TopBanner from './TopBanner';
import BannerText from './BannerText';
import MiddleBanner from './MiddleBanner';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <BannerText />
            <MiddleBanner />
            <WhyChooseUs />
        </div>
    );
};

export default Home;