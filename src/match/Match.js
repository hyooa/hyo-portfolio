import React from 'react';
import './match.scss';

function leftPopup() {
    console.log('클릭');
    document.querySelector('#leftToggle').classList.toggle('popup');
}

const Match = () => {
    return (
        <div id='fixtures'>
            <div id='leftToggle'>
                <div id='toggleSpan' onClick={()=>leftPopup()}>
                    <span></span>
                    <span></span>
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
            {/* <Ticket/> */}
            <img src='./image/logo2.png' alt=''></img>
            <h1>Fixtures & Ticket</h1>
            <div id='center'>
                <div id='month'>
                    <ul>
                        <li>
                            <p>August</p>
                            <p></p>
                        </li>
                        <li>
                            <p>September</p>
                            <p></p>
                        </li>
                        <li>
                            <p>October</p>
                            <p></p>
                        </li>
                        <li>
                            <p>November</p>
                            <p></p>
                        </li>
                        <li>
                            <p>December</p>
                            <p></p>
                        </li>
                    </ul>
                </div>
                <div id='league'>
                    <img src='./image/호랑이.png' alt=''></img>
                    <span>Premier League</span>
                </div>
                <div id='number'>
                    <p><span>10</span>개의 경기가 있습니다.</p>
                </div>
                <div id='matchList'>
                    <div id='matchTeam'>
                        <div id='ticket' onClick={()=>leftPopup()}>티켓 구매</div>
                        <div className='text'>
                            <div>Chelsea</div>
                            <img src='./image/logo.png' alt=''></img>
                        </div>
                        <div className='time'>
                            <div>17:50</div>
                            <div>
                                <div>FRI 29 JUL 2022</div>
                                <div>DACIA ARENA</div>
                            </div>
                        </div>
                        <div className='text'>
                            <img src='./image/logo.png' alt=''></img>
                            <div>Chelsea</div>
                        </div>
                    </div>
                    <div id='matchTeam'>
                        <div id='ticket' onClick={()=>leftPopup()}>티켓 구매</div>
                        <div className='text'>
                            <div>Chelsea</div>
                            <img src='./image/logo.png' alt=''></img>
                        </div>
                        <div className='time'>
                            <div>17:50</div>
                            <div>
                                <div>FRI 29 JUL 2022</div>
                                <div>DACIA ARENA</div>
                            </div>
                        </div>
                        <div className='text'>
                            <img src='./image/logo.png' alt=''></img>
                            <div>Chelsea</div>
                        </div>
                    </div>
                    <div id='matchTeam'>
                        <div id='ticket' onClick={()=>leftPopup()}>티켓 구매</div>
                        <div className='text'>
                            <div>Chelsea</div>
                            <img src='./image/logo.png' alt=''></img>
                        </div>
                        <div className='time'>
                            <div>17:50</div>
                            <div>
                                <div>FRI 29 JUL 2022</div>
                                <div>DACIA ARENA</div>
                            </div>
                        </div>
                        <div className='text'>
                            <img src='./image/logo.png' alt=''></img>
                            <div>Chelsea</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Match;