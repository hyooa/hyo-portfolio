import React from 'react';
import { Upload, Button, Space } from 'antd';
import { API_URL } from '../../config/contansts';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';

const HostRes = () => {

    const [formDate, setFormDate] = useState({
        rk : "",
        team : "",
        teamlogo : "",
        games : "",
        won : "",
        draw : "",
        lost : "",
    })
    const onResult = (e) => {
        const {name, value} = e.target;
        setFormDate({
            ...formDate,
            [name] : value,
            teamlogo : teamlogo,
        })
        console.log(value);
    }
    console.log(formDate);
    const onSubmit = (e) => {
        e.preventDefault();
        hostResult();
        alert("팀 등록이 완료되었습니다.");
        document.location.href = document.location.href;
    }
    function hostResult() {
        axios.post(`${API_URL}/hostRes`, formDate)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    }

    // 이미지 상태관리
    const [teamlogo, setTeamLogo] = useState([]);
    const onChangeImage = (info) => {
        if(info.file.status === 'uploading') {
            console.log('올리는중');
            return;
        }
        if(info.file.status === 'done') {
            const res = info.fileList;
            const img = [];
            img.push(res.map(data => `${data.name}`))
            setTeamLogo(img.toString())
            setFormDate({
                ...formDate,
                teamlogo : teamlogo
            })
            console.log('이미지 등록 ok');
        }
        if(teamlogo.file.status === 'error') {
            console.log('에러');
        }
    }

    return (
        <>
            <form id='hostRes' onSubmit={onSubmit}>
                <table>
                    <tr>
                        <td>Team Name</td>
                        <td><input name='team' onChange={onResult} required></input></td>
                    </tr>
                    <tr>
                        <td>Team logo</td>
                        <td>
                            <Space>
                                <Upload
                                onChange={onChangeImage}
                                action={`${API_URL}/upload3`}
                                listType="picture"
                                maxCount={1}
                                name="image3" 
                                showUploadList={true} 
                                required
                                >
                                <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                                </Upload>
                            </Space>
                        </td>
                    </tr>
                    <tr>
                        <td>Team 랭킹</td>
                        <td><input type='number'
                        name='rk' onChange={onResult} min="0" required></input></td>
                    </tr>
                    <tr>
                        <td>Team 출전 경기 수</td>
                        <td><input type='number'
                        name='games' onChange={onResult} min="0" required></input></td>
                    </tr>
                    <tr>
                        <td>Team 경기 이긴 횟수</td>
                        <td><input type='number'
                        name='won' onChange={onResult} min="0" required></input></td>
                    </tr>
                    <tr>
                        <td>Team 경기 무승부 횟수</td>
                        <td><input type='number'
                        name='draw' onChange={onResult} min="0" required></input></td>
                    </tr>
                    <tr>
                        <td>Team 경기 진 횟수</td>
                        <td><input type='number'
                        name='lost' onChange={onResult} min="0" required></input></td>
                    </tr>
                </table>
                <div id='btn'>
                    <button>등록하기</button>
                </div>
            </form>
        </>
    );
};

export default HostRes;