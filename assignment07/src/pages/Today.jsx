import React from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/today'
import VideoCard from '../components/video/VideoCard'

const Today = () => {
    return (
        <Main 
            title = "추천 영상"
            description="오늘의 추천 유튜브 영상입니다.">
            Today
            <div className="video__inner">
                    <VideoCard videos={todayText} />
            </div>
        </Main>
    )
}

export default Today