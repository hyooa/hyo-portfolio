import React from 'react';
import { useState } from 'react';
import { Upload, Button, Space } from 'antd';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';

const HostPlayer = () => {
    const navigate = useNavigate();

    // 선수 등록
    const [ formDate, setFormDate ] = useState({
        name : "",
        number : "",
        national : "",
        place : "",
        position : "",
        dob : "",
        height : "",
        debut : "",
        mainimg : "",
        serveimg : "",
    });
    const onPlayer = (e) => {
        const { name, value } = e.target;
        setFormDate({
            ...formDate,
            [name] : value,
            mainimg : mainimg,
            serveimg : serveimg
        })
    }
    const onSubmit = (e) => {
        // console.log(formDate);
        e.preventDefault();
        hostplayer();
    }
    function hostplayer() {
        axios.post(`${API_URL}/host`, formDate)
        .then(res => {
            console.log(res);
            // navigate('/');
            alert('선수 등록이 완료되었습니다.');
        })
        .catch(e => {
            console.log(e);
            alert('error');
        })
    }

    // 이미지 경로 상태관리하기
    const [mainimg, setMainimg] = useState([]); //배열로 변경해서 관리하기
    const [serveimg, setServeimg] = useState([]);
    // 이미지 처리 함수
// (1)
    const onChangeImg = (info) => {
        // 파일 업로드 중
        if(info.file.status === 'uploading') {
            console.log('ing~');
            // console.log(info.file);
            // console.log(mainimg);
            // console.log(mainimg.file, mainimg.fileList);
            // console.log(serveimg);
            return;
        }
        // 파일 업로드 완료
        if(info.file.status === 'done') {
            const res2 = info.fileList;
            const imgs = []; // 이미지 리스트 배열
            imgs.push(res2.map(data => `${data.name}`))
            setServeimg(imgs.toString()) // 배열을 다시 문자열로 변경
            // console.log(serveimg);
            setFormDate({
                ...formDate,
                serveimg : serveimg
            })
            console.log('성공');
            // console.log(mainimg.file, mainimg.fileList);
        }
        // 파일 업로드 에러
        if(serveimg.file.status === 'error') {
            console.log('에러');
        }
    }
// (2)
    const onChangeImg2 = (info) => {
        if(info.file.status === 'uploading') {
            console.log('ing~');
            return;
        }
        if(info.file.status === 'done') {
            const res2 = info.fileList;
            const imgs = [];
            imgs.push(res2.map(data => `${data.name}`))
            setMainimg(imgs.toString())
            console.log(mainimg);
            setFormDate({
                ...formDate,
                mainimg : mainimg
            })
            console.log('성공');
        }
        // 파일 업로드 에러
        if(mainimg.file.status === 'error') {
            console.log('에러');
            alert('파일 업로드 에러');
        }
    }

    return (
        <>
            <form className='hostPlayer' onSubmit={onSubmit}>
                <table>
                    <tr>
                        <td>Main Photo(1개)</td>
                        <td id='mainImg'>
                        <Space>
                            <Upload
                            onChange={onChangeImg2}
                            action={`${API_URL}/upload`}
                            listType="picture"
                            maxCount={1}
                            name="image" 
                            showUploadList={true} 
                            required
                            >
                            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                            </Upload>
                        </Space>
                        </td>
                    </tr>
                    <tr>
                        <td>Serve Photo(7개)</td>
                        <td>
                        <Space>
                            <Upload
                            onChange={onChangeImg}
                            action={`${API_URL}/upload`}
                            listType="picture"
                            maxCount={7}
                            name="image" 
                            showUploadList={true} 
                            multiple
                            required
                            >
                            <Button icon={<UploadOutlined />}>Upload (Max: 7)</Button>
                            </Upload>
                        </Space>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input name='name' onChange={onPlayer} required></input></td>
                    </tr>
                    <tr>
                        <td>Number(등번호)</td>
                        <td><input name='number' onChange={onPlayer} required></input></td>
                    </tr>
                    <tr>
                        <td>National TEAM(국가대표 팀)</td>
                        <td><input 
                        name='national' onChange={onPlayer} required
                        placeholder='ex) Spain'></input></td>
                    </tr>
                    <tr>
                        <td>Place Of Birth(출생지)</td>
                        <td><input 
                        name='place' onChange={onPlayer} required
                        placeholder='ex) Ondarroa, Spain'></input></td>
                    </tr>
                    <tr>
                        <td>Position(포지션)</td>
                        <td><input
                        name='position' onChange={onPlayer} required
                        placeholder='ex) Goalkeeper, Centre-back, Midfielder, Forward, ...'></input></td>
                    </tr>
                    <tr>
                        <td>Dob(생년월일)</td>
                        <td><input
                        name='dob' onChange={onPlayer} required
                        placeholder='ex) October 3, 1994'></input></td>
                    </tr>
                    <tr>
                        <td>Height(키)</td>
                        <td><input
                        name='height' onChange={onPlayer} required
                        placeholder='ex) 186cm'></input></td>
                    </tr>
                    <tr>
                        <td>Debut(데뷔)</td>
                        <td><input 
                        name='debut' onChange={onPlayer} required
                        placeholder='ex) August 11, 2018'></input></td>
                    </tr>
                </table>
                <div id='btn'>
                    <button>등록하기</button>
                </div>
            </form>
        </>
    );
};

export default HostPlayer;