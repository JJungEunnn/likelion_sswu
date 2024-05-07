import React, {useState} from 'react';

const Main =()=> {
const [myName,setmyName]= useState("KJE")

    function ChangeName(){
        setmyName( myName === "KJE"? "12mg":"KJE");
    }
    return (
        <div>
            <h1>안녕하세요. {myName} 입니다.</h1>
            <button onClick={ChangeName}>Change</button>
        </div>
    );
};

export default Main;