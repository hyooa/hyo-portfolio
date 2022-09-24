import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCon } from '../../modules/mypage';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const Bottom = ({ email }) => {

    const [open, setOpen] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const onClick = (e) => {
        // console.log(e.target.className);
        if (open === Number(e.target.className)) {
            setOpen(null);
        } else {
            setOpen(Number(e.target.className))
        }
    }
    useEffect(() => {
        setIsOpen(open)
    }, [open])

    // 문제 ) 처음에 값이 없으면 에러 🚨🚨🚨 // 없을땐 없습니다라고 뜨게하기
    const { data, loading, error } = useSelector(state => state.myPage.mycontact);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyCon(email))
    }, [dispatch, email])
    if (loading) return <div>로딩중</div>;
    if (error) return <div>에러</div>;
    if (!data) return <div>값 없음</div>;
    // console.log(data);
    // console.log(username);

    // console.log(data[0].no);

    var localTime = data[0].date;
    const now = localTime.slice(0, 10);


    function deleteContact(no) {
        axios.post(`${API_URL}/mypageConDel/${no}`)
            .then(result => {
                // console.log(result+'result');
            })
            .catch(e => {
                // console.log(e+'e');
            })
    }

    const onDelete = (e) => {
        if (window.confirm('글을 삭제하시겠습니까 ?\n삭제된 데이터는 복구할 수 없습니다.')) {
            e.preventDefault();
            const no = e.target.className;
            deleteContact(no);
            // console.log(no);
            alert("문의글 삭제 완료되었습니다.");
            document.location.href = document.location.href
        }
    }

    return (
        <div id='myUs'>
            <div>
                <h2>내 문의글</h2>
                <p id='usP'><span>*</span>제목을 클릭하시오.</p>
                <form>
                    <table>
                        <tr>
                            <td>no</td>
                            <td>조회수</td>
                            <td>제목</td>
                            <td>작성일</td>
                            <td><MdDelete size='18'></MdDelete></td>
                        </tr>
                        {data.map((data, index) =>
                            <>
                                <tr key={index} id='usTr'>
                                    <td>{index + 1}</td>
                                    <td></td>
                                    <td onClick={onClick} className={data.no}>{data.title}</td>
                                    <td>{now}</td>
                                    <td><button onClick={onDelete} className={`${data.no}`}>삭제</button></td>
                                </tr>
                                {data.no === isOpen &&
                                    <>
                                        <tr>
                                            <td className='answer' colSpan={5}>{data.content}</td>
                                        </tr>
                                        <tr>
                                            <td className='answer' colSpan={2}>관리자</td>
                                            {data.answer === null ?
                                                <td className='answer' colSpan={3}>아직 답변이 등록되지 않았습니다.</td> : <td className='answer' colSpan={3}>{data.answer}</td>}
                                        </tr>
                                    </>
                                }
                            </>
                        )}
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Bottom;