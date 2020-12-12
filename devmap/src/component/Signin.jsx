import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const TextLine = styled.div`
    margin-top: 15%;
    margin-left: 8%;
`;
const TextLine0 = styled.div`
    margin-top: 3%;
    margin-left: 8%;
`;
const TextLine1 = styled.div`
    margin-top: 5%;
    margin-left: 38%;
`;
const TextLine2 = styled.div`
    margin-top: 5%;
    margin-left: 17%;
    
    border: 300px;
`;
const TextLine3 = styled.div`
    margin-top: 7%;
    margin-left: 17%;
`;
const Labelemail = styled.label`
    color: #fed0d3;
    font-size:  24px;
    font-family: Jua;

    margin-right: 10%;
`;
const Labelpassword = styled.label`
    color: #fed0d3;
    font-size:  24px;
    font-family: Jua;

    margin-right: 4%;
    margin-top: 10;
`;
const Input = styled.input`
    background-color: #fff4f4;
    border: 2px solid;
    border-radius : 10px; 
    border-color: #fed0d3;
    font-size:  24px;
    font-family: Jua;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #fff4f4;
        padding: 10px;
    }  
`;
 const SignButton = styled.button`
    top: -10px;
    width: 135px;
    height: 50px;
    background-color: #fed0d3;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    font-size:  24px;
    font-family: Jua;
    text-align: center;
    color: white;
    position: relative;
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
    top: -10px;
    width: 135px;
    height: 50px;
    background-color: #fff4f4;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    font-size:  28px;
    font-family: Jua;
    text-align: center;
    color: #fed0d3;
    position: relative;
    cursor: pointer;
    padding-top: 10px;
    padding-left: 74px;
    padding-right: 52px;
    padding-bottom: 10px;
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
    top: -10px;
    width: 135px;
    height: 50px;
    background-color: #fff4f4;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    font-size:  28px;
    font-family: Jua;
    text-align: center;
    color: #fed0d3;
    position: relative;
    cursor: pointer;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 10px;
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

  const Cover = styled.div`
  
  `;

  const CloseButton = styled.button`
    top: 10px;
    left: 380px;
    width: 50px;
    height: 50px;
    background-color: #fed0d3;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    font-size:  24px;
    font-family: Jua;
    text-align: center;
    color: white;
    position: relative;
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

export default function SignIn({closeSignInModal, onSignInEmailHandler, onSignInPasswordHandler, signInOKHandler}) {
    return (
        <div> 
            <div>
                <div>
                    <Cover>
                    <CloseButton onClick={closeSignInModal}>x</CloseButton>
                    </Cover>
                    
                    <TextLine>
                    <Labelemail>이 메 일</Labelemail>
                    <Input onChange={onSignInEmailHandler} 
                        type="email"
                        placeholder="이메일을 입력해 주세요">
                    </Input>
                    </TextLine>

                    <TextLine0>
                    <Labelpassword>비 밀 번 호</Labelpassword>
                    <Input onChange={onSignInPasswordHandler}
                        type="password"
                        placeholder="비밀번호를 입력해 주세요">
                    </Input>
                    </TextLine0>
                    
                </div>
                <TextLine1>
                <SignButton onClick={signInOKHandler}>로그인</SignButton>
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
        </div>
    )
}