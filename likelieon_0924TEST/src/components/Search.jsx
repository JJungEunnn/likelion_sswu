import React, { useEffect, useRef, useState } from 'react';
import Slider from './Section/Slider';
import searchIcon from '../assets/img/icon/search.svg'; // 검색 아이콘 경로
import list from '../assets/img/icon/list.svg'
const Search = () => {
    const mapContainer = useRef(null); // 지도를 표시할 div의 ref
    const mapRef = useRef(null); // 지도를 저장할 ref
    const [searchInput, setSearchInput] = useState(''); // 검색어 상태
    const [placesList, setPlacesList] = useState([]); // 검색 결과 상태
    const [markerRef, setMarkerRef] = useState(null); // 마커 상태
    const [isPopupVisible, setIsPopupVisible] = useState(false); // 팝업 상태 관리

    // 카카오 지도 API 로드
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=66569a236cc1bc3e6828434c0aa9c07f&libraries=services';
        script.async = true;

        script.onload = () => {
            const mapOption = {
                center: new window.kakao.maps.LatLng(37.566535, 126.9779692), // 서울 중심 좌표 (예시)
                level: 3, // 확대 레벨
            };
            mapRef.current = new window.kakao.maps.Map(mapContainer.current, mapOption); // 지도 생성

            // 마커 객체 생성
            const marker = new window.kakao.maps.Marker({
                position: mapOption.center,
            });
            marker.setMap(mapRef.current); // 지도에 마커를 추가
            setMarkerRef(marker); // 마커 상태에 저장
        };

        document.head.appendChild(script); // 스크립트를 head에 추가
    }, []);

    // 검색 함수
    const searchPlaces = (keyword) => {
        const ps = new window.kakao.maps.services.Places(); // 장소 검색 객체 생성

        if (!keyword.trim()) {
            alert('장소를 입력해주세요!');
            return;
        }

        ps.keywordSearch(keyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setPlacesList(data); // 검색 결과를 상태에 저장
                const place = data[0]; // 첫 번째 장소로 이동
                moveMapToPlace(place.y, place.x); // 검색된 장소로 지도 이동 및 마커 업데이트
            } else {
                alert('검색 결과가 없습니다.');
                setPlacesList([]); // 검색 결과가 없을 때 상태 초기화
            }
        });
    };

    // 검색된 장소로 이동하고 마커를 업데이트하는 함수
    const moveMapToPlace = (lat, lng) => {
        const moveLatLon = new window.kakao.maps.LatLng(lat, lng);
        mapRef.current.setCenter(moveLatLon); // 지도 중심 이동

        // 마커 위치를 업데이트
        if (markerRef) {
            markerRef.setPosition(moveLatLon);
        }
    };

    // 검색창에 Enter 키 입력 시 검색 수행
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchPlaces(searchInput);
        }
    };

    // 아이콘 클릭 시 검색 수행
    const handleIconClick = () => {
        searchPlaces(searchInput);
    };

    return (
        <div className="search-wrap">
            <Slider />
            <div className="search-bar">
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={handleKeyDown} // onKeyPress 대신 onKeyDown 사용
                    placeholder="장소를 검색해 주세요!"
                />
                <img
                    src={searchIcon}
                    alt="검색"
                    className="search-icon"
                    onClick={handleIconClick} // 아이콘 클릭 이벤트 추가
                />
            </div>
            <div
                ref={mapContainer}
                className="map-container"
                style={{ width: '375px', height: '375px', marginTop: '10px' }} // 지도의 크기 설정
            ></div>
            <button className="list-button" onClick={() => setIsPopupVisible(true)}>
                목록보기
                <img src={list} alt="목록 아이콘" style={{ width: '20px', height: '20px', marginRight: '8px' }} />

            </button>

            {/* 팝업 창 */}
            {isPopupVisible && (
                <div className="popup-container">
                    <div className="popup">
                        <h3>"{searchInput}" 주변에 있는 곳</h3>
                        <ul>
                            {placesList.map((place, index) => (
                                <li key={index}>
                                    {place.place_name}
                                </li>
                            ))}
                        </ul>
                        <button className="close-button" onClick={() => setIsPopupVisible(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
