import React from 'react';
import styled from 'styled-components';

// clearForm 구현하기? 어차피 창 꺼지니까 상관없다..?

export default function SignUp({ onSignUpEmailHandler, onSignUpPasswordHandler, onConfirmPasswordHandler, onUserNameHandler, signUpOKHandler, errorMessage }) {
    return (
        <div> 
            <div className="signup">
                <div className="signup-input-area">
                    <p className="signup-email">이메일</p>
                    <input 
                        className="signup-input-email" 
                        onChange={onSignUpEmailHandler} 
                        type="email"
                        placeholder="이메일을 입력해 주세요"
                    />
                    <p className="signup-password">비밀번호</p>
                    <input
                        className="signup-input-password"
                        onChange={onSignUpPasswordHandler}
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                    />
                    <p className="signup-confirm-password">비밀번호 재입력</p>
                    <input
                        className="signup-input-confirm-password"
                        onChange={onConfirmPasswordHandler}
                        type="password"
                        placeholder="비밀번호를 다시 한번 입력해 주세요"
                    />
                    <div>{errorMessage}</div>
                    <p className="signup-nickname">닉네임</p>
                    <input
                        className="signup-input-nickname"
                        onChange={onUserNameHandler}
                        type="text"
                        placeholder="닉네임을 입력해 주세요"
                    />
                </div>
                <div className="signup-button-area">
                    <button
                        className="signup-button" 
                        onClick={signUpOKHandler}
                    >회원 가입
                    </button>
                </div>
                {/* <div className="signin-link">
                    <Link to='/signin'>
                        <h3>계정이 있으신가요?</h3>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}