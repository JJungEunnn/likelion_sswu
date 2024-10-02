import React from 'react'
import '../../assets/scss/section/_section.scss';
import Homefull from '../../assets/img/icon/homefull.svg';
import Like from '../../assets/img/icon/like.svg';
import Search from '../../assets/img/icon/search.svg';
import Mypage from '../../assets/img/icon/mypage.svg';

const Nav = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-items">
                <li className="nav-item">
                    <img src={Homefull} alt="Homefull" />
                </li>
                <li className="nav-item">
                    <img src={Like} alt="Like"/>
                </li>
                <li className="nav-item">
                    <img src={Search} alt="Search" />
                </li>
                <li className="nav-item">
                    <img src={Mypage} alt="Mypage" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav