import React, { useState } from "react";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";

function SighUp({ onEmailHandler, onPasswordHandler, onConfirmPasswordHandler, onNicknameHandler }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const signUpHandler = async () => {
        if (email === "" 
            || password === "" 
            || confirmPassword === "" 
            || nickname === ""
           ) {
               alert("아래 항목을 모두 입력해 주세요 😉")
        } else if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다 😧");
        } else {
            const res = await axios.post('', {
                email: email,
                password: password,
                nickname: nickname
            })

            if (res.status === 200) { // 암호화 과정은 서버에서!
                alert("환영합니다! 🥳")
                // 로그인 페이지로 링크 이동하기
            } else {
                alert("잠시 뒤에 다시 시도해 주세요 😭")
            }
        }
    };

    return (
        <div> 
            <div className="signup">
                <div className="signup-input-area">
                    <p className="signup-email">email</p>
                    <input 
                        className="signup-input-email"
                        value={email} 
                        onChange={onEmailHandler} 
                        type="email"
                        placeholder="email을 입력해 주세요"
                    />
                    <p className="signup-password">password</p>
                    <input
                        className="signup-input-password"
                        value={password}
                        onChange={onPasswordHandler}
                        type="password"
                        placeholder="password를 입력해 주세요"
                    />
                    <p className="signup-confirm-password">confirm password</p>
                    <input
                        className="signup-input-confirm-password"
                        value={confirmPassword}
                        onChange={onConfirmPasswordHandler}
                        type="password"
                        placeholder="password를 다시 한번 입력해 주세요"
                    />
                    <p className="signup-nickname">nickname</p>
                    <input
                        className="signup-input-nickname"
                        value={nickname}
                        onChange={onNicknameHandler}
                        type="text"
                        placeholder="nickname을 입력해 주세요"
                    />
                </div>
                <div className="signup-button-area">
                    <button
                        className="signup-button" 
                        onClick={signUpHandler}
                    >회원 가입
                    </button>
                </div>
                <div className="login-link">
                    <Link to='/login'>
                        <h3>계정이 있으신가요?</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SignUp);