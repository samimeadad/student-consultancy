import React from 'react';
import topBanner from '../../images/core-team/top-banner/coreteam-banner.jpg';

const CoreTeamBanner = () => {
    return (
        <div className='text-center overflow-hidden w-100'>
            <img src={ topBanner } alt="BannerImage" className='img-fluid' />
        </div>
    );
};

export default CoreTeamBanner;