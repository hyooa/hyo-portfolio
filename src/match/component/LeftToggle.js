import React from 'react';
import {Link} from 'react-router-dom';
import { getCookie } from '../../util/cookie';

function leftPopup() {
    console.log('클릭');
    document.querySelector('#leftToggle').classList.toggle('popup');
}

const LeftToggle = ({state}) => {

    // console.log(state);
    
    return (
        <div id='leftToggle'>
                <div id='toggleSpan' onClick={()=>leftPopup()}>
                    <span></span>
                    <span></span>
                    <p>Close</p>
                </div>
                <div id='matchBox'>
                    <div id='topText'>
                        <h2>Ticket</h2>
                        <div>
                            <h3>{state.awayname}</h3>
                            <p>Premier League</p>
                            <p>티켓은 최대 2장까지 구매 가능합니다.</p>
                        </div>
                    </div>
                    <div id='info'>
                        <ul>
                            <li>{state.tkname}</li>
                            <li>프리미어 리그</li>
                            <li>{state.tkdate}</li>
                            <li>Kick-off {state.kickoff}</li>
                        </ul>
                    </div>
                    <div id='buy'>
                        <p>가격<span id='price'>{state.tkprice}원</span></p>
                        <p>수량
                            <select name="num" id="num">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </p>
                        <p>총합<span id='total'>30,000원</span></p>
                    </div>
                    {(getCookie("usermail")) ?
                    <div id='btn'>
                        <Link to={'/mypage'}>
                        <div>
                            <button><span>장바구니</span></button>
                            <span>장바구니</span>
                        </div></Link>
                        <Link to={'/mypage'}>
                        <div>
                            <button><span>구매하기</span></button>
                            <span>구매하기</span>
                        </div></Link>
                    </div>
                    :
                    <a href='/login'><div id='matchLogin'>로그인 후 구매 가능합니다.</div></a>
                    }
                </div>
            </div>
    );
};

export default LeftToggle;