import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import SignIn from './SignIn';
axios.defaults.withCredentials = true;

export default function SignInModal({ openSignInModal, closeSignInModal, isModalOpen, handleResponseSuccess }) {
    const [signInInfo ,setSignInInfo] = useState({email: '' , password: '', errorMessage: ''});
    const [signInOK, setSignInOK] = useState({message: '잠시 후에 다시 시도해 주세요!😭'})
    
    const onSignInEmailHandler = (e) => {
        setSignInInfo({eamil: e.target.value});
    };
    const onSignInPasswordHandler = (e) => {
        setSignInInfo({password: e.target.value});
    };

    const signInOKHandler = () => {
        // if (signInInfo.email.length > 4 && signInInfo.password.length > 4) { length 문제 뜸
            const res = axios.post('/users/signin', {
                signInInfo
            })
            .then((res) => {
                if (res.status === 200) { // 상태 추가?
                    handleResponseSuccess();
                    openSignInModal(); // 닫기
                    // window.location('http://devmap.ml') // 리다이렉트
                }
            })
            // .catch((err) => {
            //     // if (res.status === 301) { // 계속 301이 뜬다고 한다 // CORS 에러
            //         alert(`${signInOK.message}`)
            //     // }
            // })
        // }
    }

    return (
        
        isModalOpen.signin === true ?
            <SignIn 
                closeSignInModal={closeSignInModal} 
                onSignInEmailHandler={onSignInEmailHandler} 
                onSignInPasswordHandler={onSignInPasswordHandler} 
                signInOKHandler={signInOKHandler} 
            /> 
        : ''
    )
}
