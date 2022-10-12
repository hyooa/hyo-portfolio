import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlinePauseCircle } from 'react-icons/ai';

const Basket = () => {

    // 날짜 지나면 자동으로 사라지게 해야됨 ...
    return (
        <div id='basket'>
            <div>
                <h2>장바구니</h2>
                <div>
                    <div id='all'>
                        <div>
                            <input type='checkbox' id='c1'></input> 전체선택
                        </div>
                        <div>
                            <p>선택항목 : <span>0</span>개</p>
                            <button>삭제</button>
                        </div>
                    </div>
                    <div id='box'>
                        <div>
                            <div><input type='checkbox'></input></div>
                            <div><img src='./image/logo.png' alt=''></img></div>
                            <div><img src='./image/logo.png' alt=''></img></div>
                            <div><span id='boxname'>Nottingham Forest</span></div>
                            <div><span id='boxcount'>2장</span></div>
                            <div><span id='boxprice'>60,000</span></div>
                            <div><button id='sale'>10% 쿠폰 적용</button></div>
                            <div><button id='remove'>삭제</button></div>
                        </div>
                        <div>
                            <div><input type='checkbox'></input></div>
                            <div><img src='./image/logo.png' alt=''></img></div>
                            <div><img src='./image/logo.png' alt=''></img></div>
                            <div><span id='boxname'>Nottingham Forest</span></div>
                            <div><span id='boxcount'>2장</span></div>
                            <div><span id='boxprice'>60,000</span></div>
                            <div></div>
                            <div><button id='remove'>삭제</button></div>
                        </div>
                        <div>
                            <div><input type='checkbox'></input></div>
                            <div><img src='./image/logo.png' alt=''></img></div>
                            <div><img src='./image/logo.png' alt=''></img></div>
                            <div><span id='boxname'>Nottingham Forest</span></div>
                            <div><span id='boxcount'>2장</span></div>
                            <div><span id='boxprice'>60,000</span></div>
                            <div><button id='sale'>5% 쿠폰 적용</button></div>
                            <div><button id='remove'>삭제</button></div>
                        </div>
                    </div>
                    <div id='total'>
                        <ul>
                            <li>상품 금액</li>
                            <li>000,000원</li>
                        </ul>
                        <ul>
                            <AiOutlineMinusCircle size='30' color='#555' />
                        </ul>
                        <ul>
                            <li>할인 금액</li>
                            <li>000,000원</li>
                        </ul>
                        <ul>
                            <AiOutlinePlusCircle size='30' color='#555' />
                        </ul>
                        <ul>
                            <li>배송비</li>
                            <li>000,000원</li>
                            <p><span>*</span>50,000원 이상 배송비 무료</p>
                        </ul>
                        <ul>
                            <AiOutlinePauseCircle className='pause' size='30' color='#555' />
                        </ul>
                        <ul>
                            <li>결제 금액</li>
                            <li>000,000원</li>
                        </ul>
                    </div>
                    <div id='btn'>
                        <button>구매하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;