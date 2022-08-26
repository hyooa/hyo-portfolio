import React, { useEffect } from 'react';
import './player.scss';
import {IoIosArrowRoundDown} from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { getPlayer } from '../modules/player';

const Player = () => {

    const { data, loading, error } = useSelector(state=>state.myPlayers.players);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlayer());
    }, [dispatch]);
    
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러</div>;
    if(!data) return <div>값 없음</div>;

    console.log(data[0]);

    return (
        <div id='player'>
            <div id='player_photo'>
                <p id='one'></p>
                <div>
                    <div id='scrollBar'>
                        <span>scroll</span>
                        <IoIosArrowRoundDown color='#fff' size="35"/>
                    </div>
                    <img src='./image/players/1_골키퍼_아리자발라가.png' alt=''></img>
                    <div id='player_text'>
                        <form>
                            <table>
                                <tr>
                                    <th>NAME:</th>
                                    <td>Kepa Arrizabalaga</td>
                                </tr>
                                <tr>
                                    <th>NATIONAL TEAM:</th>
                                    <td>Spain</td>
                                </tr>
                                <tr>
                                    <th>PLACE OF BIRTH:</th>
                                    <td>Ondarroa, Spain</td>
                                </tr>
                                <tr>
                                    <th>POSITION:</th>
                                    <td>Goalkeeper</td>
                                </tr>
                                <tr>
                                    <th>DOB:</th>
                                    <td>October 3, 1994 (age 27)</td>
                                </tr>
                                <tr>
                                    <th>HEIGHT:</th>
                                    <td>1.86m (6 ft 1 in)</td>
                                </tr>
                                <tr>
                                    <th>DEBUT:</th>
                                    <td>August 11, 2018</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div id='playerBtn'>
                        <a href='/playerMore'><button>More</button></a>
                    </div>
                </div>
            </div>
            {/* <PlayerScroll players={data}/> */}
            <div id='player_right'>
                {/* <PlayerScroll players={data} /> */}
                <ul>
                    <li>hyoyoung</li>
                    <img src='' alt=''></img>
                </ul>
                {/* {data.map(player => (
                    <PlayerScroll key={player.no} player={player} />
                ))} */}
            </div>
        </div>
    );
};

export default Player;