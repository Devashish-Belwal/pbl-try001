import './App.css';
import Navbar from './component/Navbar.js';
import HomeCarousel from './component/HomeCarousel.js';
import TeamStandings from './component/TeamStandings.js';

function App() {
  return (<div className='mainBackground'>
    <Navbar/>
    <HomeCarousel/>
    <TeamStandings/>
  </div>);
}

export default App;
