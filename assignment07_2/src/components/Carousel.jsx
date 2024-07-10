import React, { useState, useEffect } from 'react';
import '../scss/carousel.scss';
import Navbar from '../components/Navbar';
import logo from '../img/header/logo.svg'
import icon1 from '../img/header/icon1.svg'
import icon2 from '../img/header/icon2.svg'
import icon3 from '../img/header/icon3.svg'
import icon4 from '../img/header/icon4.svg'
import header01 from '../img/carousel/header01.svg';
import header02 from '../img/carousel/header02.svg';
import header03 from '../img/carousel/header03.svg';
import header04 from '../img/carousel/header04.svg';
import header05 from '../img/carousel/header05.svg';

const images = [header01, header02, header03, header04, header05];
const carousel = {
    header01: [
      { img: header01, explain:'24 NEW 인터런'}, 
    ],
    header02: [
        { img: header02, explain:'FILA ECHAPPE'}, 
    ],
    header03: [
        { img: header03, explain:'COLD WAVE T-SHIRTS'}, 
    ],
    header04: [
        { img: header04, explain:'FILA WHITE LINE'}, 
    ],  
    header05: [
        { img: header05, explain:'PEITO'}, 
    ]
}


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`slide-${index}`} />
            <p>{carousel.explain}</p>
          </div>
        ))}
      </div>
      <div className="carousel-header">
        <div className="logo">
          <img src={logo} alt="FILA Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>KIDS</li>
            <li>|</li>
            <li>TENNIS</li>
            <li>BRAND</li>
          </ul>
        </nav>
        <div className="icons">
          <img src={icon1} alt="Map Icon" />
          <img src={icon2} alt="Search Icon" />
          <img src={icon3} alt="User Icon" />
          <img src={icon4} alt="Cart Icon" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
