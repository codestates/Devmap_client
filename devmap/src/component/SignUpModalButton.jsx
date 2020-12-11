import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

export default function SignUpModalButton({ openSignUpModal }) { 
// 버튼이기 때문에 나머지 기능들은 필요 없다, 버튼만 만들어 리턴, props 전달해주어야 해서 따로 컴포넌트로 분리해 줌
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

    return (
        <Button onClick={openSignUpModal}>회원가입</Button>
    );

    // signUpModal과 연결할 부분 고민하다
    // 결국 Top에 밑에다가 따로 넣어줌, signUpModal에서 모달 오픈 상태에 따라 내용 보여줌

    // 최후의 수단
    // css에서 display: none 또는 block으로 창 자체를 보여주거나 안보여주는 방법
    // (여기서 스테이트 관리할 필요 없음)


}