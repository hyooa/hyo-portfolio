import React from 'react';
import { FiFacebook, FiYoutube, FiTwitter } from 'react-icons/fi';
import { AiFillInstagram, AiOutlineYoutube } from 'react-icons/ai';

    //검색창 클릭하면 나오게 하기
    function searchPopUp(){
        console.log('검색창 popup 띄우기');
        document.querySelector('#menu_toggle').classList.toggle('popup');
    }
    
const Header = () => {
    return (
        <header>
            <div id='menu' onClick={()=>searchPopUp()}>
                <span></span>
                <span></span>
                <span></span>
                <p>MENU</p>
            </div>

        <div id='menu_toggle'>
            <div id='close' onClick={()=>searchPopUp()}>
                <span></span>
                <span></span>
                <span></span>
                <p>Close</p>
            </div>
            <div id='menu_logo'>
                <img src='./image/logo2.png' alt=''></img>
            </div>
            <div id='menu_left'>
                <div>
                    <div id='menu_icon'>
                        <ul>
                            <li><a href='https://www.facebook.com/'><FiFacebook size="25"/></a></li>
                            <li><a href='https://www.instagram.com/'><AiFillInstagram size="25"/></a></li>
                            <li><a href='https://www.twitter.com/'><FiTwitter size="25"/></a></li>
                            <li><a href='https://www.youtube.com/'><AiOutlineYoutube size="30"/></a></li>
                        </ul>
                    </div>
                    <select>
                        <option>한국어</option>
                        <option>English</option>
                        <option>中国人</option>
                        <option>日本</option>
                        <option>ไทย</option>
                        <option>Bahasa Indonesia</option>
                    </select>
                </div>
                <p>
                    © 2022 Chelsea FC. All rights reserved.<br/>
                    No part of this site may be reproduced without our written permission.
                </p>
            </div>
            <ul id='toggle'>
                <a href='/'><li>HOME</li></a>
                <a href='/'><li>Fixtures & Results</li></a>
                <a href='/player'><li>PLAYER</li></a>
                <a href='/'><li>Contact Us</li></a>
                <a href='/'><li>FAQ</li></a>
                <a href='/'><li>SHOP</li></a>
                <a href='/login'><li>LOGIN</li></a>
            </ul>
        </div>
    </header>
    );
};

export default Header;