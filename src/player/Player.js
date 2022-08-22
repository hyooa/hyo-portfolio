import React from 'react';
import './player.scss';
import {IoIosArrowRoundDown} from 'react-icons/io';

const Player = () => {
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
            <div id='player_right'>
                    <ul>
                        <li>Kepa Arrizabalaga</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Marcos Alonso</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Edouard Mendy</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Marcus Bettinelli</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Thiago Emiliano da Silva</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Trevoh Chalobah</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Ben Chilwell</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Reece James</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Cesar Azpilicueta</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Emerson Palmieri dos Santos</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>N'Golo Kante</li>
                        <img src='' alt=''></img>
                    </ul>
                    <ul>
                        <li>Mason Mount</li>
                        <img src='' alt=''></img>
                    </ul>
            </div>
        </div>
    );
};

export default Player;