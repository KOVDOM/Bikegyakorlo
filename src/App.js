import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { BikeListPage } from './BikeListPage';
import { BikeSinglePage } from './BikeSinglePage';
import './App.css';
import { BikeCreatePage } from './BikeCreatePage';
import { BikeModPage } from './BikeModPage';
import BikeDelPage from './BikeDelPage';

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand-sm navbar-info bg-info'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className='nav-link'><b className='betu'>Kerékpárok</b></span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/uj-kerekpar'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className='nav-link'><b className='betu'>Új kerékpár</b></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' exact element={<BikeListPage />} />
        <Route path='/bike/:bikeId' exact element={<BikeSinglePage />} />
        <Route path='/uj-kerekpar' exact element={<BikeCreatePage />} />
        <Route path='/mod-bike/:bikeId' exact element={<BikeModPage />} />
        <Route path='/del-bike/:bikeId' exact element={<BikeDelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
