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
        setIsClick(e.target.id);

        
        const color = document.querySelectorAll('.color')
        color.forEach(function (re, i) {
            if (e.currentTarget === re) {
                re.classList.add('on')
            } else {
                re.classList.remove('on')
            }
        })
    }

    return (
        <div id='host'>
            <h1>HOST</h1>
            <div>
                <div id='register'>
                    <div id='choice'>
                        <ul>
                            <li onClick={onClick} id="hostCus" className='color'>회원목록</li>
                            <li onClick={onClick} id="hostPlayer" className='color'>선수 등록</li>
                            <li onClick={onClick} id="hostTicket" className='color'>티켓 등록</li>
                            <li onClick={onClick} id="hostRes" className='color'>Team 등록</li>
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