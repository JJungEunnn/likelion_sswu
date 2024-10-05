import React, { useEffect, useRef, useState } from 'react';
import Slider from './Section/Slider';

const Search = () => {
    const mapContainer = useRef(null); // 지도를 표시할 div의 ref
    const [searchInput, setSearchInput] = useState(''); // 검색어 상태
    const [placesList, setPlacesList] = useState([]); // 검색 결과 상태
    const [isKakaoLoaded, setIsKakaoLoaded] = useState(false); // Kakao API 로드 여부

    // 카카오 지도 API 로드
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services';
        script.async = true;

        script.onload = () => {
            setIsKakaoLoaded(true); // Kakao API가 로드되었음을 표시
            const mapOption = {
                center: new window.kakao.maps.LatLng(37.566535, 126.9779692), // 서울 중심 좌표 (예시)
                level: 3, // 확대 레벨
            };
            new window.kakao.maps.Map(mapContainer.current, mapOption); // 지도 생성
        };

        document.head.appendChild(script); // 스크립트를 head에 추가
    }, []);

    // 검색 함수
    const searchPlaces = (keyword) => {
        if (!isKakaoLoaded) {
            console.error("Kakao API is not loaded yet.");
            return;
        }

        const ps = new window.kakao.maps.services.Places(); // 장소 검색 객체 생성

        if (!keyword.trim()) {
            alert('장소를 입력해주세요!');
            return;
        }

        ps.keywordSearch(keyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setPlacesList(data); // 검색 결과를 상태에 저장
                const place = data[0]; // 첫 번째 장소로 이동
                moveMapToPlace(place.y, place.x);
            } else {
                alert('검색 결과가 없습니다.');
            }
        });
    };

    // 검색 결과 목록을 클릭했을 때 해당 위치로 이동하는 함수
    const moveMapToPlace = (lat, lng) => {
        if (!isKakaoLoaded) return;

        const map = new window.kakao.maps.Map(mapContainer.current, {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 3,
        });
        const moveLatLon = new window.kakao.maps.LatLng(lat, lng);
        map.setCenter(moveLatLon); // 지도 중심 이동
    };

    // 검색창에 Enter 키 입력 시 검색 수행
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchPlaces(searchInput);
        }
    };

    return (
        <div className="search-wrap">
            <Slider />
            <div className="search-bar">
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress} // keyPress 이벤트 추가
                    placeholder="장소를 검색해 주세요!"
                />
                <button onClick={() => searchPlaces(searchInput)}>검색</button>
            </div>
            <div
                ref={mapContainer}
                style={{ width: '100%', height: '400px', marginTop: '10px' }}
            ></div>
            <ul className="places-list">
                {placesList.map((place, index) => (
                    <li key={index}>
                        {place.place_name} - {place.address_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
