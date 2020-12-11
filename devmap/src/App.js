import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import Top from './pages/Top';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import RoadMapFront from './pages/RoadMapFront';
import RoadMapBack from './pages/RoadMapBack';

// signIn, signUp은 접속 엔드포인트 주지 않음

function App() {
  const [isSignnedIn, setIsSignnedIn] = useState({isSignIn: false, userInfo: null});

  const handleResponseSuccess = async () => { // 로그인 성공
    await axios.get('').then((res) => {
        setIsSignnedIn({isSignIn: true, userInfo: res.data}); // userInfo 상태 생성하기?
        console.log(isSignnedIn.userInfo);
    });
  };

  // useEffect(() => { // 로그인 성공시 header의 첫 렌더 화면으로 결정 //componentDidMount() // 상태 바뀔 때에만 작동하도록
  //   handleResponseSuccess();
  // }, [])
  // 이걸 실행하면 무조건 상태가 로그인이 된다

  // 인증 과정, 토큰을 헤더에 담아 post 보내기 등

  // 스크롤바(필요시 수정하여 구현)
  const All_style = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #FED0D3;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
  }
  `;

  const Body_style = styled.body`
    position: relative;
    top: 30px;
  `;

  return (
    <All_style>
      <header>
        <Top isSignnedIn={isSignnedIn} handleResponseSuccess={handleResponseSuccess} />
      </header>
      <Body_style>
        <Main />
       {/* <Route
          exact path="/"
          render={() => {
            <Redirect to='/main'/>
          }}
        />
        <Switch>
          <Route
            path="/main"
            render={() => {
              <Main />
            }}
          />
          <Route
            path="/mypage"
            render={() => {
              <MyPage />
            }}
          />
          <Route
            path="/totalMap-front"
            render={() => {
              <RoadMapFront />
            }}
          />
          <Route
            path="/totalMap-back"
            render={() => {
              <RoadMapBack />
            }}
          />
        </Switch> */}
      </Body_style>
    </All_style>
  );
}

// 로드맵은 한 곳에서 경우에 따라 렌더?

export default App;
