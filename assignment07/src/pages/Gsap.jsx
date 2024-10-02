import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { gsapText } from '../data/gsap'

const Gsap = () => {
    return (
        <Main 
            title = "GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다.">
            Gsap
            <div className="video__inner">
                    <VideoCard videos={gsapText} />
            </div>
        </Main>
    )
}

export default Gsap
