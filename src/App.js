import React, {useRef, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Footer from './include/Footer';
import Header from './include/Header';
import Join from './login/Join';
import Login from './login/Login';
import Main from './main/Main';
import Player from './player/Player';

function App() {
// 마우스 커서 start
const dot = useRef(null);

const cursorVisible = useRef(true);
const cursorEnlarged = useRef(false);

const endX = useRef(window.innerWidth / 2);
const endY = useRef(window.innerHeight / 2);
const requestRef = useRef(null);

useEffect(() => {
    document.addEventListener('mousedown', mouseOutEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    return () => {
        document.removeEventListener('mousedown', mouseOverEvent);
        document.removeEventListener('mouseup', mouseOutEvent);
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseenter', mouseEnterEvent);
        document.removeEventListener('mouseleave', mouseLeaveEvent);
        cancelAnimationFrame(requestRef.current);
      }
}, []);

const toggleCursorVisiblility = () => { // 화면 밖으로 나가면 사라짐
    if (cursorVisible.current) {
        dot.current.style.opacity = 1;
    } else {
        dot.current.style.opacity = 0;
    }
}
// const toggleCursorSize = () => { // 커서 사이즈
//     if (cursorEnlarged.current) {
//         dot.current.style.transform = 'scale(1)';
//     } else {
//         dot.current.style.transform = 'scale(1)';
//     }
// }

const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    // toggleCursorSize();
}
const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    // toggleCursorSize();
}
const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisiblility();
}
const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisiblility();
}

const mouseMoveEvent = (e) => { // MoveEvent
    cursorVisible.current = true;
    toggleCursorVisiblility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.left = endX.current + 'px';
    dot.current.style.top = endY.current + 'px';
}

// 마우스 커서 end

  return (
    <div className="App">
      <div ref={dot} className='cursor'></div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/player" element={<Player />} />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

