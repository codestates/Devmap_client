import React, { useState } from 'react';
import axios from 'axios';

import SignUp from './SignUp';
axios.defaults.withCredentials = true;

export default function SignUpModal({ openSignUpModal, closeSignUpModal, isModalOpen }) {
    const [signUpInfo, setSignUpInfo] = useState({email: '', password: '', confirmPassword: '', username: '', check: false, errorMessage: ''});
    const [signUpOK, setSignUpOk] = useState({message: '잠시 후에 다시 시도해 주세요!😭'});

    const onSignUpEmailHandler = (e) => {
        setSignUpInfo({email: e.target.value});
    };
    const onSignUpPasswordHandler = (e) => {
        setSignUpInfo({password: e.target.value});
    };
    const onConfirmPasswordHandler = (e) => {
        setSignUpInfo({confirmPassword: e.target.value});
        if (signUpInfo.password === signUpInfo.confirmPassword) {
            setSignUpInfo({errorMessage: '확인되었습니다!🥳', check: true});
        } else {
            setSignUpInfo({errorMessage: '다시 확인해주세요!😰', check: false});
        }
    };
    const onUserNameHandler = (e) => {
        setSignUpInfo({username: e.target.value});
    };

    const signUpOKHandler = () => {
        // if (signUpInfo.check === true && signUpInfo.password.length > 4 && signUpInfo.username.length > 1) {
            // 현재 에러 상태 체크 제대로 되지 않음 // onInput?
            const res = axios.post('/users/signup', {
                // 현재 서버 주소가 devmap.ml // 클라이언트는 localhost:3000
                // 위와 같이 보내면 CORS 에러는 안 뜸 // POST http://localhost:3000/users/signup 404 (Not Found) // http://devmap.ml 생략, package.json에 proxy로 되어 있음
                // OPTIONS로 감 // 200은 뜬다는데 못 받아 옴
                signUpInfo // json화 해서 보내야 함? // 객체 빼고 data에 대입해서 보내야 함? // 서버에는 email, password, username만 필요함(confirmPassword는 클라이언트 단에서의 비교)
                // 리액트와 장고 연결(장고에서 리액트 빌드파일 읽기) // 우리쪽에서 실시간 실험 못 함 // 작동하는 것은 확인됨! // 로그인 상태 바꿔 푸시하기
                // 로그아웃, 회원 탈퇴
                // 토큰 관련
            })
            .then((res) => {
                if (res.status === 200) { // 상태 추가?
                    openSignUpModal(); // 모달 닫기
                    window.location('http://localhost:3000/users/main') // 메인 페이지로 이동
                }
            })
        // } else {
        //     alert(`${signUpOK.message}`)
        // }
    };

    return (
        isModalOpen.signup === true ? 
            <SignUp 
                closeSignUpModal={closeSignUpModal} 
                onSignUpEmailHandler={onSignUpEmailHandler} 
                onSignUpPasswordHandler={onSignUpPasswordHandler} 
                onConfirmPasswordHandler={onConfirmPasswordHandler} 
                onUserNameHandler={onUserNameHandler} 
                signUpOKHandler={signUpOKHandler} 
                errorMessage={signUpInfo.errorMessage} 
            />
        : ''
    )
}