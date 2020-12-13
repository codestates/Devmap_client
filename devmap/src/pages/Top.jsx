import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';
import SignInModalButton from '../component/SignInModalButton';
import SignUpModalButton from '../component/SignUpModalButton';
import SignInModal from '../component/SignInModal';
import SignUpModal from '../component/SignUpModal';
import MyPage from '../pages/MyPage';

const TopBox = styled.div`
    width: 97%;
    top: 18px;
    background-color: #fff4f4;
    border: 5px solid;
    border-radius: 15px;
    border-color: #fed0d3;
    position: relative;
    margin: 0 auto;
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

const WithdrawalButton = styled.button`
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

function Top ({ isSignnedIn, handleResponseSuccess }) {

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

// 로그아웃 함수 여기에 만들기

// 회원 가입, 로그인이 아직 서버측에서 안되니 실험할 때마다 계속 바꾸어주어야 함..
    if (isSignnedIn.isSignIn === true) { // MyPage 실험으로 임시로 상태 바꾸어 둠 // signin, signup 엔드 포인트 없앨 것인가?
        return (
            <div>
                <TopBox>
                    <Img_input>
                        {/* 로고 누르면 메인으로 가도록 */}
                        <a href="http://devmap.ml/users/main">
                            <Img src={logo} />
                        </a>
                        <Input placeholder="검색" />
                    </Img_input>
                    <Button_Ul_style>
                        <Button_Li_style>
                            <Link to="/users/signin">
                                <SignInModalButton openSignInModal={openSignInModal} />
                            </Link>
                        </Button_Li_style>
                        <Button_Li_style>
                            <Link to="/users/signup">
                                <SignUpModalButton openSignUpModal={openSignUpModal} />
                            </Link>
                        </Button_Li_style>
                    </Button_Ul_style>
                </TopBox>
                {/* 어떻게 연결된 것인지 아직 헷갈린다.. */}
                <SignUpModal openSignUpModal={openSignUpModal} closeSignUpModal={closeSignUpModal} isModalOpen={isModalOpen}/>
                <SignInModal openSignInModal={openSignInModal} closeSignInModal={closeSignInModal} isModalOpen={isModalOpen} handleResponseSuccess={handleResponseSuccess} />
            </div>
        );
    } else if (isSignnedIn.isSignIn === false) {
        return (
            <div>
                <TopBox>
                    <Img_input>
                        {/* 로고 누르면 메인으로 가도록 */}
                        <a href="http://devmap.ml/users/main">
                            <Img src={logo} />
                        </a>
                        <Input placeholder="검색" />
                    </Img_input>
                    <Button_Ul_style>
                        <Button_Li_style>
                            <WithdrawalButton>로그아웃</WithdrawalButton>
                            {/* onClick={handleLogout} */}
                        </Button_Li_style>
                        <Button_Li_style>
                        <Link to="/users/mypage">
                            <MyPageButton>마이 페이지</MyPageButton>
                            {/* onClick 이벤트로 바디 영역에서 렌더링하도록 설정(라우팅) */}
                        </Link>
                        {/* <Route
                            path="/users/mypage"
                            render={() => {
                                return <MyPage />
                                // body 영역에서 띄울 것
                            }}
                        /> */}
                        </Button_Li_style>
                    </Button_Ul_style>
                </TopBox>
            </div>
        );
    } else {
        alert('로그인 상태가 true도 false도 아니다....')
    }
}

export default Top;