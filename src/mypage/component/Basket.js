import React from 'react';


const Basket = () => {

    // 날짜 지나면 자동으로 사라지게 해야됨 ...
    return (
        <div id='basket'>
            <div>
                <h2>장바구니</h2>
                <div>
                    <div id='all'>
                        <div>
                            <input type='checkbox' id='c1'></input>
                            <label for='ci'><span></span>전체선택</label>
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
                            <div><button id='sale'>5% 쿠폰 적용</button></div>
                            <div><button id='remove'>삭제</button></div>
                        </div>
                    </div>
                    <div id='total'>
                        {/* <div id='total_sale'>
                            <div>할인 적용</div>
                            <div>
                                <span><input type="radio"></input>10%</span>
                                <span><input type="radio"></input>10,000원</span>
                            </div>
                        </div> */}
                        <div id='total_money'>
                            <p>상품 금액 : 000,000원</p>
                            <p>배송비 : 3,000원</p>
                            <p><span>*</span>50,000원 이상 배송비 무료</p>
                            <p>할인금액 : 00,000원</p>
                            <div>총 주문 금액 : 000,000원</div>
                        </div>
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