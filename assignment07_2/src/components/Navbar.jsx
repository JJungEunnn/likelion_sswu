import React, { useState } from 'react';
import '../scss/navbar.scss';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <nav className="navbar">
      <ul>
        {['New & Featured', '의류', '신발', '용품', '언더웨어', '스포츠'].map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item}
            {hovered === index && (
              <div className="dropdown">
                {/* 드롭다운 콘텐츠를 여기에 추가 */}
                <ul>
                  {/* 예시 콘텐츠 */}
                  <li>세부항목 1</li>
                  <li>세부항목 2</li>
                  <li>세부항목 3</li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
