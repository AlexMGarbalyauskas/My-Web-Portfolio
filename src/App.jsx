import React, { useState, useEffect } from 'react';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home';
import About from './Componenets/About/About';
import CV from './Componenets/CV/CV';
import Projects from './Componenets/Projects/Projects';
import Contact from './Componenets/Contact/Contact';
import Loader from './loader/loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Starts loading 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1 second load

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className='App'> 
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </Router>
    
  );
};

export default App;