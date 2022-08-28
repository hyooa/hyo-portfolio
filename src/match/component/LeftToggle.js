import React from 'react';

function leftPopup() {
    console.log('클릭');
    document.querySelector('#leftToggle').classList.toggle('popup');
}

const LeftToggle = () => {
    return (
        <div id='leftToggle'>
                <div id='toggleSpan' onClick={()=>leftPopup()}>
                    <span></span>
                    <span></span>
                    <p>Close</p>
                </div>
                <div id='matchBox'>
                    <div id='topText'>
                        <h2>Ticket</h2>
                        <div>
                            <h3>Tottenham Hotspur</h3>
                            <p>Premier League</p>
                            <p>티켓은 최대 2장까지 구매 가능합니다.</p>
                        </div>
                    </div>
                    <div id='info'>
                        <ul>
                            <li>토트넘 홋스퍼</li>
                            <li>프리미어 리그</li>
                            <li>8월 14일 일요일</li>
                            <li>Kick-off 4:30pm</li>
                        </ul>
                    </div>
                    <div id='buy'>
                        <p>가격<span id='price'>30,000원</span></p>
                        <p>수량
                            <select name="num" id="num">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </p>
                        <p>총합<span id='total'>30,000원</span></p>
                    </div>
                    <div id='btn'>
                        <div>
                            <button><span>장바구니</span></button>
                            <span>장바구니</span>
                        </div>
                        <div>
                            <button><span>구매하기</span></button>
                            <span>구매하기</span>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LeftToggle;