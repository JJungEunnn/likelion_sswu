import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/section/_section.scss';
import Home from '../../assets/img/icon/home.svg';
import Homefull from '../../assets/img/icon/homefull.svg';
import Like from '../../assets/img/icon/like.svg';
import Likefull from '../../assets/img/icon/likefull.svg';
import Search from '../../assets/img/icon/search.svg';
import Searchfull from '../../assets/img/icon/searchfull.svg';
import Mypage from '../../assets/img/icon/mypage.svg';
import Mypagefull from '../../assets/img/icon/mypagefull.svg';

const Nav = () => {
    const [active, setActive] = useState('home'); // 기본적으로 'home' 버튼이 활성화 상태
    const navigate = useNavigate();

    // 첫 로딩 시 Main 페이지로 이동 (Only first time)
    useEffect(() => {
        if (window.location.pathname === '/') { // 첫 로딩 시에만 메인으로 이동
            navigate('/main');
        }
    }, [navigate]);

    // Home 클릭 시
    const handleHomeClick = () => {
        setActive('home'); // Home 버튼을 활성화 상태로 설정
        navigate('/main'); // Main 페이지로 이동
    };

    // Like 클릭 시
    const handleLikeClick = () => {
        setActive('like'); // Like 버튼을 활성화 상태로 설정
        navigate('/like'); // Like 페이지로 이동
    };

    // Search 클릭 시
    const handleSearchClick = () => {
        setActive('search'); // Search 버튼을 활성화 상태로 설정
        navigate('/search'); // Search 페이지로 이동
    };

    // Mypage 클릭 시
    const handleMypageClick = () => {
        setActive('mypage'); // Mypage 버튼을 활성화 상태로 설정
        navigate('/mypage'); // Mypage 페이지로 이동
    };

    return (
        <nav className="nav-bar">
            <ul className="nav-items">
                <li className="nav-item" onClick={handleHomeClick}>
                    <img src={active === 'home' ? Homefull : Home} alt="Home Button" />
                </li>
                <li className="nav-item" onClick={handleLikeClick}>
                    <img src={active === 'like' ? Likefull : Like} alt="Like Button" />
                </li>
                <li className="nav-item" onClick={handleSearchClick}>
                    <img src={active === 'search' ? Searchfull : Search} alt="Search Button" />
                </li>
                <li className="nav-item" onClick={handleMypageClick}>
                    <img src={active === 'mypage' ? Mypagefull : Mypage} alt="Mypage Button" />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
