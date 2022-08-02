import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const SlideDiv = styled.div `
    position: fixed;
    z-index: 10;
    top: 30px;
    right: 30px;
    span {
        padding-right: 30px;
        font-size: 12px;
        &:hover {
            text-decoration: 1px #222 line-through;
        } 
    }

`;

const Side = () => {
    return (
        <SlideDiv>
            <div>
                <Link to='main' spy={true} smooth={true}>
                    <span>Ⅰ. Home</span>
                </Link>
                <Link to='main2' spy={true} smooth={true}>
                    <span>Ⅱ. Highlights & Full Matches</span>
                </Link>
                <Link to='main3' spy={true} smooth={true}>
                    <span>Ⅲ. Fixtures & Results</span>
                </Link>
            </div>
        </SlideDiv>
    );
};

export default Side;