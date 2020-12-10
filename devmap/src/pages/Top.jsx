import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

const TopBox = styled.div`
    width: 97%;
    top: 18px;
    background-color: #fff4f4;
    border: 5px solid;
    border-radius: 15px;
    border-color: #fed0d3;
    position: relative;
    margin: 0 auto;
    cursor: pointer;
`;

const Img = styled.img`
    width: 10%;
    vertical-aline: middle;
    margin-left: 30px;
    padding: 10px;
`;

const Input = styled.input`
    top: -25px;
    left: 45px;
    width: 38%;
    height: 40px;
    background-color: #eefffe;
    border: 2px solid;
    border-radius : 10px; 
    border-color: #a3dfea;
    font-size:  24px;
    font-family: Jua;
    position: relative;
    margin-left: 15%;
    margin-bottom: 10px;
    box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.03);

    &:hover {
        background: ${lighten(0, '#eefffe')};
    }
    &:active {
        background: ${darken(0.0008, '#eefffe')};
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #78b8c4;
        padding: 10px;
    }  
`;

const Button_Ul_style = styled.ul`
    display: inline-block;
    list-style:none;
    padding-left: 270px;
`;

const Button_Li_style = styled.li`
    float: right;
    margin: 5px;
`;

const Button = styled.button`
    top: 12px;
    width: 135px;
    height: 50px;
    background-color: #fff4f4;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    font-size:  24px;
    font-family: Jua;
    text-align: center;
    color: #78b8c4;
    position: relative;
    cursor: pointer;
  
    &:hover {
        background: ${lighten(0.004, '#fff4f4')};
        box-shadow:  0 5px #dedede;
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

function Top ({ isSignnedIn }) {

// 로그아웃 함수 여기에 만들기

    if (isSignnedIn === false) {
        return (
            <TopBox>
                <span>
                    <a href="devmap.ml/">
                        <Img src={logo} />
                    </a>
                </span>
                <span>
                    <Input placeholder="검색" />
                </span>
                <Button_Ul_style>
                    <Button_Li_style>
                        <Link to="/signin">
                            <Button className="button_1">로그인</Button>
                            {/* onClick 모달 필요 */}
                        </Link>
                    </Button_Li_style>
                    <Button_Li_style>
                        <Link to="/signup">
                            <Button className="button_2">회원 가입</Button>
                            {/* onClick 모달 필요 */}
                        </Link>
                    </Button_Li_style>
                </Button_Ul_style>
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
                        // return <MyPage />
                    }}
                />
                {/* <button onClick={handleLogout}>로그아웃</button> */}
            </div>
        );
    }
}

export default Top;