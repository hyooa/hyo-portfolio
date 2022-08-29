import React from 'react';
import {IoIosArrowRoundDown} from 'react-icons/io';

const PlayerPhoto = ({data, state}) => {

    console.log(state);
    console.log(data);
    const index = data.findIndex(sh=>sh.name===state); //기존 data배열에서 state(클릭한 선수이름)과 같은 배열의 인덱스를 반환해준다.
    console.log(index);
    console.log(data[index]);
    console.log(data.name);
    
    return (
        // <div id='player'></div>
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
                                <td>{data.name}</td>
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
    );
};

export default PlayerPhoto;