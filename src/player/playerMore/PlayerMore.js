import React from 'react';
import './playerMore.scss';
import { BackTop } from 'antd';
import { IoIosHeart, IoIosArrowRoundDown, IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

window.onload = function() {
    var prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos);
    window.onscroll = scrollToggle;
    function scrollToggle() {
        var scroll = document.querySelector('.scroll');
        var topScroll = document.querySelector('.topScroll');
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos < currentScrollPos) {
            scroll.style.opacity = 0;
            topScroll.style.opacity = 1;
        } else {
            scroll.style.opacity = 1;
            topScroll.style.opacity = 0;
        }
    }
}

const PlayerMore = () => {
    return (
        <div id='playerMore'>
            <BackTop>
                <div className='topScroll'>
                    <div>
                        <IoIosArrowRoundDown size="25"/>
                    </div>
                    <span>scroll</span>
                </div>
            </BackTop>
            <div id='playerText'>
                <div className='playerImg'>
                    <img src='./image/players/1_골키퍼_아리자발라가.png' alt=''></img>
                </div>
                <div className='playerName'>
                    <p>1</p>
                    <p>Kepa Arrizabalaga</p>
                </div>
                <div className='scroll'>
                    <span>scroll</span>
                    <IoIosArrowRoundDown size="25"/>
                </div>
            </div>
            <div id='playerPhoto'>
                <div className='photoImg'>
                    <div className='photoOne'>
                        <div className='photoOne_left'>
                            <div>
                                <img src='./image/선수사진/첼시1.jpg' alt=''></img>
                                <img src='./image/선수사진/첼시2.jpg' alt=''></img>
                            </div>
                            <div>
                                <img src='./image/선수사진/첼시3.jpg' alt=''></img>
                            </div>
                        </div>
                        <div className='photoOne_right'>
                            <img src='./image/선수사진/첼시4.jpg' alt=''></img>
                        </div>
                    </div>
                    <div className='photoTwo'>
                        <img src='./image/선수사진/첼시5.jpg' alt=''></img>
                        <img src='./image/선수사진/첼시6.jpg' alt=''></img>
                        <img src='./image/선수사진/첼시7.jpg' alt=''></img>
                    </div>
                </div>
            </div>
            <div id='comment'>
                <h3>Fan Comments</h3>
                <div id='fanInput'>
                    <form>
                        <input placeholder='입력해주세요.'></input>
                        <div>
                            <IoIosAddCircleOutline size='40'></IoIosAddCircleOutline>
                        </div>
                    </form>
                </div>
                <div id='fanText'>
                    <div>
                        <div>
                            <div>
                                <IoIosHeart size='25'></IoIosHeart>
                            </div>
                            <div>100</div>
                        </div>
                        <div>아이디</div>
                        <div className='text'>안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~안녕하세요~</div>
                        <div className='remove'><MdDelete></MdDelete></div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <IoIosHeart size='25'></IoIosHeart>
                            </div>
                            <div>100</div>
                        </div>
                        <div>아이디</div>
                        <div className='text'>안녕하세요~</div>
                        <div className='remove'><MdDelete></MdDelete></div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <IoIosHeart size='25'></IoIosHeart>
                            </div>
                            <div>100</div>
                        </div>
                        <div>아이디</div>
                        <div className='text'>안녕하세요~</div>
                        <div className='remove'><MdDelete></MdDelete></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerMore;