import React from 'react';
import './main.scss';

const Main = () => {
    return (
        <div>
            <header>
                <div id='header_top'>
                    <div id='header_left'>
                        <ul>
                            <li>뭐</li>
                            <li>라고</li>
                            <li>하지</li>
                        </ul>
                    </div>
                    <div id='header_img'>
                        <img src='../image/logo.png' alt=''></img>
                    </div>
                    <div id='header_left'>
                        <ul>
                            <li>뭐</li>
                            <li>라고</li>
                            <li>하지</li>
                        </ul>
                    </div>
                </div>
            </header>
            <div>
                <div id='main_text'>
                    <h1>CHELSEA</h1>
                </div>
            </div>
            <footer></footer>
        </div>
    );
};

export default Main;