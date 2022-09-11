import React, { useState } from 'react';
import HostCus from './component/HostCus';
import HostPlayer from './component/HostPlayer';
import HostRes from './component/HostRes';
import HostTicket from './component/HostTicket';
import './host.scss';

const Host = () => {
    // 선수 등록 or 티켓 등록
    const [ isClick, setIsClick ] = useState("hostCus");
    const onClick = (e) => {
        setIsClick(e.target.className);
        // console.log(e.target.className);
        // console.log(isClick);
        // if (isClick === "hostCus") {
        //     document.querySelector(".hostCus").style.background = 'red'
        // } else {
        //     document.querySelector(".hostCus").style.background = 'none'
        // }
    }
    // console.log(isClick);

    // const handlePlayer = () => {
    //     setIsClick(true);
    //     console.log("선수등록");
    //     document.querySelector('.hostPlayer').classList.toggle('color');
    //     document.querySelector('.hostTicket').classList.remove('color');
    //     document.querySelector('.hostCus').classList.remove('color');
    // }

    return (
        <div id='host'>
            <h1>HOST</h1>
            <div>
                <div id='register'>
                    <div id='choice'>
                        <ul>
                            <li onClick={onClick} className="hostCus">회원목록</li>
                            <li onClick={onClick} className="hostPlayer">선수 등록</li>
                            <li onClick={onClick} className="hostTicket">티켓 등록</li>
                            <li onClick={onClick} className="hostRes">Team 등록</li>
                        </ul>
                    </div>
                    <div id='input'>
                            {isClick==="hostCus"&&<HostCus />}
                            {isClick==="hostPlayer"&&<HostPlayer />}
                            {isClick==="hostTicket"&&<HostTicket />}
                            {isClick==="hostRes"&&<HostRes />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Host;