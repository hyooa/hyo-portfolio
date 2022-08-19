import React from 'react';
import { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const HostTicket = () => {
    const [fileList, setFileList] = useState([
        // {
        //     uid: '-1',
        //     name: 'image.png',
        //     status: 'done',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //   },
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
            <form className='hostTicket'>
                <table>
                    <tr>
                        <td>HomeTeam Name</td>
                        <td>Chelsea</td>
                    </tr>
                    <tr>
                        <td>AwayTeam Name</td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>HomeTeam Logo</td>
                        <td id='home'><img src='./image/logo.png' alt=''></img></td>
                    </tr>
                    <tr>
                        <td>AwayTeam Logo</td>
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
                        <td>Stadium</td>
                        <td><input placeholder='ex) WEMBLEY STADIUM'></input></td>
                    </tr>
                    <tr>
                        <td>Game Date</td>
                        <td><input placeholder='ex) SUN 15 MAY 2022 (요일, 일, 월, 년도)'></input></td>
                    </tr>
                    <tr>
                        <td>Kick-off</td>
                        <td><input placeholder='ex) hh:mm'></input></td>
                    </tr>
                    <tr>
                        <td>Month</td>
                        <td><input placeholder='ex) August, September, October, November, December'></input></td>
                    </tr>
                    <tr>
                        <td>AwayTeam Korean Name</td>
                        <td><input placeholder='ex) 첼시'></input></td>
                    </tr>
                    <tr>
                        <td>Ticket Date</td>
                        <td><input placeholder='ex) 0월 00일 0요일'></input></td>
                    </tr>
                    <tr>
                        <td>Ticket Price</td>
                        <td><input placeholder='ex) 50,000'></input></td>
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