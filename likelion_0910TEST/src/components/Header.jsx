import React from 'react';
import '../assets/scss/header.scss'; // CSS 파일을 따로 작성하여 스타일을 지정하는 것이 좋습니다.

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img
          src="https://textbook.jihak.co.kr/img/logo.svg"
          alt="지학사 로고"
          className="logo-image"
        />
      </div>
      <div className="top">
        <ul>
          <li>초등 3학년 교과서</li>
        </ul>
        <ul>
          <li>초등 4학년 교과서</li>
        </ul>
      </div>
      <nav className="nav-menu">
        <ul>  
          <li>티솔루션</li>
          <li>이벤트</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
