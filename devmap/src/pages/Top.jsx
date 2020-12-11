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

const Img_input = styled.div`
    vertical-aline: middle;
`;

const Img = styled.img`
    width: 12%;
    margin-top: 2px;
    margin-left: 30px;
    padding: 10px;
    float: left;
`;

const Input = styled.input`
    width: 38%;
    height: 60px;
    background-color: #eefffe;
    border: 2px solid;
    border-radius : 10px; 
    border-color: #a3dfea;
    font-size:  24px;
    font-family: Jua;
    margin-top: 10px;
    margin-left: 15.8%;
    margin-right: auto;
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
    display: table;
    list-style:none;
    padding-left: 0px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -3px;
`;

const Button_Li_style = styled.li`
    float: right;
    margin: 5px;
`;

const Button = styled.button`
    top: -10px;
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
        box-shadow: 0 5px #666;
        transform: translateY(4px);
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
                <Img_input>
                    <a href="devmap.ml/">
                        <Img src={logo} />
                    </a>
                    <Input placeholder="검색" />
                </Img_input>
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