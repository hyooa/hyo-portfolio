import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getCookie } from '../../util/cookie';

function leftPopup() {
    console.log('클릭');
    document.querySelector('#leftToggle').classList.toggle('popup');
}

const {kakao} = window;

const LeftToggle = ({state}) => {

    function Kakao() {
            const container = document.getElementById('map'); // 지도를 담을 영역
            const options = {
                center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level : 3, // 지도의 확대 레벨
                // content : '<div style="width:150px;text-align:center;padding:6px 0;></div>'
            };
            const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
            //드래그 막기
            // map.setDraggable(false);
            //줌 막기
            map.setZoomable(false);
            
            // 주소-좌표 변환 객체를 생성합니다.
            const geocoder = new kakao.maps.services.Geocoder();
            geocoder.addressSearch("울산광역시 남구 삼산중로100번길 26", function (result, status) {
                    // 정상적으로 검색이 완료됐으면 
              if (status === kakao.maps.services.Status.OK) {
          
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          
                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                  map: map,
                  position: coords
                });
          
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                  content: `<div style="width:150px; align-item:center; padding : 3px 0; text-align:center; font-weight: 600;">${state.stadium}</div>`
                });
                infowindow.open(map, marker);
          
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
              }
            })
    }
    useEffect(() => {
        Kakao()
    }, []);

    const [myTi, setMyTi] = useState({
        usermail : "",
        awaylogo : "",
        awayname : "",
        ticket : "",
        price : "",
    })
    
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
                        <div id='map' style={{
                            width : '400px',
                            height : '200px'
                        }}></div>
                        <ul>
                            <li>{state.tkname}</li>
                            <li>프리미어 리그</li>
                            <li>{state.stadium}</li>
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