import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import Top from './pages/Top'

function App() {
  const [isSignnedIn, setIsSignnedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  //componentDidMount(); // 로그인 여부 판단하여 첫 렌더 화면 결정

  //handleResponseSuccess = async () => { // 로그인 여부 판단

  //};

  return (
    <div className="App">
      <header>
        <Top isSignnedIn={isSignnedIn} userInfo={userInfo}></Top>
      </header>
    </div>
  );
}

export default App;