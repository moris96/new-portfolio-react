import React from 'react';
import './NavBar.css'

import { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const NavBar = () => {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
      setNavActive(!navActive);
    };
  
    const closeMenu = () => {
      setNavActive(false);
    };

    // useEffects
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 500) {
          closeMenu()
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, []);
  
    useEffect(() => {
      if (window.innerWidth <= 1200) {
        closeMenu()
      }
    }, []);



  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
            <img src='../images/logo.png' alt='logo' className='nav-img' />
        </div>
        <a className={`nav-hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
            <span className='nav-hamburger-line' />
            <span className='nav-hamburger-line' />
            <span className='nav-hamburger-line' />
        </a>
        <div className={`navbar-items ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    <Link onClick={closeMenu} activeClass='navbar-active-content' spy={true} smooth={true} offset={-70} duration={500} to='mainSection' className='navbar-content'>Home</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} activeClass='navbar-active-content' spy={true} smooth={true} offset={-70} duration={500} to='mySkills' className='navbar-content'>Skills</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default NavBar
