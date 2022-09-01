import { combineReducers } from "redux";
import logincookie from "./logincookie";
import myPage from "./mypage";
import myTicket from "./match";
import my from './suhan';
import myFan from './fan';
import myContactUs from "./contactus";

// 💛 여러개 reducer 합치기
const rootReducer = combineReducers({ 
    logincookie,
    myPage,
    myTicket,
    my,
    myFan,
    myContactUs
});

export default rootReducer;