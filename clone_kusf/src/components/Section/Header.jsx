import React, { useState } from 'react'
import '../../assets/scss/section/_section.scss'

const Header = () => {
    const [index, setIndex] = useState(null);

    return (
        <header className="header">
            <div className="header-logo">
                <img src="https://www.kusf.or.kr/images/headLogo.png" alt="Logo" />
            </div>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="dropdown">
                        <a href="#u-league" onMouseEnter={() => setIndex(0)} onMouseLeave={() => setIndex(null)}>KUSF 대학스포츠 U-리그</a>
                        <ul className={`dropdown-menu ${index === 0 ? 'active' : ''}`}>
                            <li><a href="#introduction">리그소개</a></li>
                            <li><a href="#guide">참여대학 및 선수 안내</a></li>
                            <li><a href="#schedule">경기일정 및 결과</a></li>
                            <li><a href="#team-record">팀기록</a></li>
                            <li><a href="#personal-record">개인기록</a></li>
                            <li><a href="#video">경기영상</a></li>
                            <li><a href="#info">경기화보</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#club-championship" onMouseEnter={() => setIndex(1)} onMouseLeave={() => setIndex(null)}>KUSF 클럽챔피언십</a>
                        <ul className={`dropdown-menu ${index === 1 ? 'active' : ''}`}>
                            <li><a href="#club-introduction">대회소개</a></li>
                            <li><a href="#club-schedule">클럽 멤버십</a></li>
                            <li><a href="#club-results">경기일정 및 결과</a></li>
                            <li><a href="#club-results">팀기록</a></li>
                            <li><a href="#club-results">개인기록</a></li>
                            <li><a href="#club-results">경기영상</a></li>
                            <li><a href="#club-results">경기화보</a></li>
                            <li><a href="#club-results">인터뷰</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#news" onMouseEnter={() => setIndex(2)} onMouseLeave={() => setIndex(null)}>NEWS</a>
                        <ul className={`dropdown-menu ${index === 2 ? 'active' : ''}`}>
                            <li><a href="#latest-news">공지사항</a></li>
                            <li><a href="#press-releases">KUSF 보도자료</a></li>
                            <li><a href="#media-coverage">KUSF 활동현황</a></li>
                            <li><a href="#media-coverage">대학스포츠 자료실</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#main-projects" onMouseEnter={() => setIndex(3)} onMouseLeave={() => setIndex(null)}>주요사업</a>
                        <ul className={`dropdown-menu ${index === 3 ? 'active' : ''}`}>
                            <li><a href="#project1">사업 안내</a></li>
                            <li><a href="#project2">대학운동부 평가 및 지원</a></li>
                            <li><a href="#project3">학생선수 선발 정상화</a></li>
                            <li><a href="#project4">학생선수 학사관리 정상화</a></li>
                            <li><a href="#project5">학생선수 선발 정상화</a></li>
                            <li><a href="#project2">대학운동부 교육</a></li>
                            <li><a href="#project2">대학스포츠 통합마케팅</a></li>
                            <li><a href="#project2">국제교류</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#about" onMouseEnter={() => setIndex(4)} onMouseLeave={() => setIndex(null)}>한국대학스포츠협의회</a>
                        <ul className={`dropdown-menu ${index === 4 ? 'active' : ''}`}>
                            <li><a href="#about-us">인사말</a></li>
                            <li><a href="#history">설립목적</a></li>
                            <li><a href="#organization">연혁</a></li>
                            <li><a href="#project2">정관</a></li>
                            <li><a href="#project2">CI</a></li>
                            <li><a href="#project2">조직도</a></li>
                            <li><a href="#project2">찾아오시는 길</a></li>
                            <li><a href="#project2">회원 대학</a></li>
                            <li><a href="#project2">회원가입 안내</a></li>
                            <li><a href="#project2">기부금</a></li>
                            <li><a href="#project2">경영공시</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header