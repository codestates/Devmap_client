import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';

function Top ({ isSignnedIn, userInfo, handleResponseSuccess }) {
// 로고
// 검색

// 로그인, 회원 가입
// 마이 페이지, 로그아웃

    if (isSignnedIn === false) {
        return (
            <div>
                <button onClick={EccessToSignin}></button>
                <button onClick={EccessToSignUp}></button>
            </div>
        );
    } else {
        return (
            <div>
                <Link to="/mypage">
                    <button>MyPage</button>
                </Link>
                <Route
                    path="/mypage"
                    render={() => {
                        return <MyPage userInfo={userInfo} />
                    }}
                />
                <button onClick={handleLogout}></button>
            </div>
        );
    }
}

export default Top;