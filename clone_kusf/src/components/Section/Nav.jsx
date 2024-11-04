import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../assets/scss/section/_nav.scss";

const Nav = () => {
    const location = useLocation();
  
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/page01"
              className={`nav__link ${location.pathname === "/greeting" ? "active" : ""}`}
            >
              인사말
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/purpose" className="nav__link">
              설립목적
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/history" className="nav__link">
              연혁
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/charter" className="nav__link">
              정관
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/ci" className="nav__link">
              CI
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/page02" className="nav__link">
              조직도
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/page03" className="nav__link">
              찾아오시는 길
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/members" className="nav__link">
              회원대학
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/membership" className="nav__link">
              가입 안내
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/donations" className="nav__link">
              기부금내역
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/management" className="nav__link">
              경영공시
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };

export default Nav;
