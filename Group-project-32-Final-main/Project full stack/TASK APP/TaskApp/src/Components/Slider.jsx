import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import "./style.css"; // Import CSS file for slider styles

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "../../images/1.jpg",
    "../../images/2.jpg",
    "../../images/3.jpg"
  ];
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (url) => {
    // Navigate to the specified URL
    navigate(url);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="overlay"></div> {/* Dark overlay */}
          <div className="slide-content">
            <h1>Welcome to UTMS</h1>
            <p>"Streamlining administrative tasks and staff management for university professionals, simplifies daily operations with ease"</p>
            {/* onClick handler to navigate to More.tsx */}
            <button className="more-details-btn" onClick={() => handleNavigate("/More")}>More Details</button>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
