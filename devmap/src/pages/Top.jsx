import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';
import SignInModalButton from '../component/SignInModalButton';
import SignUpModalButton from '../component/SignUpModalButton';
import SignInModal from '../component/SignInModal';
import SignUpModal from '../component/SignUpModal';

const TopBorder = styled.div`
    width: 97%;
    top: 18px;
    background-color: #fff4f4;
    border: 5px solid;
    border-radius: 15px;
    border-color: #fed0d3;
    position: relative;
    margin: 0 auto;
`;

const ImgInput = styled.div`
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
    outline: 0;

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

const ButtonUl = styled.ul`
    display: table;
    list-style:none;
    padding-left: 0px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -3px;
`;

const ButtonLi = styled.li`
    float: right;
    margin: 5px;
`;

const MyPageButton = styled.button`
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
    outline: 0;
    cursor: pointer;
  
    &:hover {
        background: ${lighten(0.004, '#fff4f4')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#fff4f4')};
        box-shadow: 0 2px #666;
        transform: translateY(4px);
    }
`;

const SignOutButton = styled.button`
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
    outline: 0;
    cursor: pointer;
  
    &:hover {
        background: ${lighten(0.004, '#fff4f4')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#fff4f4')};
        box-shadow: 0 2px #666;
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

function Top({ isSignnedIn, handleResponseSuccess, handleSignOut, getIdNumber }) {

    const [isModalOpen, setIsModalOpen] = useState({signin: false, signup: false});

    const openSignInModal = () => {
        setIsModalOpen({signin: !isModalOpen.signin, signup: false})
        console.log(isModalOpen)
    };
    const closeSignInModal = () => {
        setIsModalOpen({signin: false, signup: false});
    };

    const openSignUpModal = () => {
        setIsModalOpen({signup : !isModalOpen.signup, signin: false})
        console.log(isModalOpen)
    };
    const closeSignUpModal = () => {
        setIsModalOpen({signin: false, signup: false});
    };

    console.log('로그인 상태, top', isSignnedIn.isSignIn); // true

// 회원 가입, 로그인이 아직 서버측에서 안되니 실험할 때마다 계속 바꾸어주어야 함..
    if (isSignnedIn.isSignIn === false) { // MyPage 실험으로 임시로 상태 바꾸어 둠 // signin, signup 엔드 포인트 없앨 것인가?
        return (
            <div>
                <TopBorder>
                    <ImgInput>
                        {/* 로고 누르면 메인으로 가도록 */}
                        <Link to="/users/main">
                            <Img src={logo} />
                        </Link>
                        <Input placeholder="검색" />
                    </ImgInput>
                    <ButtonUl>
                        <ButtonLi>
                            <Link to="/users/signin">
                                <SignInModalButton openSignInModal={openSignInModal} />
                            </Link>
                        </ButtonLi>
                        <ButtonLi>
                            <Link to="/users/signup">
                                <SignUpModalButton openSignUpModal={openSignUpModal} />
                            </Link>
                        </ButtonLi>
                    </ButtonUl>
                </TopBorder>
                {/* 모달이 페이지에 내장되어있는 상태*/}
                <SignUpModal openSignUpModal={openSignUpModal} closeSignUpModal={closeSignUpModal} isModalOpen={isModalOpen} getIdNumber={getIdNumber} />
                <SignInModal openSignInModal={openSignInModal} closeSignInModal={closeSignInModal} isModalOpen={isModalOpen} isSignnedIn={isSignnedIn} handleResponseSuccess={handleResponseSuccess} />
            </div>
        );
    } else if (isSignnedIn.isSignIn === true) {
        return (
            <div>
                <TopBorder>
                    <ImgInput>
                        {/* 로고 누르면 메인으로 가도록 */}
                        <Link to="/users/main">
                            <Img src={logo} />
                        </Link>
                        <Input placeholder="검색" />
                    </ImgInput>
                    <ButtonUl>
                        <ButtonLi>
                            <SignOutButton onClick={handleSignOut}>로그아웃</SignOutButton>
                            {/* onClick={handleLogout} */}
                        </ButtonLi>
                        <ButtonLi>
                        <Link to="/users/memberinfo">
                            <MyPageButton>마이 페이지</MyPageButton>
                            {/* onClick 이벤트로 바디 영역에서 렌더링하도록 설정(라우팅) */}
                        </Link>
                        {/* <Route
                            path="/users/memberinfo"
                            render={() => {
                                return <MyPage />
                                // body 영역에서 띄울 것
                            }}
                        /> */}
                        </ButtonLi>
                    </ButtonUl>
                </TopBorder>
            </div>
        );
    } else {
        alert('로그인 상태가 true도 false도 아니다....')
    };
}

export default Top;