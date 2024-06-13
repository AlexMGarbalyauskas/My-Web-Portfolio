import React from 'react'
import './CV.css'
import cv from '../../assets/AlexGarbalyauskas_CV.jpg'
import cvJ from '../../assets/AlexGarbalyauskas_CV.jpg'
import cvPdf from '../../assets/AlexGarbalyauskas_CV.pdf' 
import word from '../../assets/wordcv.docx'

import Footer from '../Footer/Footer'

const CV = () => {
  return (
    <div> 
      <div className='CV'>
        <h1>My Curriculum Vitae</h1>
        <p></p>
        <div className="image-container">
          <img src={cv} alt='CV' />
        </div>
        <div className="button-container">
          <a href={cvJ} download="AlexGarbalyauskas_CV.jpg">
            <button>Download JPG</button>
          </a>
          <a href={cvPdf} download="AlexGarbalyauskas_CV.pdf">
            <button>Download PDF</button>
          </a>
          <a href={word} download="wordcv.docx">
            <button>Download Word</button>
          </a>
        </div>
      </div>
      <Footer/> 
    </div>
  )
}

export default CV