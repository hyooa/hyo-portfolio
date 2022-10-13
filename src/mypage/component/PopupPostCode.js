import React from 'react';
import DaumPostcode from "react-daum-postcode";
import "../myPage.scss";

const PopupPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)
    props.onAddData(data); // 호출, data 담겨있음

  }

  const postCodeStyle = {
    width: "600px",
    height: "600px",
    padding: "7px",
    background: "rgb(238, 238, 238)",
    border: "1px solid #ccc"
  };

  return (
    <>
      <span id='postBtn' onClick={() => { props.onClose() }}>닫기</span>
      <div id='postCodeStyle'>
        <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
      </div>
    </>
  )
}

export default PopupPostCode;