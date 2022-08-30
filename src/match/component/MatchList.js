import React, {useState} from 'react';
import {API_URL} from '../../config/contansts'
import LeftToggle from '../component/LeftToggle';

const MatchList = ({data}) => {
                                // 🚨 초기값 ????????? 🚨
    const [list , setList] = useState("Leicester City");
    const onClick = (e) => {
        setList(e.target.className);
        document.querySelector('#leftToggle').classList.toggle('popup');
    }
    console.log(list); // match.awayname 받아옴

    const CK = data.filter(match => match.no);
    // console.log(CK.length);
    // console.log(data);

    return (
        <>
        <LeftToggle data={data} state={list}/>
        <div id='league'>
            <img src='../image/사자.png' alt=''></img>
            <span>Premier League</span>
        </div>
        <div id='number'>
            <p><span>{CK.length}</span>개의 경기가 있습니다.</p>
        </div>
        <div id='matchList'>
                    {data.map(match=> (
                        <div id='matchTeam' key={match.no}>
                            <div id='ticket' className={`${match.awayname}`} onClick={onClick}>티켓 구매</div>
                            <div className='text'>
                                <div>Chelsea</div>
                                <img src='../image/logo.png' alt=''></img>
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
            </>
    );
};

export default MatchList;