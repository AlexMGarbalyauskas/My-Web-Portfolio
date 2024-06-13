import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logotop2.png';
import { FaHome, FaNewspaper } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav1');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='nav1 container'>
      <img src={logo} alt="" />
      <ul>
        <li><Link to='/' className='btn'><FaHome /> Home</Link></li>
        <li><Link to='/about' className='btn'><IoMdContact /> About</Link></li>
        <li><Link to='/cv' className='btn'><FaNewspaper /> CV</Link></li>
        <li><Link to='/projects' className='btn'><GoProjectSymlink /> Projects</Link></li>
        <li><Link to='/contact' className='btn'><MdContactPhone /> Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;