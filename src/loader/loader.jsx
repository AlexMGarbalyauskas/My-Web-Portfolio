import React from 'react';
import ReactLoading from 'react-loading';
import './loader.css'; // Make sure to create this CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <ReactLoading type="spinningBubbles" color='white' height={100} width={100} />
    </div>
  );
};

export default Loader;