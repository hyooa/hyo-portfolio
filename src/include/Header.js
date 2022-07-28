import React from 'react';

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
            <div onClick={()=>searchPopUp()}>
                <span></span>
                <span></span>
                <span></span>
                <p>Close</p>
            </div>
            <div id='menu_logo'>
                <img src='./image/logo2.png' alt=''></img>
            </div>
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
    );
};

export default Header;