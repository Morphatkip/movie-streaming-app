import React, { useState } from "react";

const Carousel = ({ children, autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Carousel">
      {children.map((child, index) => (
        <div
          key={index}
          className={
            index === currentIndex ? "CarouselItem active" : "CarouselItem"
          }
        >
          {child}
        </div>
      ))}
      <div className="CarouselNav">
        <button onClick={handlePrev} className="NavButton prev">
          ‹
        </button>
        <button onClick={handleNext} className="NavButton next">
          ›
        </button>
      </div>
      <div className="CarouselDots">
        {children.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "Dot active" : "Dot"}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
