import React, { useEffect } from 'react';
import './myPage.scss';
import { getMyPage } from '../modules/mypage';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../util/cookie';
import Top from './component/Top';
import Bottom from './component/Bottom';
import MyCommet from './component/MyCommet';
import Basket from './component/Basket';

const MyPage = () => {

    const email = getCookie("usermail");

    return (
        <div id='mypage'>
            <h1><span>My</span>Page</h1>
            <div>
                <div>
                    <Top email={email}/>
                    <Basket email={email}/>
                </div>
                <div id='mypageBto'>
                    <Bottom email={email}/>
                    <MyCommet email={email}/>
                </div>
            </div>
        </div>
    );
};

export default MyPage;