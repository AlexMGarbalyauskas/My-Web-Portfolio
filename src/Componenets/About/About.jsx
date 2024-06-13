import React from 'react';
import './About.css';
import Images from '../Images/Images';
import AboutExtra from '../AboutExtra/AboutExtra';
import Footer from '../Footer/Footer';
import { FaHandPointDown } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiMysql, DiVisualstudio } from "react-icons/di";
import { FaHtml5, FaReact, FaBootstrap, FaJava, FaCss3 } from "react-icons/fa";
import { SiXampp, SiPowershell, SiWireshark } from "react-icons/si";

const About = () => {
  return (
    <div>
      <div className='about'>
        <h1> Salutations </h1>
        <FaHandPointDown />
        <p> My name is Alex Garbalyauskas </p>
        <p> Im a 2nd-year computer science student who is currently learning cryptography and blockchain technology. With a strong foundation in programming languages, I'm excited to dive deeper into the world of Solidity and contribute to the development of decentralized applications. 
        In my previous college project, I mostly worked on web designing, where I helped create frontends for "Market Live", and various personal works. This experience has given me a solid understanding of front-end design.
        </p>
         
        <h2> Languages and Tools I have used </h2>
        
        <div className="icon-container">
          <div className="iconbox">
            <CgCPlusPlus className="icon" />
          </div>
          <div className="iconbox">
            <DiJavascript1 className="icon" />
          </div>
          <div className="iconbox">
            <FaReact className="icon" />
          </div>
          <div className="iconbox">
            <FaHtml5 className="icon" />
          </div>
          <div className="iconbox">
            <FaBootstrap className="icon" />
          </div>
          <div className="iconbox">
            <FaJava className="icon" />
          </div>
          <div className="iconbox">
            <FaCss3 className="icon" />
          </div>
          <div className="iconbox">
            <DiMysql className="icon" />
          </div>
        </div>

        <div className='icon-container'>

        <div className='iconbox'>
        <DiVisualstudio className='icon' />
        </div>

        <div className='iconbox'> 
        <SiXampp className='icon'/>
        </div>

        <div className='iconbox'>
        <SiPowershell className='icon'/>
        </div>

        <div className='iconbox'> 
        <SiWireshark className='icon'/>
        </div>

        </div>
        

      </div>
      <Images/>
      <AboutExtra/>
      <Footer />
    </div>
  )
}

export default About;