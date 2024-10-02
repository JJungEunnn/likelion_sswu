import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // 모듈 기능들을 각각 임포트
import 'swiper/css'; // 기본 CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../assets/scss/content01.scss';



const Content01 = () => {
  return (
    <div className="content01">
      <div className="content01-text">
        <h1>2022 개정 <br></br>교육과정 교과서</h1>
        <p>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
        <h2>EVENT</h2>
        <p>선생님! 아직 티솔루션 회원이 아니신가요? 신규 회원가입 이벤트 🎁</p>
      </div>
      <div className="content01-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="image-container">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg1.png"
                alt="이미지 1"
                className="background-image"
              />
              <img
                src="https://textbook.jihak.co.kr/img/img_mvcha1.png"
                alt="이미지 1-1"
                className="overlay-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg2.png"
                alt="이미지 2"
                className="background-image"
              />
              <img
                src="https://textbook.jihak.co.kr/img/img_mvcha2.png"
                alt="이미지 2-1"
                className="overlay-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg3.png"
                alt="이미지 3"
                className="background-image"
              />
              <img
                src="https://textbook.jihak.co.kr/img/img_mvcha3.png"
                alt="이미지 3-1"
                className="overlay-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg4.png"
                alt="이미지 4"
                className="background-image"
              />
              <img
                src="https://textbook.jihak.co.kr/img/img_mvcha4.png"
                alt="이미지 4-1"
                className="overlay-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg5.png"
                alt="이미지 5"
                className="background-image"
              />
              <img
                src="https://textbook.jihak.co.kr/img/img_mvcha5.png"
                alt="이미지 5-1"
                className="overlay-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg6.png"
                alt="이미지 6"
                className="background-image"
              />
              <img
                src="https://textbook.jihak.co.kr/img/img_mvcha6.png"
                alt="이미지 6-1"
                className="overlay-image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Content01;
