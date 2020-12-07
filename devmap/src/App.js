import React, { useState } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from "react-router-dom";

// import EccessToLogin from './components/devmap/EccessToLogin';
// import EccessToSignUp from './components/devmap/EccessToSignUp';
// import MyPage from './components/devmap/MyPage';
import Top from './components/Top';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [newNickname, setNewNickname] = useState("original nickname"); // 확인 필요
  
  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onNewPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const onConfirmNewPasswordHandler = (e) => {
    setConfirmNewPassword(e.target.value);
  };
  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };
  const onNewNicknameHandler = (e) => {
    if (e.target.value !== "") {
        setNewNickname(e.target.value)
    } else {
        setNewNickname("original nickname") // 변동 없음
    }
  };

  // 인증 관련 작성하기 : 쿠키, 토큰, 세션 등

  const handleLoginStatus =(/*인증 관련 파라미터*/) => {
    axios
      .post('')
      .then(() => {
        setIsLoggedIn(true);
        // 인증 상태 변경 작성하기
        window.location.assign("/main")
      })
  };

  const handleLogoutStatus =() => {
    axios
    .post('')
    .then(() => {
        setIsLoggedIn(false);
        // 인증 상태 변경 작성하기
        window.location.assign("/main")
    })
  };

  return (
    <div>
     
      <header>
        <Top></Top>
      </header>
      {/* <Route
        exact path="/"
        render={() => {
          <Redirect to='/main' />
        }}
      />
      <Switch>
        <Route
          path="/login"
          render={() => {
            <EccessToLogin
              handleLoginStatus={handleLoginStatus}
              onEmailHandler={onEmailHandler}
              onPasswordHandler={onPasswordHandler} 
            />
          }}
        />
        <Route
          path="/signup"
          render={() => {
            <EccessToSignUp
              onEmailHandler={onEmailHandler}
              onPasswordHandler={onPasswordHandler}
              onConfirmPasswordHandler={onConfirmPasswordHandler}
              onNicknameHandler={onNicknameHandler}
            />
          }}
        />
        <Route
          path="/mypage"
          render={() => {
            <MyPage
              onNewPasswordHandler={onNewPasswordHandler}
              onConfirmNewPasswordHandler={onConfirmNewPasswordHandler}
              onNewNicknameHandler={onNewNicknameHandler}
            />
          }}
        />
      </Switch> */}
    </div>
  );
}