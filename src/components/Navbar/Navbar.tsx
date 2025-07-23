import { NavLink, Link } from 'react-router-dom';

import { SlideOutDown } from '../Animation/Animation';

import './Navbar.css';

import brobyteLogo from '../../assets/brobyte_logo.png';

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="logo" src={brobyteLogo} alt="BroByte"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => (isActive && "active") + " nav-link"} end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => (isActive && "active") + " nav-link"}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/marketing" className={({ isActive }) => (isActive && "active") + " nav-link"}>Marketing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/finance" className={({ isActive }) => (isActive && "active") + " nav-link"}>Finance</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/insight" className={({ isActive }) => (isActive && "active") + " nav-link"}>Insight</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/content" className={({ isActive }) => (isActive && "active") + " nav-link"}>Content</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hello, Louie
              </a>
              <SlideOutDown 
                className="dropdown-menu"
                duration="0.2s"
                component="ul"
              >
                <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                <li><Link to="/setting" className="dropdown-item">Settings</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to="/login" className="dropdown-item">Logout</Link></li>
              </SlideOutDown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar