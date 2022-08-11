import React, { useEffect } from 'react';

const Middle1 = () => {
    var imgArr = new Array();
    imgArr[0] = './image/우승.jpg';
    imgArr[1] = './image/아기.jpg';
    imgArr[2] = './image/아저씨.jpg';
    useEffect(() => {
        showImg()
    },[imgArr])
    function showImg() {
        var imgNum = Math.round(Math.random()*2);
        var objImg = document.getElementById('img');
        objImg.src = imgArr[imgNum];
        setTimeout(showImg, 4000);
    }

    return (
            <div id='main'>
                <img id='img' src='' alt=''></img>
                <div id='main_text'>
                    <div id='text_left'>
                        <h1>CHELSEA</h1>
                    </div>
                    <div id='text_right'>
                        <h1>Football Club</h1>
                    </div>
                </div>
            </div> 
    );
};

export default Middle1;