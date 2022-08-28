import React from 'react';
import {API_URL} from '../../config/contansts'

function leftPopup() {
    console.log('클릭');
    document.querySelector('#leftToggle').classList.toggle('popup');
}

const MatchList = ({data}) => {
    return (
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
    );
};

export default MatchList;