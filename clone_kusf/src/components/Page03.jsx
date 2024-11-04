import React, { useEffect } from 'react';
import Nav from "./Section/Nav";
import "../assets/scss/section/_page03.scss";

const Page03 = () => {
    useEffect(() => {
        if (!window.kakao) {
            const script = document.createElement('script');
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=7276bb4a7aa3c138f08d1768bf67c92b&autoload=false';
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                window.kakao.maps.load(() => {
                    initializeMap();
                });
            };
        } else {
            window.kakao.maps.load(() => {
                initializeMap();
            });
        }
    }, []);

    const initializeMap = () => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(37.515, 127.115),
            level: 3
        };

        const map = new window.kakao.maps.Map(container, options);

        // 지도 타입 컨트롤을 지도에 추가합니다
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

        // 줌 컨트롤을 지도에 추가합니다
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        // 마커 설정
        const markerPosition = new window.kakao.maps.LatLng(37.515, 127.115);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    };

    return (
        <div>
            <header className="page03__header">
                <img
                    src="https://www.kusf.or.kr/images/sub3TopImg.png"
                    alt="한국대학스포츠협의회"
                    className="page03__header-image"
                />
                <h1 className="page03__title">
                    <strong>한국대학스포츠협의회</strong>
                </h1>
                <p className="page03__subtitle">
                    대한민국 대학스포츠를 대표하고 통합하는 국내 유일의 기관
                </p>
            </header>
            <Nav />
            <h2>찾아오시는 길</h2>
            <div id="map" style={{ width: '1000px', height: '400px', margin: '0 auto' }}></div>

            <div className="page03__info">
                <div>
                    <img src="https://www.kusf.or.kr/images/img_subRnd_13.png" alt="" className='page03__info_img'></img>
                </div>
                <div>
                    <h3>INFORMATION</h3>
                    <p>주소: 서울특별시 송파구 올림픽로 424(방이동 88) 올림픽공원 내 테니스경기장 2층 한국대학스포츠협의회(우편번호: 05540)</p>
                    <p>전화: 02-707-3767, 3768 | 팩스: 02-707-3766, 02-423-3766 | 이메일: kusf@kusf.or.kr</p>
                    <p>찾아오시는 길: 주변 지하철 올림픽공원역(9호선, 5호선) 3번출구, 주변버스정류장 올림픽선수촌아파트(24-745, 24-744), 올림픽공원테니스장(24-246)</p>
                </div>
            </div>
        </div>
    );
};

export default Page03;
