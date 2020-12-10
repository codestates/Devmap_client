import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';

function Top ({ isSignnedIn }) {
// 로고
// 검색

// 로그인, 회원 가입
// 마이 페이지, 로그아웃

// 로그아웃 함수 여기에 만들기

    if (isSignnedIn === false) {
        return (
            <div>
                <button onClick={SignUpModal}>회원 가입</button>
                <button onClick={SigninModal}>로그인</button>
            </div>
        );
    } else {
        return (
            <div>
                <Link to="/mypage">
                    <button>마이 페이지</button>
                </Link>
                <Route
                    path="/mypage"
                    render={() => {
                        return <MyPage />
                    }}
                />
                <button onClick={handleLogout}>로그아웃</button>
            </div>
        );
    }
}

export default Top;