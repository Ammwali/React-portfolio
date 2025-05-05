import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={`navbar flex-row ${navbarSolid ? 'navbar-scrolled' : ''}`}>
      <div className="nav-logo">AMMARA</div>
      <div className={`nav-items flex-row ${menuOpen ? 'mobile-active' : 'mobile'}`}>
        <li><Link onClick={() => setMenuOpen(false)} to="home" smooth duration={500} className='cursor'>Home</Link></li>
        <li><Link onClick={() => setMenuOpen(false)} to="services" smooth duration={500} className='cursor'>Services</Link></li>
        <li><Link onClick={() => setMenuOpen(false)} to="about" smooth duration={500} className='cursor'>About</Link></li>
        <li><Link onClick={() => setMenuOpen(false)} to="projects" smooth duration={500} className='cursor'>Projects</Link></li>
        <li><Link onClick={() => setMenuOpen(false)} to="contact" smooth duration={500} className='cursor'>Contact</Link></li>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;