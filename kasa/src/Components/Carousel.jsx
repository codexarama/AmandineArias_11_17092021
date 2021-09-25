import React, { useState } from 'react';
import '../Styles/Carousel.css';

const Carousel = ({ src, alt }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const previousImg = () => {
    currentImg > 0 && setCurrentImg(currentImg - 1);
  };

  const nextImg = () => {
    currentImg < src.length - 1 && setCurrentImg(currentImg + 1);
  };

  return (
    <div className="carousel-container">
        <button className="previous" onClick={previousImg}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <img
        className="carousel-img"
        src={src[currentImg]}
        alt={`${alt} ${currentImg + 1}`}
      />
        <button className="next" onClick={nextImg}>
          <i className="fas fa-chevron-right"></i>
        </button>
      <span className="counter">
          {currentImg + 1} / {src.length}
        </span>
    </div>
  );
};

export default Carousel;
