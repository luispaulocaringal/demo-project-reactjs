import { useState } from 'react';
import { SlideOutDown } from '../Animation/Animation';

import './Navbar.css';

import brobyteLogo from '../../assets/brobyte_logo.png';

function Navbar () {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="logo" src={brobyteLogo} alt="BroByte"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => setActiveTab("home")}>
              <a className={"nav-link " + (activeTab === "home" && "active")} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("contact")}>
              <a className={"nav-link " + (activeTab === "contact" && "active")} href="#">Contact</a>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("marketing")}>
              <a className={"nav-link " + (activeTab === "marketing" && "active")} href="#">Marketing</a>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("finance")}>
              <a className={"nav-link " + (activeTab === "finance" && "active")} href="#">Finance</a>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("insight")}>
              <a className={"nav-link " + (activeTab === "insight" && "active")} href="#">Insight</a>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("content")}>
              <a className={"nav-link " + (activeTab === "content" && "active")} href="#">Content</a>
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
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </SlideOutDown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar