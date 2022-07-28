import React, { useEffect, useRef } from 'react';
import './main.css';

const Main = () => {

    return (
            <div id='main'>
                <div id='main_text'>
                    <div id='text_left'>
                        <h1>CHELSEA</h1>
                    </div>
                    <div id='text_right'>
                        <h1>Football Club</h1>
                    </div>
                </div>
                <div id='daepyo'>
                    <div id='Boehly'>
                        <div id='img'>
                            <img src='./image/첼시_회장.png' alt=''></img>
                            <p>Todd Boehly</p>
                        </div>
                    </div>
                    <div id='Tuchel'>
                        <div id='img'>
                            <img src='./image/첼시_감독.png' alt=''></img>
                            <p>Thomas Tuchel</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Main;