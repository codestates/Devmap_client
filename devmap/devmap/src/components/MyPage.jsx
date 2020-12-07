import React, { useState } from "react";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";

function MyPage({ onNewPasswordHandler, onConfirmNewPasswordHandler, onNewNicknameHandler }) {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [newNickname, setNewNickname] = useState("original nickname"); // 확인 필요
    
    const userInfoHandler = async () => {
        // newPassword가 예전 password와 같으면 alert?
        if (newPassword === "" || confirmNewPassword === "") {
            alert("new password와 confirm new password를 입력해 주세요 😉")
        } else if (newPassword !== confirmNewPassword) {
            alert("비밀번호가 일치하지 않습니다 😧")
        } else {
            // 재 인증 과정 작성하기

            const res = await axios.post('', {
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword,
                newNickname: newNickname
            })
            
            if (res.status === 200) {
                alert("회원 정보가 수정되었습니다 🤩")
            } else {
                alert("잠시 뒤에 다시 시도해 주세요 😭")
            }
        }
    };

    const getEmail = 
        axios
            .get('')
            .then(res => 
                console.log(res.data.email) // 확인 필요
            );
    
    return (
        <div>
            <div className="MyPage">
                <div className="show-email">
                    <p className="mypage-email">email</p>
                    <p className="mypage-email-address">{getEmail}</p>
                </div>
                <div className="mypage-input-area">
                    <p className="mypage-new-password">new password</p>
                    <input
                        className="mypage-input-new-password"
                        value={newPassword}
                        onChange={onNewPasswordHandler}
                        type="password"
                        placeholder="새로운 password를 입력해 주세요"
                    />
                    <p className="mypage-confirm-new-password">confirm new password</p>
                    <input
                        className="mypage-input-confirm-new-password"
                        value={confirmNewPassword}
                        onChange={onConfirmNewPasswordHandler}
                        type="password"
                        placeholder="새로운 password를 다시 한번 입력해 주세요"
                    />
                    <p className="mypage-new-nickname">new nickname</p>
                    <input
                        className="mypage-input-new-nickname"
                        value={newNickname}
                        onChange={onNewNicknameHandler}
                        type="text"
                        placeholder="변경할 nickname을 입력해 주세요"
                    />
                    <p className="mypage-new-nickname-info">* nickname을 변경하고 싶지 않으시면 빈 칸으로 남겨두세요 *</p>
                </div>
                <div className="mypage-button-area">
                    <button
                        className="mypage-button" 
                        onClick={userInfoHandler}
                    >정보 변경
                    </button>
                </div>
                <div className="withdrawal-link">
                    <Link to='/withdrawal'>
                        <h3>회원 탈퇴</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MyPage);