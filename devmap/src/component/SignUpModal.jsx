import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SignUp from './SignUp';
axios.defaults.withCredentials = true;

export default function SignUpModal({ openSignUpModal, isModalOpen }) {
    const [info, setInfo] = useState({email: '', password: '', confirmPassword: '', nickname: '', check: false, errorMessage: ''})
    const [signUpOK, setSignUpOk] = useState({message: '입력 내용을 다시 한번 확인해주세요!😭'})

    const onSignUpEmailHandler = (e) => {
        setInfo({email: e.target.value});
    };
    const onSignUpPasswordHandler = (e) => {
        setInfo({password: e.target.value});
    };
    const onConfirmPasswordHandler = (e) => {
        setInfo({confirmPassword: e.target.value });
        if (info.confirmPassword === info.password ) {
            setInfo({errorMessage: '확인되었습니다!🥳', check: true})
        } else {
            setInfo({errorMessage: '다시 확인해주세요!😰', check: false})
        }
    };
    const onNickNameHandler = (e) => {
        setInfo({nickname: e.target.value});
    };

    const signUpOKHandler = () => {
        if (info.check === true && info.password.length > 4 && info.nickname.length > 1) {
            const res = axios.post('', 
                info
            )
            .then((res) => {
                if (res.status === 200) {
                    openSignUpModal();
                    window.location('devmap.ml')
                }
            })
        } else {
            alert(`${signUpOK.message}`)
        }
    };

    return (
        isModalOpen.signup === true ? 
        <SignUp onSignUpEmailHandler={onSignUpEmailHandler} onSignUpPasswordHandler={onSignUpPasswordHandler} onConfirmPasswordHandler={onConfirmPasswordHandler} onNickNameHandler={onNickNameHandler} signUpOKHandler={signUpOKHandler} errorMessage={info.errorMessage} />
        : ''
    )
}