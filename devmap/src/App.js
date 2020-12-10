import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
// import Top from './pages/Top';
import Main from './pages/Main';
import SigninModal from './component/SigninModal';
import SignUpModal from './component/SignUpModal';
import MyPage from './pages/MyPage';
import RoadMapFront from './pages/RoadMapFront';
import RoadMapBack from './pages/RoadMapBack';

function App({ isSignnedIn, onEmailHandler, onPasswordHandler }) {
  const [isSignnedIn, setIsSignnedIn] = useState(false);
  
  // handleResponseSuccess = async () => { // 로그인 여부 판단
    
  // }

  // componentDidMount(); // 로그인 여부 판단하여 header의 첫 렌더 화면 결정

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const Body_style = styled.body`
    position: relative;
    top: 140px;
  `;

  return (
    <div className="App">
      <header>
        <Top isSignnedIn={isSignnedIn} />
      </header>
      <Body_style>
        <Route
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
            path="/signin"
            render={() => {
              <SignInModal onEmailHandler={onEmailHandler} onPasswordHandler={onPasswordHandler} />
            }}
          />
          <Route
            path="/signup"
            render={() => {
              <SignUpModal onEmailHandler={onEmailHandler} onPasswordHandler={onPasswordHandler} />
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
          {/* map은 한 곳에서 경우에 따라 렌더? */}
        </Switch>
      </Body_style>
    </div>
  );
}

export default App;
