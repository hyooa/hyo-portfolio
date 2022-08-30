import React, { useEffect } from 'react';
import './playerMore.scss';
import { BackTop } from 'antd';
import { IoIosHeart, IoIosArrowRoundDown, IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getMore } from '../../modules/suhan';
import {  useParams } from 'react-router-dom';
import { API_URL } from '../../config/contansts';

window.onload = function() {
    var prevScrollpos = window.pageYOffset;
    // console.log(prevScrollpos);
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

    const {name} = useParams();
    const {data, loading, error} = useSelector(state=>state.my.players);
    const dispatch = useDispatch();
    // console.log(name);

    useEffect(() => {
        dispatch(getMore(name))
    }, [dispatch, name])

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;

    var imgs = [];
    imgs = data.serveimg.split(",");
    // console.log(imgs[0]);

    // console.log(data);
    // console.log(data.name);
    // console.log(data.serveimg);

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
                    <img src={`${API_URL}/player/${data.mainimg}`} alt=''></img>
                </div>
                <div className='playerName'>
                    <p>{data.number}</p>
                    <p>{data.name}</p>
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
                                <img src={`${API_URL}/player/${imgs[0]}`} alt=''></img>
                                <img src={`${API_URL}/player/${imgs[1]}`} alt=''></img>
                            </div>
                            <div>
                                <img src={`${API_URL}/player/${imgs[2]}`} alt=''></img>
                            </div>
                        </div>
                        <div className='photoOne_right'>
                            <img src={`${API_URL}/player/${imgs[3]}`} alt=''></img>
                        </div>
                    </div>
                    <div className='photoTwo'>
                        <img src={`${API_URL}/player/${imgs[4]}`} alt=''></img>
                        <img src={`${API_URL}/player/${imgs[5]}`} alt=''></img>
                        <img src={`${API_URL}/player/${imgs[6]}`} alt=''></img>
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