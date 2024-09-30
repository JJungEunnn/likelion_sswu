import React from 'react';
import '../../assets/scss/section/_section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide01 from '../../assets/img/png/slider01.png';
import Slide02 from '../../assets/img/png/slider02.png';
import Slide03 from '../../assets/img/png/slider03.png';
import Slide04 from '../../assets/img/png/slider04.png';

// 네비게이션 모듈은 제거하고 필요한 모듈만 임포트합니다.
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}  // 네비게이션 제거
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}  // 페이지네이션(도트) 활성화
                autoplay={{ delay: 3000 }}        // 자동 슬라이드 기능
                loop={true}                       // 무한 루프
            >
                <SwiperSlide>
                    <img src={Slide01} alt="Slide 1" className="Slide01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide02} alt="Slide 2" className="Slide02" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide03} alt="Slide 3" className="Slide03" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide04} alt="Slide 4" className="Slide04" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
