import React from 'react';
import { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const HostPlayer = () => {
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
    ]);
    
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
    
      const onPreview = async (file) => {
        let src = file.url;
    
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
    
            reader.onload = () => resolve(reader.result);
          });
        }
    
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };

    return (
        <>
            <form className='hostPlayer'>
                <table>
                    <tr>
                        <td>Main Photo(1개)</td>
                        <td>
                        <ImgCrop rotate>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                        </ImgCrop>
                        </td>
                    </tr>
                    <tr>
                        <td>Serve Photo(7개)</td>
                        <td>
                        <ImgCrop rotate>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 7 && '+ Upload'}
                        </Upload>
                        </ImgCrop>
                        </td>
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
                        <td><input placeholder='ex) Spain'></input></td>
                    </tr>
                    <tr>
                        <td>Place Of Birth(출생지)</td>
                        <td><input placeholder='ex) Ondarroa, Spain'></input></td>
                    </tr>
                    <tr>
                        <td>Position(포지션)</td>
                        <td><input placeholder='ex) Goalkeeper, Centre-back, Midfielder, Forward, ...'></input></td>
                    </tr>
                    <tr>
                        <td>Dob(생년월일)</td>
                        <td><input placeholder='ex) October 3, 1994'></input></td>
                    </tr>
                    <tr>
                        <td>Height(키)</td>
                        <td><input placeholder='ex) 186cm'></input></td>
                    </tr>
                    <tr>
                        <td>Debut(데뷔)</td>
                        <td><input placeholder='ex) August 11, 2018'></input></td>
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