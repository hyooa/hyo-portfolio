import React, { useEffect } from 'react';
import './match.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket } from '../modules/match';
import { API_URL } from '../config/contansts';

function leftPopup() {
    console.log('클릭');
    document.querySelector('#leftToggle').classList.toggle('popup');
}

const Match = () => {

    const { data, loading, error } = useSelector(state=>state.myTicket.ticket)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTicket())
    }, [dispatch])

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;

    console.log(data);

    return (
        <div id='fixtures'>
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
                    <img src='./image/사자.png' alt=''></img>
                    <span>Premier League</span>
                </div>
                <div id='number'>
                    <p><span>10</span>개의 경기가 있습니다.</p>
                </div>
                <div id='matchList'>
                    {data.map(match=> (
                        <div id='matchTeam' key={match.no}>
                            <div id='ticket' onClick={()=>leftPopup()}>티켓 구매</div>
                            <div className='text'>
                                <div>Chelsea</div>
                                <img src='./image/logo.png' alt=''></img>
                            </div>
                            <div className='time'>
                                <div>{match.kickoff}</div>
                                <div>
                                    <div>{match.gamedate}</div>
                                    <div>{match.stadium}</div>
                                </div>
                            </div>
                            <div className='text'>
                                <img src={`${API_URL}/ticket/${match.awaylogo}`} alt=''></img>
                                <div>{match.awayname}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Match;