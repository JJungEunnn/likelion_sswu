import React from 'react'
import Slider from './Section/Slider'
import '../../src/assets/scss/section/_main.scss'
import { FaChevronRight } from 'react-icons/fa';
import introduce from '../assets/img/png/introduce.png'

const Main = () => {

    const notices = [
        '[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...',
        '2024학년도 동계 단기연수 프로그램 설명회 개최 안내',
        '[연산지원팀] 2024학년도 동계 학부생 연구 참여 프로그...',
        '[교양 교학팀] 2024-2 글로벌라운지 운영 안내',
        '2024학년도 2학기 제1차 성신 모의토익 접수 및 시행',
        '[대학혁신(2024)] 2024학년도 동계학기 글로벌 인턴십...',
        '2024학년도 2학기 수강철회 시행 안내'
    ];
    return (
        <div className='Main_wrap container'>
            <Slider />
            <div className="notice-container">
                <div className="notice-header">
                    <h2>공지사항</h2>
                </div>
                <ul className="notice-list">
                    {notices.map((notice, index) => (
                        <li key={index} className="notice-item">
                            <span>{notice}</span>
                            <FaChevronRight className="arrow-icon" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='introduce'>
                <img src={introduce} alt="introduce" />
            </div>
        </div>
    )
}

export default Main