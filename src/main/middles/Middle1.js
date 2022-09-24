import React, { useEffect, useState } from 'react';

const Middle1 = () => {
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
    const [ScrollActive, setScrollActive] = useState(false); 
    function handleScroll() { 
        if(ScrollY > 299) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }

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
        setTimeout(showImg, 3000);
    }
    

    return (
            <div id='main'>
                    <img id='img' src='' alt=''></img>
                    <img id='screen' src='./image/선수사진/첼시7.jpg' alt=''></img>
                    <div id='main_text'>
                        <div id='text_left'>
                            <h1>
                                <span>C</span>
                                <span>H</span>
                                <span>E</span>
                                <span>L</span>
                                <span>S</span>
                                <span>E</span>
                                <span>A</span>
                            </h1>
                        </div>
                        <div id='text_right'>
                            <h1>Football Club</h1>
                        </div>
                    </div>
            </div> 
    );
};

export default Middle1;