import React from 'react';
import ReactLoading from 'react-loading';
import './loader.css'; 

const Loader = () => {
  return (
    <div className="loader-container">
      <ReactLoading type="spinningBubbles" color='white' height={100} width={100} />
    </div>
  );
};

export default Loader;
