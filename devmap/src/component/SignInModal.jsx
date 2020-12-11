import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SignIn from './SignIn';
axios.defaults.withCredentials = true;

export default function SignInModal({ openSignInModal, isModalOpen, handleResponseSuccess }) {
    const [signInInfo ,setSignInInfo] = useState({email: '' , password: '', errorMessage: ''});
    const [signInOK, setSignInOK] = useState({message: '입력 내용을 다시 한번 확인해주세요!😭'})
    
    const onSignInEmailHandler = (e) => {
        setSignInInfo({eamil: e.target.value});
    };
    const onSignInPasswordHandler = (e) => {
        setSignInInfo({password: e.target.value});
    };

    const signInOKHandler = () => {
        if (signInInfo.email.length > 4 && signInInfo.password.length > 4) {
            const res = axios.post('', {
                signInInfo
            })
            .then((res) => {
                if (res.status === 200) {
                    handleResponseSuccess();
                    openSignInModal(); // 닫기
                    window.location('devmap.ml') // 리다이렉트
                }
            })
            .catch((err) => {
                alert(`${signInOK.message}`)
            })
        }
    }

    return (
        isModalOpen.signin === true ?
        <SignIn onSignInEmailHandler={onSignInEmailHandler} onSignInPasswordHandler={onSignInPasswordHandler} signInOKHandler={signInOKHandler} />
        : ''
    )
}
