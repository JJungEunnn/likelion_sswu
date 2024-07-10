import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { portfolioText } from '../data/portfolio'

const Port = () => {
    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">
            Port
            <div className="video__inner">
                    <VideoCard videos={portfolioText} />
            </div>
        </Main>
    )
}

export default Port

