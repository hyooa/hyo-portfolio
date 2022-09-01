import React, { useEffect, useState } from 'react';
import './match.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket } from '../modules/match';
import MatchList from './component/MatchList';

const Match = () => {

        const [list , setList] = useState("August");
        const onClick = (e) => {
            // console.log(e.target);
            setList(e.target.className);
        }
        // console.log(list);

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
    
    const select = data.filter(month=>month.month===list)
    // console.log(select);
    // console.log(data[select].awayname);

    return (
        <div id='fixtures'>
            <img src='../image/logo2.png' alt=''></img>
            <h1>Fixtures & Ticket</h1>
            <div id='center'>
                <div id='month'>
                    <ul>
                        {month.map((month) => (
                            <li>
                                <p onClick={onClick} className={`${month}`}>{month}</p>
                                <p></p>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <MatchList state={select}/>
            </div>
        </div>
    );
};

export default Match;