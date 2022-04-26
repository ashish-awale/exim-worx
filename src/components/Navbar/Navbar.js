// import React, { useState } from 'react';
import React  from 'react';
// import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import Logo from "../../images/Exim-worx.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs/AboutUs';
import ContactUs from '../../pages/ContactUs/ContactUs';
import ErrorPage from '../../pages/errorpage/ErrorPage';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import Services from '../../pages/Services/Services';
import Team from '../../pages/Team/Team';
import Footer from '../Footer/Footer';

const Navbar = () => {

    // const[isMobile, setIsMobile]= useState(true);

    return (
        <Router>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src={Logo} alt="logo" className="navbar-logo" />
                </Link>
                <Link to="/" className="navbar-title">
                    Exim <span>Worx</span>
                </Link>
                {/* <ul className= {isMobile ? "nav-items-mobile" : "nav-items"}
                onClick = {() => setIsMobile(false)}
                > */}
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/" >HOME</Link></li>
                    <li className="nav-item"><Link to="/aboutus"> ABOUT US</Link></li>
                    <li className="nav-item"><Link to="/services">SERVICES</Link></li>
                    <li className="nav-item"><Link to="/products">PRODUCTS</Link></li>
                    <li className="nav-item"><Link to="/team">TEAM</Link></li>
                    <li className="nav-item"><Link to="/contactus">CONTACT US</Link> </li>
                </ul>
                {/* <button className="mobile-menu-icon"
                onClick={()=> setIsMobile(!isMobile)}
                >
                    {isMobile ? (<i className="fas fa-times"><FaTimes/></i>) : (<i className="fas fa-bars"><FaBars/></i>)}
                </button> */}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Navbar