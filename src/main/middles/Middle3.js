import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Carousel } from 'antd';

const Middle3 = () => {
    return (
            <div id='main3'>
                <div>
                    <h2>Fixtures & Results</h2>
                    <div id='main3_icon'>
                    </div>
                </div>
                <div id='main3_box'>
                    <img src='./image/logo.png' alt=''></img>
                    <div id='match'>
                        <div id='boxText'>Fixtures</div>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide>
                            <div id='matchDiv'>
                                <div id='matchTime'>
                                    <div>
                                        <h3>DAY</h3>
                                        <p>60</p>
                                    </div>
                                    <div>
                                        <h3>HOUR</h3>
                                        <p>1</p>
                                    </div>
                                    <div>
                                        <h3>MINUTE</h3>
                                        <p>40</p>
                                    </div>
                                    <div>
                                        <h3>SECOND</h3>
                                        <p>59</p>
                                    </div>
                                </div>
                                <div id='matchImg'>
                                    <div>
                                        <img src='./image/logo.png' alt=''></img>
                                        <p className='teamName'>Udinese</p>
                                    </div>
                                    <div id='matchBox'>
                                        <p>17:30</p>
                                    </div>
                                    <div>
                                        <img src='./image/logo.png' alt=''></img>
                                        <p className='teamName'>Chelsea</p>
                                    </div>
                                </div>
                                <div id='matchDay'>
                                    <p>FRI 29 JUL 2022</p>
                                    <p>DACIA ARENA</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div id='matchDiv'>
                                <div id='matchTime'>
                                    <div>
                                        <h3>DAY</h3>
                                        <p>60</p>
                                    </div>
                                    <div>
                                        <h3>HOUR</h3>
                                        <p>1</p>
                                    </div>
                                    <div>
                                        <h3>MINUTE</h3>
                                        <p>40</p>
                                    </div>
                                    <div>
                                        <h3>SECOND</h3>
                                        <p>59</p>
                                    </div>
                                </div>
                                <div id='matchImg'>
                                    <div>
                                        <img src='./image/logo.png' alt=''></img>
                                        <p className='teamName'>Udinese</p>
                                    </div>
                                    <div id='matchBox'>
                                        <p>17:30</p>
                                    </div>
                                    <div>
                                        <img src='./image/logo.png' alt=''></img>
                                        <p className='teamName'>Chelsea</p>
                                    </div>
                                </div>
                                <div id='matchDay'>
                                    <p>FRI 29 JUL 2022</p>
                                    <p>DACIA ARENA</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div id='matchDiv'>
                                <div id='matchTime'>
                                    <div>
                                        <h3>DAY</h3>
                                        <p>60</p>
                                    </div>
                                    <div>
                                        <h3>HOUR</h3>
                                        <p>1</p>
                                    </div>
                                    <div>
                                        <h3>MINUTE</h3>
                                        <p>40</p>
                                    </div>
                                    <div>
                                        <h3>SECOND</h3>
                                        <p>59</p>
                                    </div>
                                </div>
                                <div id='matchImg'>
                                    <div>
                                        <img src='./image/logo.png' alt=''></img>
                                        <p className='teamName'>Udinese</p>
                                    </div>
                                    <div id='matchBox'>
                                        <p>17:30</p>
                                    </div>
                                    <div>
                                        <img src='./image/logo.png' alt=''></img>
                                        <p className='teamName'>Chelsea</p>
                                    </div>
                                </div>
                                <div id='matchDay'>
                                    <p>FRI 29 JUL 2022</p>
                                    <p>DACIA ARENA</p>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div id='result'>
                        <div id='boxText'>Results</div>
                        <div id='resultDiv'>
                            <form>
                                <table>
                                    <tr>
                                        <th>순위</th>
                                        <th></th>
                                        <th>팀명</th>
                                        <th>경기수</th>
                                        <th>승</th>
                                        <th>무</th>
                                        <th>패</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src='./image/logo.png' alt=''></img>
                                        </td>
                                        <td>Chelsea</td>
                                        <td>50</td>
                                        <td>32</td>
                                        <td>1</td>
                                        <td>11</td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Middle3;