import React from 'react';
import '../../assets/scss/section/_section.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                    <img src="https://www.kusf.or.kr/images/footerIcon1.png"></img>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                    <img src="https://www.kusf.or.kr/images/footerIcon2.png"></img>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                    <img src="https://www.kusf.or.kr/images/footerIcon3.png"></img>
                </a>
                <a href="https://blog.com" target="_blank" rel="noopener noreferrer">
                    <i className="footer-blog-icon"></i>
                    <img src="https://www.kusf.or.kr/images/footerIcon4.png"></img>
                </a>
                <div className="footer-agency">
                    <select>
                        <option>유관기관 안내</option>
                        <option>기관 1</option>
                        <option>기관 2</option>
                        <option>기관 3</option>
                    </select>
                </div>
            </div>
            <div className="footer-info">
                <img src="https://www.kusf.or.kr/images/footerLogo.png" alt="footerlogo"></img>
                <div className="footer-text">
                    <p>서울특별시 송파구 올림픽로 424(방이동 88) 올림픽공원 내 테니스경기장 (우편번호: 05540)</p>
                    <p>TEL : 02-707-3767 | FAX : 02-707-3766</p>
                    <p>Copyright KUSF. All Rights Reserved.</p>
                    <p>이 사이트는 문화체육관광부와 국민체육진흥공단의 지원을 받아 시행됩니다.</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
