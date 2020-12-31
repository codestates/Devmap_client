import React from 'react';

import styled from 'styled-components';
import { darken, lighten } from 'polished';

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

export default function SignInModalButton({ openSignInModal }) {

    return (
        <Button onClick={openSignInModal}>로그인</Button>
    );
}