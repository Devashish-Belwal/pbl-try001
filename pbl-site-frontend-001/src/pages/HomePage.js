import React from 'react';
import HomeCarousel from '../component/HomeCarousel';
import AboutUs from '../component/AboutUs';
import Teams from '../component/Teams';

const HomePage = () => {
  return (<>
    <HomeCarousel/>
    <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
        <AboutUs/>
        <Teams/>
    </div>
  </>)
}

export default HomePage