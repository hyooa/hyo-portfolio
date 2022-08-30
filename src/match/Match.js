import React, { useEffect } from 'react';
import './match.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket, getTicketMonth } from '../modules/match';
import { API_URL } from '../config/contansts';
import MatchList from './component/MatchList';
import LeftToggle from './component/LeftToggle';
import { Link, useParams } from 'react-router-dom';

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
    // console.log(data);

    const month = [...new Set(data.map(match => match.month))]
    // console.log(month);

    return (
        <div id='fixtures'>
            <img src='../image/logo2.png' alt=''></img>
            <h1>Fixtures & Ticket</h1>
            <div id='center'>
                <div id='month'>
                    <ul>
                        {month.map((month, index) => (
                            <Link to={`/matchMonth/${month}`}>
                            <li month={month} key={index}>
                                <p>{month}</p>
                                <p></p>
                            </li>
                            </Link>
                        )
                        )}
                    </ul>
                </div>
                <MatchList data={data}/>
            </div>
        </div>
    );
};

export default Match;