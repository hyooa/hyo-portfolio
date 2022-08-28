import React, { useEffect } from 'react';
import './match.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket } from '../modules/match';
import { API_URL } from '../config/contansts';
import Month from './component/Month';
import MatchList from './component/MatchList';
import LeftToggle from './component/LeftToggle';

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

    const CK = data.filter(match => match.no);
    console.log(CK.length);
    const month = [...new Set(data.map(match => match.month))]
    console.log(month);

    return (
        <div id='fixtures'>
            <LeftToggle />
            <img src='./image/logo2.png' alt=''></img>
            <h1>Fixtures & Ticket</h1>
            <div id='center'>
            <div id='month'>
                <ul>
                    {month.map((month, index) => 
                        <li month={month} key={index}>
                            <p>{month}</p>
                            <p></p>
                        </li>
                    )}
                </ul>
            </div>
                <div id='league'>
                    <img src='./image/사자.png' alt=''></img>
                    <span>Premier League</span>
                </div>
                <div id='number'>
                    <p><span>{CK.length}</span>개의 경기가 있습니다.</p>
                </div>
                <div id='matchList'>
                    {data.map((month, index)=> (
                        <div id='matchTeam' month={month} key={index}>
                            <div id='ticket' onClick={()=>leftPopup()}>티켓 구매</div>
                            <div className='text'>
                                <div>Chelsea</div>
                                <img src='./image/logo.png' alt=''></img>
                            </div>
                            <div className='time'>
                                <div>{month.kickoff}</div>
                                <div>
                                    <div>{month.gamedate}</div>
                                    <div>{month.stadium}</div>
                                </div>
                            </div>
                            <div className='text'>
                                <img src={`${API_URL}/ticket/${month.awaylogo}`} alt=''></img>
                                <div>{month.awayname}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Match;