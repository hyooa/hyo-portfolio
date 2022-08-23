// 리덕스 모듈 만들기
// 1. 초기상태값 지정(선언)
// 2. 액션타입 지정
// 3. 액션 생성 함수 정의
// 4. 리듀서 선언

// 1. 상태 초기값
const initialState = {
    isLogin : false
}

// 2. 액션타입
// 다른 모듈과 액션이름이 중복되는 걸 방지하기 위해 앞에 파일명을 붙여줌
const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";

// 3. 액션생성함수선언
// 액션생성함수는 export 키워드를 사용하여 내보내기
export const setLogin = () => {
    return {
        type : SET_LOGIN,
    }
}
export const setLogout = () => {
    return {
        type : SET_LOGOUT
    }
}

// 홈으로 이동 함수
export const goToHome = (navigate) => () => {
    navigate('/')
}

// 4. 리듀서 선언
export default function logincookie(state = initialState, action) {
    switch(action.type) {
        case SET_LOGIN :
            return {
                isLogin : true
            }
        case SET_LOGOUT :
            return {
                isLogin : false
            }
        default :
        return state;
    }
}