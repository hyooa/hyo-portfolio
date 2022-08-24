import React from 'react';
import { Link } from 'react-router-dom';

const PlayerScroll = ({players}) => {

    return (
        <>
            <ul>
                <li>{players.name}</li>
                <img src='' alt=''></img>
            </ul>
        </>
                    
    );
};

export default PlayerScroll;