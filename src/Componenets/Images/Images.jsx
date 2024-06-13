import React, { useState } from 'react';
import './Images.css';
import image_1 from '../../assets/profilepic.jpg';
import image_2 from '../../assets/hackathon.webp';



const Images = () => {
  const images = [image_1, image_2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='images-section'>
      <div className='text-container'>
        <h1>Code events I have attended</h1>
        <p>3rd Place Winner at Dublin Hackathon 2024 
        As a proud member of the team project "Plutus" that secured 3rd place in the Dublin Hackathon 2024, I demonstrated my skills and creativity in a competitive and fast-paced environment. This experience was a tremendous eye-opener to blockchain technology and its applications.</p>
        <p> I am now eager to expand my network and engage with experienced professionals in the blockchain space to deepen my knowledge and skills. I am determined to leverage their expertise to further enhance my understanding of blockchain technology and its potential impact on various industries.</p>
        <button onClick={nextImage}>Next</button>
      </div>
      <div className='image-box'>
       
          <img src={images[currentIndex]} alt={`Gallery ${currentIndex}`} />
        </div>
      </div>
  
  );
};

export default Images;