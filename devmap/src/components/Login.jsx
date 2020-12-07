import React, { useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Login({ handleLoginStatus, onEmailHandler, onPasswordHandler }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInHandler = async () => {
        if (email === "" || password === "") {
            alert("email과 password를 입력해 주세요 😉")
        } else {
            const res = await axios.post('', {
                email: email,
                password: password
            })

            if (res.status === 200) {
                // 인증 관련 파라미터
                handleLoginStatus();
            } else {
                alert("email과 password를 다시 한번 확인해 주세요 😧")
            }
        }
    };
            
    return (
        <div> 
            <div className="login">
                <div className="login-input-area">
                    <p className="login-email">email</p>
                    <input 
                        className="login-input-email"
                        value={email} 
                        onChange={onEmailHandler} 
                        type="email"
                        placeholder="email을 입력해 주세요"
                    />
                    <p className="login-password">password</p>
                    <input
                        className="login-input-password"
                        value={password}
                        onChange={onPasswordHandler}
                        type="password"
                        placeholder="password를 입력해 주세요"
                    />
                </div>
                <div className="login-button-area">
                    <button
                        className="login-button" 
                        onClick={logInHandler}
                    >로그인
                    </button>
                </div>
                <div className="signup-link">
                    <Link to='/signup'>
                        <h3>회원이 아니신가요?</h3>
                    </Link>
                </div>
                <div className="login-social-link-naver">
                    <Link to=''>
                        <h3>Naver로 로그인하기</h3>
                    </Link>
                </div>
                <div className="login-social-link-daum">
                    <Link to=''>
                        <h3>Daum으로 로그인하기</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);