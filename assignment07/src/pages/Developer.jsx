import React from 'react'
import Main from '../components/section/Main'
import { developerText } from '../data/developer'
import VideoCard from '../components/video/VideoCard'
const Developer = () => {
    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            Developer
            <div className="video__inner">
                    <VideoCard videos={developerText} />
                </div>
        </Main>
    )
}

export default Developer