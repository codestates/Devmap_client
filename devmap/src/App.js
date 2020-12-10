import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import Top from './pages/Top';
import Main from './pages/Main';
//import SigninModal from './component/SigninModal';
//import SignUpModal from './component/SignUpModal';
import MyPage from './pages/MyPage';
import RoadMapFront from './pages/RoadMapFront';
import RoadMapBack from './pages/RoadMapBack';

function App() {
  const [isSignnedIn, setIsSignnedIn] = useState(false);
  
  // handleResponseSuccess = async () => { // 로그인 여부 판단
    
  // }

  // componentDidMount(); // 로그인 여부 판단하여 header의 첫 렌더 화면 결정

  // const onEmailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const onPasswordHandler = (e) => {
  //   setPassword(e.target.value);
  // };

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
    top: 35px;
  `;

  return (
    <All_style>
      <header>
        <Top isSignnedIn={isSignnedIn} />
      </header>
      <Body_style>
        <Main />
       
      </Body_style>
    </All_style>
  );
}

// map은 한 곳에서 경우에 따라 렌더?

export default App;
