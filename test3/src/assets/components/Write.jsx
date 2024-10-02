import React from 'react'
import { useState } from 'react';
import App from '../../App';




const Write = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    
    const Print = () => {
        if(title ===''|)
    }
    }

    return (
        <div className='Write'>
            <input type="text" placeholder='제목을 입력해주세요' className='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <textarea placeholder='내용을 입력해주세요' className='content' value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <div>
                <button className='delete'>취소하기</button>
                <button className='write'>작성하기</button>
            </div>
        </div>
  )
}

export default Write
