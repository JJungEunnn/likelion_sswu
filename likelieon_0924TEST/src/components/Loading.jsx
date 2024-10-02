import React from 'react'
import Logo from '../assets/img/icon/Logo.svg'
import '../assets/scss/section/_loading.scss';

const Loading = () => {
    return (
        <div className='loading-container'>
            <img src={Logo} alt="Loading logo" className="loading-logo" />
        </div>
    )
}

export default Loading