import React from 'react';
import {IoIosArrowRoundDown} from 'react-icons/io';
import {API_URL} from '../../config/contansts';

const PlayerPhoto = ({data, state}) => {
    
    // console.log(data);
    // console.log(state);
    const index = data.findIndex(play=>play.name === state); // 기존 data배열에서 state(클릭한 선수이름)과 같은 배열의 인덱스를 반환해준다.
    // console.log(index);
    // console.log(data[index]);

    return (
        <div id='player_photo'>
            <p id='one'></p>
            <div>
                <div id='scrollBar'>
                    <span>scroll</span>
                    <IoIosArrowRoundDown color='#fff' size="35"/>
                </div>
                <img src={`${API_URL}/player/${data[index].mainimg}`} alt=''></img>
                <div id='player_text'>
                    <form>
                        <table>
                            <tr>
                                <th>NAME:</th>
                                <td>{data[index].name}</td>
                            </tr>
                            <tr>
                                <th>NATIONAL TEAM:</th>
                                <td>{data[index].national}</td>
                            </tr>
                            <tr>
                                <th>PLACE OF BIRTH:</th>
                                <td>{data[index].place}</td>
                            </tr>
                            <tr>
                                <th>POSITION:</th>
                                <td>{data[index].position}</td>
                            </tr>
                            <tr>
                                <th>DOB:</th>
                                <td>{data[index].dob}</td>
                            </tr>
                            <tr>
                                <th>HEIGHT:</th>
                                <td>{data[index].height}</td>
                            </tr>
                            <tr>
                                <th>DEBUT:</th>
                                <td>{data[index].debut}</td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div id='playerBtn'>
                    <a href={`/playerMore/${data[index].name}`}><button>More</button></a>
                </div>
            </div>
        </div>
    );
};

export default PlayerPhoto;