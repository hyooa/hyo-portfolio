import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';

const Middle2 = () => {

        // 요소 & 사이즈
        // clientWidth는 가려진 영역은 제외한 현재 화면에 보이는 요소에 대한 가로 사이즈
        // scrollWidth는 가려진 영역(스크롤 영역)을 포함한 요소의 가로 사이즈
        // 'scrollWidth - clientWidth'의 결과는 translateX로 요소를 이동시킬 수 있는 최대치
    window.onload = function(){
        const main_srcoll = document.querySelector('.list');
        const main_srcollWidth = main_srcoll.scrollWidth;
        const main_ClientWidth = main_srcoll.clientWidth;
    

        // 이벤트마다 갱신될 값
        let startX = 0;
        let nowX = 0;
        let endX = 0;
        let mainX = 0;

        // 이벤트 핸들러 선언
            // 스크롤 시작 이벤트 구현
        const onScrollStart = (e) => {
            startX = getClientX(e);
            window.addEventListener('mousemove', onScrollMove);
            window.addEventListener('touchmove', onScrollMove);
            window.addEventListener('mouseup', onScrollEnd);
            window.addEventListener('touchend', onScrollEnd);
        };
            // 스크롤 진행 이벤트 구현
        const onScrollMove = (e) => {
            nowX = getClientX(e);
            setTranslateX(mainX + nowX - startX);
        };
            // 스크롤 종료 이벤트 구현
        const onScrollEnd = (e) => {
            endX = getClientX(e);
            mainX = getTranslateX();
            if (mainX > 0) {
                setTranslateX(0);
                main_srcoll.style.transition = `all 0.3s ease`;
                mainX = 0;
            } else if (mainX < main_ClientWidth - main_srcollWidth) {
                setTranslateX(main_ClientWidth - main_srcollWidth);
                main_srcoll.style.transition = `all 0.3s ease`;
                mainX = main_ClientWidth - main_srcollWidth;
            }
            window.removeEventListener('mousedown', onScrollStart);
            window.removeEventListener('touchstart', onScrollStart);
            window.removeEventListener('mousemove', onScrollMove);
            window.removeEventListener('touchmove', onScrollMove);
            window.removeEventListener('mouseup', onScrollEnd);
            window.removeEventListener('touchend', onScrollEnd);
            window.removeEventListener('click', onClick);
            setTimeout(() => {
                bindEvents();
                main_srcoll.style.transition = '';
            }, 300)
        };
            // 클릭 이벤트 구현
        const onClick = (e) => {
            if (startX - endX !== 0) {
                e.preventDefault();
            }
        };

        // 유틸 함수 정의
            // 마우스로 클릭한 지점의 X좌표는 e.clientX로 얻을 수 있지만,
            // 터치 이벤트가 발생한 경우에는 e.touches[0].clientX를 참조해야 합니다.
        const getClientX = (e) => {
            const isTouches = e.touches ? true : false;
            return isTouches ? e.touches[0].clientX : e.clientX
        }
            // parseInt() 함수
            // 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
                // 최초 스크롤은 상관없지만,
                // 두 번째 스크롤부터는 스크롤이 종료된 위치도 고려하여 계산해야 하기 때문에
                // 요소의 translateX 위치를 가져와야 합니다.
                // window 객체에 내장된 API인 getComputedStyle 메서드를 사용하면
                // 요소가 가진 CSS의 속성 값을 얻을 수 있는데,
                // transform의 경우 x, y, z의 값을 모두 반환하므로 정규표현식을 통해 필요한 x의 값만 얻도록 했음
        const getTranslateX = () => {
            return parseInt(getComputedStyle(main_srcoll).transform.split(/[^\-0-9]+/g)[5]);
        }
            //스크롤 됨에 따라 요소의 위치를 조정해야 하기 때문에, 간편하게 함수로 만들어 재사용했습니다.
        const setTranslateX = (x) => {
            main_srcoll.style.transform = `translateX(${x}px)`;
        }

        // 이벤트 연결
        const bindEvents = () => {
            main_srcoll.addEventListener('mousedown', onScrollStart);
            main_srcoll.addEventListener('touchstart', onScrollStart);
            main_srcoll.addEventListener('click', onClick);
        };
        bindEvents();
    }

    return (
            <div id='main2'>
                <div>
                    <h2>Highlights & Full Matches</h2>
                    <div id='main2_icon'>
                        <MdDoubleArrow size='50'/>
                    </div>
                </div>
                <div>
                    <ul className='list'>
                        <li className='item'>
                            <div className='link'>
                                <div>
                                    {/* <video>
                                        <source width='100' height='100' src='https://www.youtube.com/embed/3kuwJC5H798' type='video/webm'></source>
                                    </video> */}
                                    <embed
                                        // width='100' height='100' 
                                        src='https://www.youtube.com/embed/3kuwJC5H798' 
                                        type='video/webm'>
                                    </embed>
                                    {/* <img src='./image/logo.png' alt=''></img> */}
                                </div>
                                <h4>08. 02</h4>
                                <p>
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                </p>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='link'>
                                <div>
                                    <embed
                                        src='https://www.youtube.com/embed/3kuwJC5H798' 
                                        type='video/webm'>
                                    </embed>
                                </div>
                                <h4>08. 02</h4>
                                <p>
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                </p>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='link'>
                                <div>
                                    <embed
                                        src='https://www.youtube.com/embed/3kuwJC5H798' 
                                        type='video/webm'>
                                    </embed>
                                </div>
                                <h4>08. 02</h4>
                                <p>
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                </p>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='link'>
                                <div>
                                    <embed
                                        src='https://www.youtube.com/embed/3kuwJC5H798' 
                                        type='video/webm'>
                                    </embed>
                                </div>
                                <h4>08. 02</h4>
                                <p>
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                </p>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='link'>
                                <div>
                                    <embed
                                        src='https://www.youtube.com/embed/3kuwJC5H798' 
                                        type='video/webm'>
                                    </embed>
                                </div>
                                <h4>08. 02</h4>
                                <p>
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                </p>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='link'>
                                <div>
                                    <embed
                                        src='https://www.youtube.com/embed/3kuwJC5H798' 
                                        type='video/webm'>
                                    </embed>
                                </div>
                                <h4>08. 02</h4>
                                <p>
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                    Pat Nevin: The transfer market and
                                    how quickly new signings will settle
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Middle2;