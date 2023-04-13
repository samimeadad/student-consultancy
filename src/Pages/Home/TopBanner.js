import React from 'react';
import bannerImage from '../../images/home/banner-image/banner-image.jpg';

const TopBanner = () => {
    return (
        <div className='text-center overflow-hidden w-100'>
            <img src={ bannerImage } alt="BannerImage" className='img-fluid w-75' />
        </div>
    );
};

export default TopBanner;