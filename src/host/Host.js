import React from 'react';
import './host.scss';

const Host = () => {
    return (
        <div id='host'>
            <h1>HOST</h1>
            <div>
                <div id='register'>
                    <div id='choice'>
                        <ul>
                            <li>선수 등록</li>
                            <li>티켓 등록</li>
                        </ul>
                    </div>
                    <div id='input'>
                        <form>
                            <table>
                                <tr>
                                    <td>Photo</td>
                                    <td><input></input></td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td><input></input></td>
                                </tr>
                                <tr>
                                    <td>Number(등번호)</td>
                                    <td><input></input></td>
                                </tr>
                                <tr>
                                    <td>National TEAM(국가대표 팀)</td>
                                    <td><input></input></td>
                                </tr>
                                <tr>
                                    <td>Place Of Birth(출생지)</td>
                                    <td><input></input></td>
                                </tr>
                                <tr>
                                    <td>Position(포지션)</td>
                                    <td><input placeholder='ex) Goalkeeper,'></input></td>
                                </tr>
                                <tr>
                                    <td>Dob(생년월일)</td>
                                    <td><input placeholder='ex) October 3, 1994 (age 27)'></input></td>
                                </tr>
                                <tr>
                                    <td>Height(키)</td>
                                    <td><input placeholder='ex) 1.86m (6 ft 1 in)'></input></td>
                                </tr>
                                <tr>
                                    <td>Debut(데뷔)</td>
                                    <td><input placeholder='ex) August 11, 2018'></input></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Host;