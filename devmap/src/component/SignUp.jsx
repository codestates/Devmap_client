import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

const SignUpModalShadow = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const SignUpWrapper = styled.div`
    display: block;
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%; 
    margin-left: -13.5%;
    margin-top: -12.5%;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 500px;
    background-color: #fff4f4;
    border: 3px dashed;
    border-radius: 10px;
    border-color: #fed0d3;
`;

const Welcome = styled.div`
    margin-left: 25%;
    margin-bottom: 30px;
`;

const LogoText = styled.span`
    color: #ffa2b4;
    font-size: 25px;
    font-family: Jua;
`;

const LogoImg = styled.img`
    width: 30%;
    margin-bottom: -5px;
`;

const SignUpInputArea = styled.div`
`;
const SignUpEmail = styled.div`
`;
const SignUpPassword = styled.div`
`;
const SignUpConfirmPassword = styled.div`
`;
const SignUpUserName = styled.div`
`;

// p 태그는 input이 아래로 내려간다, 한 줄에 두고 싶다면 label 태그를 사용할 것(input과 속성이 연결된다)
const SignUpTitle = styled.label`
    color: #fed0d3;
    margin-left: 10%;
    font-size: 25px;
    font-family: Jua;
`;

const SignUpEmailInput = styled.input`
    height: 40px;
    width: 50%;
    margin-left: 59px;
    margin-right: 40px;
    margin-bottom: 20px;
    border : 3px solid;
    border-radius: 10px;
    font-size: 18px;
    font-family: Jua;
    color: #ffa2b4;
    // 글씨색 너무 흐려서 어쩔 수 없이 전체 색 변경
    background-color: #fff8f8; 
    ::placeholder {
        color: #FED0D3;
        padding-left: 10px;
    }
`;

const SignUpPasswordInput = styled.input`
    height: 40px;
    width: 50%;
    margin-left: 30px;
    margin-right: 40px;
    margin-bottom: 20px;
    border : 3px solid;
    border-radius: 10px;
    font-size: 18px;
    font-family: Jua;
    color: #ffa2b4;
    background-color: #fff8f8;
    ::placeholder {
        color: #FED0D3;
        padding-left: 10px;
    }
`;

const SignUpConfirmPasswordInput = styled.input`
    height: 40px;
    width: 50%;
    margin-left: 86px;
    margin-right: 40px;
    margin-bottom: 10px;
    border : 3px solid;
    border-radius: 10px;
    font-size: 18px;
    font-family: Jua;
    color: #ffa2b4;
    background-color: #fff8f8;
    ::placeholder {
        color: #FED0D3;
        padding-left: 10px;
    }
`;

const SignUpUserNameInput = styled.input`
    height: 40px;
    width: 50%;
    margin-left: 59px;
    margin-right: 40px;
    margin-bottom: 30px;
    border : 3px solid;
    border-radius: 10px;
    font-size: 18px;
    font-family: Jua;
    color: #ffa2b4;
    background-color: #fff8f8;
    ::placeholder {
        color: #FED0D3;
        padding-left: 10px;
    }
`;

const ErrorMessage = styled.div`
    color: #ffa2b4;
    padding-bottom: 10px;
    font-size: 18px;
    font-family: Jua;
    text-align: center;
`;

const SignUpButton = styled.button`
    width: 28%;
    height: 45px;
    margin-left: 36%;
    border : 3px solid;
    border-radius: 10px;
    border-color: #FED0D3;
    color: #ffffff;
    background-color: #FED0D3;
    font-size: 20px;
    font-family: Jua;
    cursor: pointer;
  
    &:hover {
        background: ${lighten(0.004, '#fed0d3')};
        box-shadow:  0 5px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#fed0d3')};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`;

export default function SignUp({ closeSignUpModal, onSignUpEmailHandler, onSignUpPasswordHandler, onConfirmPasswordHandler, onUserNameHandler, signUpOKHandler, errorMessage }) {
    
    return (
        <div>
            <SignUpWrapper>
                {/* <SignUpInputArea> */}
                <Welcome>
                    <LogoText>Welcome to </LogoText>
                    <LogoImg src={logo} alt="oops!"/>
                </Welcome>
                    <SignUpEmail>
                    <SignUpTitle>이 메 일</SignUpTitle>
                    <SignUpEmailInput 
                        onChange={onSignUpEmailHandler} 
                        type="email"
                        placeholder="이메일을 입력해 주세요"
                    />
                    </SignUpEmail>
                    <SignUpPassword>
                    <SignUpTitle>비 밀 번 호</SignUpTitle>
                    <SignUpPasswordInput
                        onChange={onSignUpPasswordHandler}
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                    />
                    </SignUpPassword>
                    {/* 서버쪽에 항목 없어 임시로 주석. 서버와 상세 항목 비교하기 */}
                    <SignUpConfirmPassword>
                    <SignUpTitle>확 인</SignUpTitle>
                    <SignUpConfirmPasswordInput
                        onChange={onConfirmPasswordHandler}
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                    />
                    </SignUpConfirmPassword>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <SignUpUserName>
                    <SignUpTitle>닉 네 임</SignUpTitle>
                    <SignUpUserNameInput
                        onChange={onUserNameHandler}
                        type="text"
                        placeholder="닉네임을 입력해 주세요"
                    />
                    </SignUpUserName>
                {/* </SignUpInputArea> */}
                    <SignUpButton 
                        onClick={signUpOKHandler}
                    >회원 가입
                    </SignUpButton>
                {/* <div className="signin-link">
                    <Link to='/signin'>
                        <h3>계정이 있으신가요?</h3>
                    </Link>
                </div> */}
            </SignUpWrapper>
            <SignUpModalShadow onClick={closeSignUpModal}/>
        </div>
    )
}