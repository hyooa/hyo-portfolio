import React from 'react';
import './main.css';

const Main = () => {
    return (
        <div>
            <header>
                <div id='menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p>MENU</p>
                </div>
                <div id='menu_toggle'>
                    <ul id='toggle'>
                        <a href='/'><li>HOME</li></a>
                        <a href='/'><li>Fixtures & Results</li></a>
                        <a href='/'><li>PLAYER</li></a>
                        <a href='/'><li>Contact Us</li></a>
                        <a href='/'><li>FAQ</li></a>
                        <a href='/'><li>SHOP</li></a>
                    </ul>
                </div>
            </header>

            <div id='main'>
                <div id='main_text'>
                    <h1>CHELSEA</h1>
                </div>

                <div id='daepyo'>
                    <div id='Boehly'>
                        <div>
                            <div id='img'>
                                <img src='./image/첼시_회장.png' alt=''></img>
                                <p>Todd Boehly</p>
                            </div>
                            <p>
                                Thomas Tuchel (German pronunciation born 29 August 1973) <br />
                                is a German professional football manager and <br />
                                former player who is the current head coach of Premier League club Chelsea.<br />
                            </p>
                        </div>
                    </div>
                    <div id='Tuchel'>
                        <div>
                            <div id='img'>
                                <img src='./image/첼시_감독.png' alt=''></img>
                                <p>Thomas Tuchel</p>
                            </div>
                            <p>
                                Todd Boehly (born September 20, 1973) is an American businessman and investor.<br />
                                He is also the interim CEO of the Hollywood Foreign Press Association and co-owner <br />
                                and chairman of Premier League football club Chelsea.<br />
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <footer></footer>
        </div>
    );
};

export default Main;