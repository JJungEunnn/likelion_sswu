import React from 'react'
import Main from '../components/section/Main'
import { webdText } from '../data/webd'
import VideoCard from '../components/video/VideoCard'

const Webd = () => {
    return (
        <Main 
        
            title = "베어스 티비"
            description="두산 베어스입니다.">
            Webd
            <div className="video__inner">
                    <VideoCard videos={webdText} />
            </div>
        </Main>
    )
}

export default Webd
