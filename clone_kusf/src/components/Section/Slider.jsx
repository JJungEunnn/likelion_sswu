import React from 'react';
import '../../assets/scss/section/_section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';


// 필요한 모듈만 임포트합니다.
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Pagination, Autoplay]}  // 네비게이션 제거하고 필요한 모듈만 유지
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}  // 페이지네이션(도트) 활성화
                autoplay={{ delay: 3000 }}        // 자동 슬라이드 기능
                loop={true}                       // 무한 루프
            >
                <SwiperSlide>
                    <img src="https://www.kusf.or.kr/UploadDir/main/20240906112826793841.jpg" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.kusf.or.kr/UploadDir/main/20240819175912692402.jpg"alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.kusf.or.kr/UploadDir/main/20240819175912692403.jpg" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.kusf.or.kr/UploadDir/main/20240819175912692404.jpg" alt="Slide 4" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
