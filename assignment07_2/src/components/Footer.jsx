import React from 'react';
import '../scss/footer.scss';
import logo from '../img/footer/footer_logo.svg'

const Footer = () => (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="FILA Logo" className="footer-logo" />
        <ul className="footer-links">
          <li>매장안내  |</li>
          <li> 공지사항  |</li>
          <li> FILA MEMBERSHIP  |</li>
          <li> 단체 판매  |</li>
          <li> 대리점 개설문의  |</li>
          <li> FILA 입찰 참여 안내</li>
        </ul>
        <div className="footer-address">
          서울특별시 성북구 보문로 35 휠라코리아(주) 대표이사: 김지헌
          <br />
          사업자등록번호: 716-81-01573 사업자정보확인 통신판매업신고: 제 2020-서울강동-0160 호
          <br />
          개인정보관리책임자: 이학우
          <br />
          본 사이트의 상품이미지는 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.
          <br />
          콘텐츠산업진흥법에 의한 콘텐츠보호안내 자세히 보기
        </div>
        <ul className="footer-legal">
          <li>통합회원 이용약관</li>
          <li>개인정보 처리방침</li>
          <li>제보센터</li>
        </ul>
      </div>
      <div className="footer-right">
        <button className="cs-center-button">CS CENTER</button>
        <p className="black-text">1577-3472</p>
  <p className="black-text">filaonline@fila.com</p>
  <p className="gray-text">평일 월 - 금: 09시 - 18시 (공휴일 제외)</p>
        <div className="footer-country">
          <span>KOREA</span>
          <span>FAMILY SITE</span>
        </div>
      </div>
    </footer>
  );

export default Footer;
