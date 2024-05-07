import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import HomePage from './pages/HomePage.js';
import Fixtures from './pages/Fixtures.js';
import ContactUs from './pages/ContactUs.js';
import Editorial from './pages/Editorial.js';

function App() {
  return (<div className='mainBackground'>
    <Router>
      < Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/fixtures' element={<Fixtures/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/editorial' element={<Editorial/>} />
      </Routes>
    </Router>
  </div>);
}

export default App;
