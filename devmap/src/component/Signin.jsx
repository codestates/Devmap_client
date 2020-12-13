import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

const SignInModalShadow = styled.div`
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

const ModalBox = styled.div`
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
    margin-left: 30%;
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

const TextLine = styled.div`
    margin-left: 10%;
`;
const TextLine0 = styled.div`
    margin-left: 10%;
`;
const TextLine1 = styled.div`
`;
const TextLine2 = styled.div`
    margin-top: 8%;
    // margin-left: 17%;
`;
const TextLine3 = styled.div`
    margin-top: 7%;
    // margin-left: 17%;
`;

const Labelemail = styled.label`
    color: #fed0d3;
    font-size: 25px;
    font-family: Jua;
`;
const Labelpassword = styled.label`
    color: #fed0d3;
    font-size:  24px;
    font-family: Jua;
    margin-top: 10px;
`;

const EmailInput = styled.input`
    height: 40px;
    width: 60%;
    margin-left: 45px;
    margin-right: 40px;
    margin-bottom: 20px;
    border: 3px solid;
    border-radius : 10px; 
    font-size:  18px;
    font-family: Jua;
    color: #ffa2b4;
    background-color: #fff8f8;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #FED0D3;
        padding: 10px;
    }  
`;
const PasswordInput = styled.input`
    height: 40px;
    width: 60%;
    margin-left: 20px;
    margin-right: 40px;
    margin-bottom: 30px;
    border: 3px solid;
    border-radius : 10px; 
    font-size:  18px;
    font-family: Jua;
    color: #ffa2b4;
    background-color: #fff4f4;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #FED0D3;
        padding: 10px;
    }  
`;

 const SignInButton = styled.button`
    width: 28%;
    height: 45px;
    margin-bottom: -10px;
    margin-left: 36%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    color: white;
    background-color: #fed0d3;
    font-size:  24px;
    font-family: Jua;
    // text-align: center;
    // position: relative;
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

  const Oauth = styled.a`
    height: 50px;
    text-align: center;
    margin-left: 20%;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    font-size: 28px;
    font-family: Jua;
    color: #fed0d3;
    background-color: #fff4f4;
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

  const Oauth1 = styled.a`
    height: 50px;
    text-align: center;
    margin-left: 14%;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    font-size: 28px;
    font-family: Jua;
    color: #fed0d3;
    background-color: #fff4f4;
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

export default function SignIn({closeSignInModal, onSignInEmailHandler, onSignInPasswordHandler, signInOKHandler}) {
    return (
        <div> 
            <ModalBox>
            <div>
                <div>    
                    <Welcome>
                        <LogoText>Login to </LogoText>
                        <LogoImg src={logo} alt="oops!"/>
                    </Welcome>

                    <TextLine>
                    <Labelemail>이 메 일</Labelemail>
                    <EmailInput onChange={onSignInEmailHandler} 
                        type="email"
                        placeholder="이메일을 입력해 주세요">
                    </EmailInput>
                    </TextLine>

                    <TextLine0>
                    <Labelpassword>비 밀 번 호</Labelpassword>
                    <PasswordInput onChange={onSignInPasswordHandler}
                        type="password"
                        placeholder="비밀번호를 입력해 주세요">
                    </PasswordInput>
                    </TextLine0>
                </div>

                <TextLine1>
                <SignInButton onClick={signInOKHandler}>로그인</SignInButton>
                </TextLine1>
                {/* <div className="signup-link">
                    <Link to='/signup'>
                        <h3>회원이 아니신가요?</h3>
                    </Link>
                </div> */}
                
                <TextLine2>
                    <Oauth>구글로 로그인하기</Oauth>
                </TextLine2>   

                <TextLine3>
                    <Oauth1>페이스북으로 로그인하기</Oauth1>
                </TextLine3>
            </div>
            </ModalBox>
            <SignInModalShadow onClick={closeSignInModal}></SignInModalShadow>
        </div>
    );
}