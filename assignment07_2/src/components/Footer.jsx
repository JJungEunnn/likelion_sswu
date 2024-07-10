import React from 'react';
import '../scss/footer.scss';
import logo from '../img/footer/footer_logo.svg'

const Footer = () => (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="FILA Logo" className="footer-logo" />
        <ul className="footer-links">
          <li>매장안내</li>
          <li>공지사항</li>
          <li>FILA MEMBERSHIP</li>
          <li>단체 판매</li>
          <li>대리점 개설문의</li>
          <li>FILA 입찰 참여 안내</li>
        </ul>
        <address className="footer-address">
          서울특별시 성북구 보문로 35 피엘라(주) 대표이사: 김진태
          <br />
          사업자등록번호: 716-81-01573 사업자정보확인 통신판매업신고: 제 2020-서울강동-0160 호
          <br />
          개인정보관리책임자: 이유주
          <br />
          본 사이트의 상품이미지는 저작권을 피엘라(주)에 있으며, 내용을 무단복제할 수 없습니다.
          <br />
          관련 소재문의에 대한 권리는 보호받습니다.
        </address>
        <ul className="footer-legal">
          <li>통합회원 이용약관</li>
          <li>개인정보 처리방침</li>
          <li>사업자 정보확인</li>
        </ul>
      </div>
      <div className="footer-right">
        <button className="cs-center-button">CS CENTER</button>
        <p>1577-3472</p>
        <p>filaonline@fila.com</p>
        <p>평일 월 - 금: 09시 - 18시 (공휴일 제외)</p>
        <div className="footer-country">
          <span>KOREA</span>
          <span>FAMILY SITE</span>
        </div>
      </div>
    </footer>
  );

export default Footer;
