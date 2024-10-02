import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { websiteText } from '../data/website'

const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
            Home
            <div className="video__inner">
                    <VideoCard videos={websiteText} />
            </div>
        </Main>
    )
}

export default Home
