import React, { useState } from 'react';
import HostPlayer from './component/HostPlayer';
import HostTicket from './component/HostTicket';
import './host.scss';

const Host = () => {
    // 선수 등록 or 티켓 등록
    const [ isClick, setIsClick ] = useState(true);
    const handlePlayer = () => {
        setIsClick(true);
        console.log("선수등록");
        document.querySelector('.hostPlayer').classList.toggle('color');
        document.querySelector('.hostTicket').classList.remove('color');
    }
    const handleTicket = () => {
        setIsClick(false);
        console.log("티켓등록");
        document.querySelector('.hostTicket').classList.toggle('color');
        document.querySelector('.hostPlayer').classList.remove('color');
    }

    return (
        <div id='host'>
            <h1>HOST</h1>
            <div>
                <div id='register'>
                    <div id='choice'>
                        <ul>
                            <li onClick={()=>handlePlayer()} className="hostPlayer">선수 등록</li>
                            <li onClick={()=>handleTicket()} className="hostTicket">티켓 등록</li>
                        </ul>
                    </div>
                    <div id='input'>
                            {
                                isClick ? <HostPlayer/> : <HostTicket/>
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Host;