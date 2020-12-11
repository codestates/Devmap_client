import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SignUp from './SignUp';
axios.defaults.withCredentials = true;

export default function SignUpModal({ openSignUpModal, isModalOpen }) {
    const [signUpInfo, setSignUpInfo] = useState({email: '', password: '', confirmPassword: '', username: '', check: false, errorMessage: ''});
    const [signUpOK, setSignUpOk] = useState({message: '입력 내용을 다시 한번 확인해주세요!😭'});

    const onSignUpEmailHandler = (e) => {
        setSignUpInfo({email: e.target.value});
    };
    const onSignUpPasswordHandler = (e) => {
        setSignUpInfo({password: e.target.value});
    };
    const onConfirmPasswordHandler = (e) => {
        if (signUpInfo.confirmPassword === signUpInfo.password ) {
            setSignUpInfo({errorMessage: '확인되었습니다!🥳', check: true});
            setSignUpInfo({confirmPassword: e.target.value });
        } else {
            setSignUpInfo({errorMessage: '다시 확인해주세요!😰', check: false});
        }
    };
    const onUserNameHandler = (e) => {
        setSignUpInfo({username: e.target.value});
    };

    const signUpOKHandler = () => {
        if (signUpInfo.check === true && signUpInfo.password.length > 4 && signUpInfo.username.length > 1) {
            const res = axios.post('52.78.158.147:8000/signup', 
                signUpInfo
            )
            .then((res) => {
                if (res.status === 200) {
                    openSignUpModal();
                    window.location('devmap.ml')
                }
            })
        } else {
            // alert(`${signUpOK.message}`)
        }
    };

    return (
        isModalOpen.signup === true ? 
        <SignUp onSignUpEmailHandler={onSignUpEmailHandler} onSignUpPasswordHandler={onSignUpPasswordHandler} onConfirmPasswordHandler={onConfirmPasswordHandler} onUserNameHandler={onUserNameHandler} signUpOKHandler={signUpOKHandler} errorMessage={signUpInfo.errorMessage} />
        : ''
    )
}