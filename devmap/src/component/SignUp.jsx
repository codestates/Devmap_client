import React, { useState } from 'react';
import styled from 'styled-components';

export default function SignUp({ onSignUpEmailHandler, onSignUpPasswordHandler, onConfirmPasswordHandler, onNicknameHandler, signUpOKHandler, errorMessage }) {
    return (
        <div> 
            <div className="signup">
                <div className="signup-input-area">
                    <p className="signup-email">email</p>
                    <input 
                        className="signup-input-email" 
                        onChange={onSignUpEmailHandler} 
                        type="email"
                        placeholder="email을 입력해 주세요"
                    />
                    <p className="signup-password">password</p>
                    <input
                        className="signup-input-password"
                        onChange={onSignUpPasswordHandler}
                        type="password"
                        placeholder="password를 입력해 주세요"
                    />
                    <p className="signup-confirm-password">confirm password</p>
                    <input
                        className="signup-input-confirm-password"
                        onChange={onConfirmPasswordHandler}
                        type="password"
                        placeholder="password를 다시 한번 입력해 주세요"
                    />
                    <div>{errorMessage}</div>
                    <p className="signup-nickname">nickname</p>
                    <input
                        className="signup-input-nickname"
                        onChange={onNicknameHandler}
                        type="text"
                        placeholder="nickname을 입력해 주세요"
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