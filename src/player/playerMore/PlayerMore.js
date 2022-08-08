import React,{useScrollClipPath} from 'react';
import './playerMore.scss';
import {IoIosArrowRoundDown} from 'react-icons/io';

window.onload = function() {
    var prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos);
    window.onscroll = scrollToggle;
    function scrollToggle() {
        var scroll = document.querySelector('.scroll');
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos < currentScrollPos) {
            scroll.style.opacity = 0;
        } else {
            scroll.style.opacity = 1;
        }
    }
}

const PlayerMore = () => {
    return (
        <div id='playerMore'>
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
            <div id='playerPoto'>
                <div className='potoText'>
                    <p>
                    Kepa Arrizabalaga signed for Chelsea from Athletic Bilbao in August 2018.
                    </p>
                    <p>
                        Quick and agile, Kepa possesses fantastic reflexes and 
                        has developed his all-round game since he established himself 
                        as Athletic Bilbao’s first-choice ‘keeper. A great shot-stopper, 
                        he is confident with the ball at his feet and capable of 
                        playing out from the back.
                    </p>
                </div>
                <div className='potoImg'>
                    <img src='./image/players/1_골키퍼_아리자발라가.png' alt=''></img>
                </div>
            </div>
            <div id='playerNews'>
                <h3>Latest News</h3>
            </div>
            <div id='comment'>
                <h3>응원의 한마디</h3>
                <div></div>
            </div>
        </div>
    );
};

export default PlayerMore;