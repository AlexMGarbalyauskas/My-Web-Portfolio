import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const createLink = (path, label) => {
    return location.pathname === path ? <span>{label}</span> : <Link to={path}>{label}</Link>;
  };

  return (
    <div className='footer'> 
      <div className="footer-section">
        <p> Designed and developed by Alex Maryus Garbalyauskas </p> 
        <p>© 2024 AG</p>
      </div>
      
      <div className="footer-section">
        <p> Find me on </p>
        <nav className="nav2"> 
          <ul> 
            <li> <a href='https://github.com/AlexMGarbalyauskas'> <FaGithub className="icon" /> </a> </li>
            <li> <a href='https://www.linkedin.com/in/alex-garbalyauskas-2b9254255/'> <FaLinkedin className="icon" /> </a> </li>
            <li> <a href='https://www.youtube.com/channel/UCnajo0ATG8JWouLWVppJTPA'> <FaYoutube className="icon" /> </a> </li>
          </ul>
        </nav>
      </div>
      
      <div className="footer-section">
        <ul className="quick-links">
          <li>{createLink('/about', 'About')}</li>
          <li>{createLink('/projects', 'Projects')}</li>
          <li><a href="https://www.youtube.com/channel/UCnajo0ATG8JWouLWVppJTPA">Blog</a></li>
          <li>{createLink('/contact', 'Contact')}</li>
        </ul>
      </div>
      
      <div className="footer-section">
        <p> Email: alexgarbaliuaskas@gmail.com </p> 
        <p> Mobile: +353 894833513 </p> 
        <p> Location: City Dublin, Country Ireland</p>
      </div>
    </div>
  )
}

export default Footer