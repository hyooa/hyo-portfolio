import React from 'react';
import './match.scss';

const Match = () => {
    return (
        <div id='fixtures'>
            <h1>Fixtures & Ticket</h1>
            <div>
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
                <div id='matchList'>
                    <div id='matchTeam'>
                        <div id='ticket'>티켓 구매</div>
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
                        <div id='ticket'>티켓 구매</div>
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
                        <div id='ticket'>티켓 구매</div>
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