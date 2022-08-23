import React from 'react';
import { Link } from 'react-router-dom';

const PlayerScroll = ({players}) => {
    console.log(players);

    return (
        <div id='player_right'>
                {players.map(data => (
                    // <Link to={`/player/${data.name}`}>
                        <ul>
                            <li>{data.name}</li>
                            <img src='' alt=''></img>
                        </ul>
                    // </Link>
                ))}
                    {/* <ul>
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
                    </ul> */}
            </div>
    );
};

export default PlayerScroll;