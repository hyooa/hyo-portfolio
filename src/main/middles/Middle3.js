import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { API_URL } from '../../config/contansts';
import Result from './Result';

const Middle3 = ({ data }) => {
    console.log(data);

    return (
        <div id='main3'>
            <div>
                <h2>Fixtures & Results</h2>
            </div>
            <div id='main3_box'>
                <img src='./image/logo.png' alt=''></img>
                <div id='match'>
                    <div id='boxText'>Fixtures</div>
                    <Swiper
                        modules={[Pagination]}
                        loop={true}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className="mySwiper">
                        {data.map(data => (
                            <SwiperSlide>
                                <div id='matchDiv'>
                                    <div id='matchTime'>
                                        <div>
                                            <h3>DAY</h3>
                                            <p>00</p>
                                        </div>
                                        <div>
                                            <h3>HOUR</h3>
                                            <p>00</p>
                                        </div>
                                        <div>
                                            <h3>MINUTE</h3>
                                            <p>00</p>
                                        </div>
                                        <div>
                                            <h3>SECOND</h3>
                                            <p>00</p>
                                        </div>
                                    </div>
                                    <div id='matchImg'>
                                        <div>
                                            <img src='./image/logo.png' alt=''></img>
                                            <p className='teamName'>Chelsea</p>
                                        </div>
                                        <div id='matchBox'>
                                            <p>{data.kickoff}</p>
                                        </div>
                                        <div>
                                            <img src={`${API_URL}/ticket/${data.awaylogo}`} alt=''></img>
                                            <p className='teamName'>{data.awayname}</p>
                                        </div>
                                    </div>
                                    <div id='matchDay'>
                                        <p>{data.gamedate}</p>
                                        <p>{data.stadium}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Result />

            </div>
        </div>
    );
};

export default Middle3;