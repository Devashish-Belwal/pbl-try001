import './App.css';
import Navbar from './component/Navbar.js';
import HomeCarousel from './component/HomeCarousel.js';
import TeamStandings from './component/TeamStandings.js';
import AboutUs from './component/AboutUs.js';

function App() {
  return (<div className='mainBackground'>
    <Navbar/>
    <HomeCarousel/>
    <br/>
    <AboutUs/>
    <br/>
    <TeamStandings/>
  </div>);
}

export default App;
