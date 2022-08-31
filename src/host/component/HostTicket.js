import React from 'react';
import { useState } from 'react';
import { Upload, Button, Space } from 'antd';
import { API_URL } from '../../config/contansts';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HostTicket = () => {
    const navigate = useNavigate();

    const [ formDateTicket, setFormDateTicket ] = useState({
        Kickoff : "",
        awaylogo : "",
        awayname : "",
        gamedate : "",
        stadium : "",
        tkname : "",
        tkdate : "",
        tkprice : "",
        month : "",
    });

    const onTicket = (e) => {
        const { name, value } = e.target;
        setFormDateTicket({
            ...formDateTicket,
            [name] : value,
            awaylogo : awaylogo,
        })
    }
    const onSubmitTicket = (e) => {
        e.preventDefault();
        console.log(formDateTicket);
        hostticket();
    }
    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onSubmitTicket();
        }
    }
    function hostticket() {
        axios.post(`${API_URL}/hostTicket`, formDateTicket)
        .then(res => {
            console.log(res);
            alert('티켓 등록이 완료되었습니다.');
            // navigate('/');
        })
        .catch(e => {
            console.log(e);
            alert('티켓 등록에 실패했습니다.');
        })
    }

    // 이미지 경로 상태관리하기
    const [awaylogo, setAwayLogo] = useState([]); //배열로 변경해서 관리하기
    // 이미지 처리 함수
    const onChangeImage = (info) => {
        // 파일 업로드 중
        if(info.file.status === 'uploading') {
            console.log('ing~');
            return;
        }
        // 파일 업로드 완료
        if(info.file.status === 'done') {
            const res2 = info.fileList;
            const imgs = []; // 이미지 리스트 배열
            imgs.push(res2.map(data => `${data.name}`))
            setAwayLogo(imgs.toString()) // 배열을 다시 문자열로 변경
            setFormDateTicket({
                ...formDateTicket,
                awaylogo : awaylogo
            })
            console.log('성공');
        }
        // 파일 업로드 에러
        if(awaylogo.file.status === 'error') {
            console.log('에러');
        }
    }
    return (
        <>
            <form className='hostTicket' onSubmit={onSubmitTicket} onKeyPress={onKeyPress}>
                <table>
                    <tr>
                        <td>HomeTeam Name</td>
                        <td>Chelsea</td>
                    </tr>
                    <tr>
                        <td>AwayTeam Name</td>
                        <td><input name='awayname' onChange={onTicket} required></input></td>
                    </tr>
                    <tr>
                        <td>HomeTeam Logo</td>
                        <td id='home'><img src='./image/logo.png' alt=''></img></td>
                    </tr>
                    <tr>
                        <td>AwayTeam Logo</td>
                        <td>
                        <Space>
                            <Upload
                            onChange={onChangeImage}
                            action={`${API_URL}/upload2`}
                            listType="picture"
                            maxCount={1}
                            name="image2" 
                            showUploadList={true}
                            >
                            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                            </Upload>
                        </Space>
                        </td>
                    </tr>
                    <tr>
                        <td>Stadium</td>
                        <td><input 
                        name='stadium' onChange={onTicket} required
                        placeholder='ex) WEMBLEY STADIUM'></input></td>
                    </tr>
                    <tr>
                        <td>Game Date</td>
                        <td><input 
                        name='gamedate' onChange={onTicket} required
                        placeholder='ex) SUN 15 MAY 2022 (요일, 일, 월, 년도)'></input></td>
                    </tr>
                    <tr>
                        <td>Kick-off</td>
                        <td><input 
                        name='Kickoff' onChange={onTicket} required
                        placeholder='ex) hh:mm'></input></td>
                    </tr>
                    <tr>
                        <td>Month</td>
                        <td><input 
                        name='month' onChange={onTicket} required
                        placeholder='ex) August, September, October, November, December'></input></td>
                    </tr>
                    <tr>
                        <td>AwayTeam Korean Name</td>
                        <td><input 
                        name='tkname' onChange={onTicket} required
                        placeholder='ex) 첼시'></input></td>
                    </tr>
                    <tr>
                        <td>Ticket Date</td>
                        <td><input 
                        name='tkdate' onChange={onTicket} required
                        placeholder='ex) 0월 00일 0요일'></input></td>
                    </tr>
                    <tr>
                        <td>Ticket Price</td>
                        <td><input 
                        name='tkprice' onChange={onTicket} required
                        placeholder='ex) 50,000'></input></td>
                    </tr>
                </table>
                <div id='btn'>
                    <button>등록하기</button>
                </div>
            </form>
        </>
    );
};

export default HostTicket;