import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function SignIn({ onSignInEmailHandler, onSignInPasswordHandler, signInOKHandler}) {
    return (
        <div> 
            <div className="signin">
                <div className="signin-input-area">
                    <p className="signin-email">이메일</p>
                    <input 
                        className="signin-input-email"
                        onChange={onSignInEmailHandler} 
                        type="email"
                        placeholder="이메일을 입력해 주세요"
                    />
                    <p className="signin-password">비밀번호</p>
                    <input
                        className="signin-input-password"
                        onChange={onSignInPasswordHandler}
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                    />
                </div>
                <div className="signin-button-area">
                    <button
                        className="signin-button" 
                        onClick={signInOKHandler}
                    >로그인
                    </button>
                </div>
                {/* <div className="signup-link">
                    <Link to='/signup'>
                        <h3>회원이 아니신가요?</h3>
                    </Link>
                </div> */}
                <div className="signin-social-link-naver">
                    <Link to=''>
                        <h3>Naver로 로그인하기</h3>
                    </Link>
                </div>
                <div className="signin-social-link-daum">
                    <Link to=''>
                        <h3>Daum으로 로그인하기</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}