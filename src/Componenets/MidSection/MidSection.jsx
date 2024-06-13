import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MidSection.css'


const MidSection = () => {
  const words = ['Welcome to my portfolio', 'My name is Alex Maryus Garbalyauskas', ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [speed] = useState(130);

  useEffect(() => {
    const wordFlickInterval = setInterval(() => {
      if (forwards) {
        if (offset >= words[currentWordIndex].length) {
          setSkipCount(prevCount => prevCount + 1);
          if (skipCount === 15) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }
      }

      if (skipCount === 0) {
        if (forwards) {
          setOffset(prevOffset => prevOffset + 1);
        } else {
          setOffset(prevOffset => prevOffset - 1);
        }
      }
    }, speed);

    return () => clearInterval(wordFlickInterval);
  }, [currentWordIndex, offset, forwards, skipCount, speed, words]);

  return (
    <div className='midsection container'>
      <div className='text'>
        <h1 className="word">{words[currentWordIndex].substr(0, offset)}</h1>
        <p>Here you can find out more about me, my projects, my CV, and contact.</p>
        <Link to='About' className='btn'>Explore more </Link>
      </div>
    </div>
  );
};

export default MidSection;
