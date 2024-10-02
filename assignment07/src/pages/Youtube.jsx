import React from 'react'
import Main from '../components/section/Main'
import { youtubeText } from '../data/youtube'
import VideoCard from '../components/video/VideoCard'

const Youtube = () => {
    return (
        <Main 
            title = "유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다.">
            Youtube
            <div className="video__inner">
                    <VideoCard videos={youtubeText} />
            </div>
        </Main>
    )
}

export default Youtube