import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import Logo from '../img/devmap_logo.png';


const TopBox = styled.div`
  border: 1px solid #fed0d3;
  border-radius: 4px;
  
  cursor: pointer;
  padding-left: 3rem;
  padding-right: 1rem;
  margin-left: 1rem;
  width: 93%;
  position: relative;
  top: 20px;

  background: #fff4f4;
    
  .b {
      float: right;
      margin: 5px;
      
  }
  .wrraper {
    list-style:none;
    
    float: rigth;
    display: inline-block;

  }
`;
//box-shadow:  inset 0 9px #dedede;
const Button = styled.button`
    display: inline-block;
    padding: 1px 25px;
    font-size:  24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #a3dfea;
    background-color: #fff4f4;
    border: 1px solid #fed0d3;
    border-radius: 15px;
    box-shadow:  0 9px #dedede;
    font-family: Jua;
    
    
    top: -5px;
    left: 140px;
    position: relative;


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
  vertical-aline: middle;
  width: 15%;
  padding: 13px;
  
`;
const Input = styled.input`
    margin-bottom: 10px;
    border-radius : 5px; 
    font-size:  24px;
    font-family: Jua;
    width: 32%;
    height: 35%;
    margin-left: 15%;
    top: -25px;
    left: 30px;
    position: relative;
    background-color: #eefffe;
    border: 1px solid #a3dfea;
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
function Top ({ isSignnedIn, userInfo }) {
// 로고
// 검색

// 로그인, 회원 가입
// 마이 페이지, 로그아웃
    
    if (isSignnedIn === false) {
        return (
            <TopBox>
                <span>
                    <a href="http://localhost:3000/">
                    <Img src={Logo} >
                    </Img>
                    </a>
                </span>
                <span className="ser">
                <Input placeholder="검색" placeholderTextColor = 'red' ></Input>
                </span>
                <ul className="wrraper">
                    <li className="b">
                    <Link to="/signup">
                    <Button>로그인</Button>    
                    </Link>
                    </li>
                    <li className="b">
                    <Link>
                    <Button>회원 가입</Button>
                    </Link>
                    </li>
                </ul>
            </TopBox>
                
            
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
                        return
                    }}
                />
                <button></button>
            </div>
        );
    }
}

export default Top;