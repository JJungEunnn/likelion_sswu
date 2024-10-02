import React from 'react'
import Logowhite from '../../assets/img/icon/Logowhite.svg'
import '../../assets/scss/section/_section.scss'

const Header = () => {
    return (
        <div className='banner'>
            <img src={Logowhite} alt="banner-logo" className="banner-logo" />
        </div>
    )
}

export default Header