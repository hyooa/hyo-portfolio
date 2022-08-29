import React, { useEffect, useState } from 'react';
import './match.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketMonth } from '../modules/match';
import MatchList from './component/MatchList';
import LeftToggle from './component/LeftToggle';
import { Link, useParams } from 'react-router-dom';

const MatchMonth = () => {
    const [ isClick, setIsClick ] = useState(false);
    const handleMonth = () => {
        setIsClick(true);
        console.log("월 클릭");
    }


    const {month} = useParams();
    const { data, loading, error } = useSelector(state=>state.myTicket.ticketMonth);
    const dispatch = useDispatch();
    console.log(month);

    useEffect(() => {
        dispatch(getTicketMonth(month))
    }, [dispatch, month])

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;


    return (
        <div id='fixtures'>
            <LeftToggle />
            <img src='../image/logo2.png' alt=''></img>
            <h1>Fixtures & Ticket</h1>
            <div id='center'>
                <div id='month'>
                    <ul>
                        <Link to={`/matchMonth/August`}>
                            <li className={month === "August" ? "bgcolor" : ""} >
                                <p>August</p>
                                <p></p>
                            </li>
                        </Link>
                        <Link to={`/matchMonth/September`}>
                            <li className={month === "September" ? "bgcolor" : ""} >
                                <p>September</p>
                                <p></p>
                            </li>
                        </Link>
                        <Link to={`/matchMonth/October`}>
                            <li className={month === "October" ? "bgcolor" : ""} >
                                <p>October</p>
                                <p></p>
                            </li>
                        </Link>
                        <Link to={`/matchMonth/November`}>
                            <li className={month === "November" ? "bgcolor" : ""} >
                                <p>November</p>
                                <p></p>
                            </li>
                        </Link>
                        <Link to={`/matchMonth/December`}>
                            <li className={month === "December" ? "bgcolor" : ""} >
                                <p>December</p>
                                <p></p>
                            </li>
                        </Link>
                    </ul>
                </div>
                <MatchList data={data}/>
            </div>
        </div>
    );
};

export default MatchMonth;