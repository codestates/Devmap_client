import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

const TopBox = styled.div`
    border: 5px solid;
    border-radius: 3%;
    border-color: #fed0d3;

    width: 97%;
    top: 20px;
    position: relative;
    padding-left: 3rem;
    padding-right: 1rem;
    margin-left: 1rem;
    background-color: #fff4f4;
    cursor: pointer;

    .b {
        float: right;
        margin: 5px;
        
    }
    .wrraper {
        display: inline-block;
        list-style:none;
        float: rigth;
    }
`;
// box-shadow:  inset 0 9px #dedede;

const Button = styled.button`
    border: 2px solid;
    border-radius: 5%;
    border-color: #fed0d3;

    top: -5px;
    left: 140px;
    font-size:  24px;
    font-family: Jua;
    text-align: center;
    text-decoration: none;
    outline: none;
    display: inline-block;
    position: relative;
    padding: 1px 25px;
    color: #a3dfea;
    background-color: #fff4f4;
    box-shadow:  0 9px #dedede;
    cursor: pointer;
    &:hover {
        background: ${lighten(0.009, '#fff4f4')};
    }
    &:active {
        background: ${darken(0.0008, '#fff4f4')};
    }
     
`;

/*
  polished 사용 하여 색변화 주기
   &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#dedede')};
  }
*/

const Img = styled.img`
    width: 15%;
    padding: 13px;
    vertical-aline: middle;
`;

const Input = styled.input`
    border: 1px solid;
    border-radius : 5px; 
    border-color: #a3dfea;

    width: 32%;
    height: 35%;
    top: -25px;
    left: 30px;
    font-size:  24px;
    font-family: Jua;
    position: relative;
    margin-left: 15%;
    margin-bottom: 10px;
    background-color: #eefffe;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    &:hover {
        background: ${lighten(0, '#eefffe')};
    }
    &:active {
        background: ${darken(0.0008, '#eefffe')};
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #a3dfea;
    }  
`;

function Top ({ isSignnedIn }) {
// 로고
// 검색

// 로그인, 회원 가입
// 마이 페이지, 로그아웃

// 로그아웃 함수 여기에 만들기

    if (isSignnedIn === false) {
        return (
            <TopBox>
                <span>
                    <a href="http://localhost:3000/">
                        <Img src={Logo} />
                    </a>
                </span>
                <span className="ser">
                    <Input placeholder="검색" placeholderTextColor = 'red' />
                </span>
                <ul className="wrraper">
                    <li className="b">
                        <Link to="/signup">
                            <Button>로그인</Button>
                            {/* onClick 모달 필요 */}
                        </Link>
                    </li>
                    <li className="b">
                        <Link>
                            <Button>회원 가입</Button>
                            {/* onClick 모달 필요 */}
                        </Link>
                    </li>
                </ul>
                </TopBox>
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