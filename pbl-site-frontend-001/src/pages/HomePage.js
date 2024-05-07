import React from 'react';
import HomeCarousel from '../component/HomeCarousel';
import AboutUs from '../component/AboutUs';
import TeamStandings from '../component/TeamStandings';

const HomePage = () => {
  return (<>
    <HomeCarousel/>
    <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
        <AboutUs/>
        <TeamStandings/>
    </div>
  </>)
}

export default HomePage