import React from 'react';
import '../assets/scss/footer.scss'; // Footer 스타일을 따로 작성하는 것을 권장합니다.

const Footer = () => {
  return (
    <div>
      {/* New Section (Based on the uploaded image) */}
      <div className="promo-section">
        <div className="promo-item yellow-background">
          <img
            src="https://textbook.jihak.co.kr/img/cha-foot1.svg" // Replace with the appropriate image URL
            alt="Character 1"
            className="promo-image"
          />
          <div className="promo-text">
            <h2>선생님 반가워요!</h2>
            <p>티솔루션과 첫 만남을 함께 하시겠어요?</p>
            <a href="#" className="promo-link">티솔루션 바로가기 &rarr;</a>
          </div>
        </div>
        <div className="promo-item gray-background">
          <img
            src="https://textbook.jihak.co.kr/img/cha-foot2.svg" // Replace with the appropriate image URL
            alt="Character 2"
            className="promo-image"
          />
          <div className="promo-text">
            <h2>지학사의 2022 개정 교육과정</h2>
            <p>새로운 교과서를 응원해!</p>
            <a href="#" className="promo-link">한줄평 이벤트 바로가기 &rarr;</a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-logo-section">
          <img
            src="https://textbook.jihak.co.kr/img/logo-wh.svg"
            alt="지학사 로고"
            className="footer-logo"
          />
        </div>
        <div className="footer-info">
          <p>서울특별시 마포구 신촌로6길 5 (주)지학사 대표이사 : 권준구 사업등록번호 : 105-81-31452</p>
          <p>통신판매업신고 : 제2020-서울마포-0362호 E-mail : WEBMASTER@JIHAK.CO.KR</p>
          <p>대표번호 : 02-330-5200 교과서 구입문의 : 02-330-5303 독서평설 정기구독 문의 : 02-3142-2002</p>
          <p>COPYRIGHT©2015 JIHAKSA PUBLISHING CO.LTD. ALL RIGHT RESERVED.</p>
          <p>(주)지학사의 콘텐츠를 사전 허가 없이 학교수업 외의 목적으로 이용하는 경우(불법복제,전송,유통 등) 저작권법 제25조에 의해 법적 처벌을 받을 수 있습니다.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
