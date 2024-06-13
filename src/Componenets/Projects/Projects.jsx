import React from 'react';
import './Projects.css';
import { FaGithub } from "react-icons/fa";
import YouTube from 'react-youtube';
//import p1 from '../../videos/Project-1.mp4'; 

import Footer from '../Footer/Footer';


const Projects = () => {


  const videoIds = {
    p1: "kRttMKt5O0s",  
    p2: "ZsLX-dLFc0M",
    p3: "fi7CTMhJbco",
    p4: "eIYn-XpvEws",
    p5: "dWmOHwiCZlY",
    p6: "6K4r-VjSvvI"
  };



  return (
    <div> 
    <div className='Projects'>
    <h1 className='heading'> My Projects</h1>
    <h2 className='h2'> Find my projects on Github or down below <a href='https://github.com/AlexMGarbalyauskas'> <FaGithub/> </a> </h2>
      <div className='grid-container'>
        <div className='grid-item'>
          <a href='https://eskandaratrakchi.github.io/Market-Live-Prices-Team-Project/' target='_blank' rel='noopener noreferrer'>
          
          <YouTube className='youtube-video' videoId={videoIds.p1} />
         
            <h1>Market Live Team Project</h1>
            <p> User interface and design, provide more in-depth analysis and research tools for users, offer educational resources and tutorials for newcomers to cryptocurrency trading, integrate social media sharing features, and provide real-time news updates related to the cryptocurrency market.  </p>
          </a>
        </div>
        <div className='grid-item'>
          <a href='https://plutus.webstudio.so/?t=15863' target='_blank' rel='noopener noreferrer'>
         
          <YouTube className='youtube-video' videoId={videoIds.p2} />
          
            <h1>Plutus Team Project</h1>
            <p> Plutus is a sophisticated B2B plug-in designed to streamline the acceptance of diverse cryptocurrency tokens for businesses. Leveraging the power of Solidity smart contracts, Plutus efficiently processes transactions by automatically converting any incoming token into USDC. This ensures that businesses can seamlessly accept a wide array of cryptocurrencies while solely managing a single, stable currency—USDC—thereby eliminating inventory risk. </p>
          </a>
        </div>
        <div className='grid-item'>
          <a href='https://alexmgarbalyauskas.github.io/WebProjectFunds/' target='_blank' rel='noopener noreferrer'>
         
          <YouTube className='youtube-video' videoId={videoIds.p3} />
          
            <h1>Childrens Charities For Christmas</h1>
            <p> My first project is a simple website that promotes Christmas donations. It includes a sign-up form. Additionally, there is a fun dice game on the website to engage visitors and encourage them to participate in the donation drive. The website aims to spread awareness about the importance of giving back during the holiday season and encourages people to make a difference in their community. </p>
          </a>
        </div>
        <div className='grid-item'>
          <a href='https://alexmgarbalyauskas.github.io/Product-Webpage/' target='_blank' rel='noopener noreferrer'>
          
          <YouTube className='youtube-video' videoId={videoIds.p4} />
         
            <h1>Euro Cheese</h1>
            <p> This project is a product selling page that features a variety of cheese products from different European countries. The page utilizes XML data storage to manage and display information about each cheese product, such as its origin, type, and price. Users can browse through the different cheese options and make purchases directly from the website. This project showcases my skills in utilizing XML data storage to create a dynamic and interactive e-commerce platform. </p>
          </a>
        </div>
        <div className='grid-item'>
          <a href='https://github.com/AlexMGarbalyauskas/ProjectNetbeans-UN-sustainability-development-' target='_blank' rel='noopener noreferrer'>
         
          <YouTube className='youtube-video' videoId={videoIds.p5} />
          
            <h1>Life on Planet</h1>
            <p> This project is a Java application with a Graphic User Interface that aims to raise awareness about UN sustainability goals. Through the use of interactive graphics and data visualization, users can learn about key sustainability issues and track progress towards meeting the UN goals. This project showcases my skills in Java programming and creating engaging user experiences.  </p>
          </a>
        </div>
        <div className='grid-item'>
          <a href='https://example.com/project6' target='_blank' rel='noopener noreferrer'>
          
          <YouTube className='youtube-video' videoId={videoIds.p6} />
       
            <h1>Song List</h1>
            <p> I created a Java program that uses data structures and a graphical user interface to manage a list of songs. The program allows users to add, delete, and search for songs. Additionally, users can categorize songs into different genres. The program displays all songs in the list and allows users to easily move songs between genres. </p>
          </a>
        </div>
      </div>
      </div>
      <Footer/>

    </div>
  );
}

export default Projects;
