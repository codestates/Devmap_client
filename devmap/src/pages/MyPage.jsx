import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

export default function MyPage({ token, isSignnedIn }) {
    const [myPageInfo, setMyPageInfo] = useState({email: 'isSignnedIn.userInfo.email', newPassword: '', confirmNewPassword: '', newUserName: 'isSignnedIn.userInfo.userName', check: false, errorMessage: '' })
    const [myPageOK, setMyPageOK] = useState({message: '잠시 후에 다시 시도해 주세요!😭'})
    
    const onNewPasswordHandler = (e) => {
        setMyPageInfo({newPassword: e.target.value});
    };
    const onConfirmNewPasswordHandler = (e) => {
        if (myPageInfo.confirmNewPassword === myPageInfo.newPassword) {
            setMyPageInfo({errorMessage: '확인되었습니다!🥳', check: true});
            setMyPageInfo({confirmNewPassword: e.target.value});
        } else {
            setMyPageInfo({errorMessag: '다시 확인해주세요!😰', check: false});
        }
    };
    const onNewUserNameHandler = (e) => {
        setMyPageInfo({newUserName: e.target.value});
    };
    
    // onClick에 넣고, clearForm 기능과 함께 사용하기
    const myPageOKHandler = () => {
        if (myPageInfo.newPassword.length > 4) {
            const res = axios.post('http://devmap.ml/users/mypage', {
                myPageInfo
            })
            .then((res) => {
                if (res.status === 200) {
                    alert('정보 변경이 정상적으로 완료되었습니다!🤩')
                    window.location('http://devmap.ml/users/mypage') // 서버 엔드포인트 확인
                    // 클라이언트 엔드포인트, 서버 엔드포인트 같아도 괜찮은가?
                    // 이렇게 하면 리다이렉트되어 clearForm 기능이 구현이 될까?
                }
            })
            .catch((err) => {
                alert(`${myPageOK.message}`)
            })
        }
    }

    // handleResponseSuccess와 따져보기

    // useEffect(() => {
    //     getEmail();
    // }, [])

    // 로그인이 안되어있는 상황이라, email 값도 불러오지 못하고 입력도 안됨
    // 현재 서버와 통신이 제대로 안되는 상태

    const getEmail = async () => {
        const authedAxios = axios.create(
            { headers: { 
                Authorization: `${token}`
                // 로그인 이후 모든 소통에서 헤더에 토큰 넣어 보낸다
            }}
        );

        const res = await authedAxios.get(`http://devmap.ml/users/mypage`)
        console.log('MyPage Info', res)
        setMyPageInfo({email: res.data.email});
    };

    // body 영역의 페이지들 크기 모두 일치시키기(창 크기에 따른 변화도 고려)
    const MyPageWrapper = styled.div`
        width: 97%;
        height: 755px;
        margin: 0 auto;
        background-color: #eefffe;
        border: 5px solid;
        border-radius: 10px;
        border-color: #a3dfea;
    `;

    const MyPageBox = styled.div`
        display: block;
        position: absolute;
        left: 50%;
        top: 50%; 
        margin-left: -13.5%;
        margin-top: -14%;
        padding-top: 40px;
        padding-bottom: 40px;
        width: 500px;
        background-color: #fff4f4;
        border: 3px solid;
        border-radius: 10px;
        border-color: #fed0d3;
    `;

    const MyPageText = styled.div`
        text-align: center;
        margin-bottom: 30px;
        color: #ffa2b4;
        font-size: 20px;
        font-family: Jua;
    `;

    const TextInfo = styled.div`
        text-align: center;
        margin-bottom: 20px;
        color: #FED0D3;
        font-size: 15px;
        font-family: Jua;
    `;

    const MyPageTitle = styled.label`
        color: #fed0d3;
        margin-left: 10%;
        font-size: 25px;
        font-family: Jua;
    `;

    const MyPageEmail = styled.div`
        margin-bottom: 10px;
    `;

    const MyPageEmailTitle = styled.span`
        color: #fed0d3;
        margin-left: 10%;
        font-size: 25px;
        font-family: Jua;
    `;

    const MyPageEmailAddress = styled.span`
        color: #FED0D3;
        padding-left: 53px;
        font-size: 25px;
        font-family: Jua;
    `;
    
    const MyPageNewPassword = styled.div`
    `;
    const MyPageConfirmNewPassword = styled.div`
    `;
    const MyPageNewUsername = styled.div`
    `;
    const MyPagePasswordInput = styled.input`
        height: 40px;
        width: 52%;
        margin-top: 20px;
        margin-left: 21px;
        margin-bottom: 20px;
        border : 3px solid;
        border-radius: 10px;
        font-size: 18px;
        font-family: Jua;
        color: #ffa2b4;
        background-color: #fff8f8; 
        ::placeholder {
            color: #FED0D3;
            padding-left: 10px;
        }
    `;

    const MyPageNewPasswordInput = styled.input`
        height: 40px;
        width: 52%;
        margin-left: 80px;
        margin-bottom: 20px;
        border : 3px solid;
        border-radius: 10px;
        font-size: 18px;
        font-family: Jua;
        color: #ffa2b4;
        background-color: #fff8f8; 
        ::placeholder {
            color: #FED0D3;
            padding-left: 10px;
        }
    `;

    const MyPageNewUsernameInput = styled.input`
        height: 40px;
        width: 52%;
        margin-left: 42px;
        margin-bottom: 20px;
        border : 3px solid;
        border-radius: 10px;
        font-size: 18px;
        font-family: Jua;
        color: #ffa2b4;
        background-color: #fff8f8; 
        ::placeholder {
            color: #FED0D3;
            padding-left: 10px;
        }
    `;

    // button, div 등 태그 속성에 따른 실수에 유의
    const MyPageButton = styled.button`
        width: 28%;
        height: 45px;
        margin-left: 36%;
        margin-bottom: 10px;
        border : 3px solid;
        border-radius: 10px;
        border-color: #FED0D3;
        color: #ffffff;
        background-color: #FED0D3;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
    
        &:hover {
            background: ${lighten(0.004, '#fed0d3')};
            box-shadow:  0 5px #dedede;
        }
        &:active {
            background: ${darken(0.0008, '#fed0d3')};
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }
    `;
    
    const Withdrawal = styled.a`
        display: table;
        margin-left: auto;
        margin-right: auto;
        color: #FED0D3;
        font-size: 15px;
        font-family: Jua;
        cursor: pointer;
    `;

    return (
        <MyPageWrapper>
            <MyPageBox>
                <MyPageText>비밀번호와 닉네임을 수정하실 수 있습니다</MyPageText>
                <MyPageEmail>
                    <MyPageEmailTitle>이 메 일</MyPageEmailTitle>
                    <MyPageEmailAddress>{myPageInfo.email}</MyPageEmailAddress>
                </MyPageEmail>
                <MyPageNewPassword>
                    <MyPageTitle>새 비밀번호</MyPageTitle>
                    <MyPagePasswordInput
                        onChange={onNewPasswordHandler}
                        type="password"
                        placeholder="새로운 비밀번호를 입력해 주세요"
                    />
                </MyPageNewPassword>
                <MyPageConfirmNewPassword>
                    <MyPageTitle>확 인</MyPageTitle>
                    <MyPageNewPasswordInput
                        onChange={onConfirmNewPasswordHandler}
                        type="password"
                        placeholder="새로운 비밀번호를 입력해 주세요"
                    />
                </MyPageConfirmNewPassword>
                <MyPageNewUsername>
                    <MyPageTitle>새 닉네임</MyPageTitle>
                    <MyPageNewUsernameInput
                        onChange={onNewUserNameHandler}
                        type="text"
                        placeholder="새로운 닉네임을 입력해 주세요"
                    />
                </MyPageNewUsername>
                    <TextInfo>* 닉네임을 변경하고 싶지 않으시면 빈 칸으로 남겨두세요 *</TextInfo>
                    <MyPageButton 
                        onClick={myPageOKHandler}
                    >정보 변경
                    </MyPageButton>
                <div className="withdrawal-link">
                    <Link to='/withdrawal'>
                        <Withdrawal>회원 탈퇴</Withdrawal>
                    </Link>
                </div>
            </MyPageBox>
        </MyPageWrapper>
    );
};