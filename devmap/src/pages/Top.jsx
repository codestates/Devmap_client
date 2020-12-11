import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';
import SignInModalButton from '../component/SignInModalButton';
import SignUpModalButton from '../component/SignUpModalButton';
import SignInModal from '../component/SignInModal';
import SignUpModal from '../component/SignUpModal';

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

/*
  polished 사용 하여 색변화 주기
   &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#dedede')};
  }
*/

function Top ({ isSignnedIn, handleResponseSuccess }) {

const [isModalOpen, setIsModalOpen] = useState({signin: false, signup: false});

const openSignInModal = () => {
    setIsModalOpen({signin: !isModalOpen.signin, signup: false})
    console.log(isModalOpen)
};

const openSignUpModal = () => {
    setIsModalOpen({signup : !isModalOpen.signup, signin: false})
    console.log(isModalOpen)
};

// 로그아웃 함수 여기에 만들기

    if (isSignnedIn.isSignIn === false) {
        return (
            <div>
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
                            <SignInModalButton isSignnedIn={isSignnedIn} openSignInModal={openSignInModal} isModalOpen={isModalOpen.signin}/>
                        </Link>
                    </Button_Li_style>
                    <Button_Li_style>
                        <Link to="/signup">
                            <SignUpModalButton isSignnedIn={isSignnedIn} openSignUpModal={openSignUpModal} isModalOpen={isModalOpen.signup}/>
                        </Link>
                    </Button_Li_style>
                </Button_Ul_style>
            </TopBox>
            <SignUpModal openSignUpModal={openSignUpModal} isModalOpen={isModalOpen} />
            <SignInModal openSignInModal={openSignInModal} isModalOpen={isModalOpen} handleResponseSuccess={handleResponseSuccess} />
            </div>
        );
    } else if (isSignnedIn.isSignIn === true) {
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
    } else {
        alert('로그인 상태가 true도 false도 아니다....')
    }
}

export default Top;