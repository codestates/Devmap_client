import React from 'react';
import Button from './Button'
import EccessToLogin from './EccessToLogin';
import EccessToSignUp from './EccessToSignUp';
import styled, { css } from 'styled-components';
//헤더 태그 안에 들어가 컴포넌트 top  이안에 로그인 버튼 이있고 그걸 눌렀을때 EccessTOLogin.jsx 모달이 들어가야한다. 


const HeaderRight = styled.div`
    display: inline-flex;
    outline: none;
    padding-left: 1rem;
    padding-right: 1rem;
    float: right;
`;
const Top = () => {
    return (
        //조건문 줘서 로그인 시 에 모습 
           <HeaderRight>
           <EccessToLogin ></EccessToLogin>
           <EccessToSignUp ></EccessToSignUp>
           <hr></hr>
           </HeaderRight>
    );
}
export default Top;