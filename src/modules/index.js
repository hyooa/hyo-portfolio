import { combineReducers } from "redux";
import logincookie from "./logincookie";
import myPage from "./mypage";

// 💛 여러개 reducer 합치기
const rootReducer = combineReducers({ 
    logincookie, 
    myPage,
});

export default rootReducer;