import React, { Component } from 'react';
// import React, { useState } from 'react';
// import axios from 'axios';

import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

const SignInModalShadow = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const ModalBox = styled.div`
    display: block;
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%; 
    margin-left: -13.5%;
    margin-top: -12.5%;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 500px;
    background-color: #fff4f4;
    border: 3px dashed;
    border-radius: 10px;
    border-color: #fed0d3;
`;

const Welcome = styled.div`
    margin-left: 30%;
    margin-bottom: 30px;
`;

const LogoText = styled.span`
    color: #ffa2b4;
    font-size: 25px;
    font-family: Jua;
`;

const LogoImg = styled.img`
    width: 30%;
    margin-bottom: -5px;
`;

const TextLine = styled.div`
    margin-left: 10%;
`;
const TextLine0 = styled.div`
    margin-left: 10%;
`;
const TextLine1 = styled.div`
`;
const TextLine2 = styled.div`
    margin-top: 8%;
    // margin-left: 17%;
`;
const TextLine3 = styled.div`
    margin-top: 7%;
    // margin-left: 17%;
`;

const Labelemail = styled.label`
    color: #fed0d3;
    font-size: 25px;
    font-family: Jua;
`;
const Labelpassword = styled.label`
    color: #fed0d3;
    font-size:  24px;
    font-family: Jua;
    margin-top: 10px;
`;

const EmailInput = styled.input`
    height: 40px;
    width: 60%;
    margin-left: 45px;
    margin-right: 40px;
    margin-bottom: 20px;
    border: 3px solid;
    border-radius : 10px;
    font-size:  18px;
    font-family: Jua;
    color: #ffa2b4;
    background-color: #fff8f8;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #FED0D3;
        padding: 10px;
    }  
`;
const PasswordInput = styled.input`
    height: 40px;
    width: 60%;
    margin-left: 20px;
    margin-right: 40px;
    margin-bottom: 30px;
    border: 3px solid;
    border-radius : 10px;
    font-size:  18px;
    font-family: Jua;
    color: #ffa2b4;
    background-color: #fff8f8;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #FED0D3;
        padding: 10px;
    }  
`;

const SignInButton = styled.button`
    width: 28%;
    height: 45px;
    margin-bottom: -10px;
    margin-left: 36%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    color: white;
    background-color: #fed0d3;
    font-size: 20px;
    font-family: Jua;
    // text-align: center;
    // position: relative;
    outline: 0;
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

// const Oauth = styled.a`
//     height: 50px;
//     text-align: center;
//     margin-left: 18%;
//     padding: 2%;
//     padding-left: 10%;
//     padding-right: 10%;
//     border: 3px solid;
//     border-radius: 10px;
//     border-color: #fed0d3;
//     font-size: 28px;
//     font-family: Jua;
//     color: #fed0d3;
//     background-color: #fff4f4;
//     outline: 0;
//     cursor: pointer;
//     &:hover {
//         background: ${lighten(0.004, '#fff4f4')};
//         box-shadow:  0 5px #dedede;
//     }
//     &:active {
//         background: ${darken(0.0008, '#fff4f4')};
//         box-shadow: 0 5px #666;
//         transform: translateY(4px);
//     }
// `;

// const Oauth1 = styled.a`
//     height: 50px;
//     text-align: center;
//     margin-left: 18%;
//     padding: 2%;
//     padding-left: 10%;
//     padding-right: 10%;
//     border: 3px solid;
//     border-radius: 10px;
//     border-color: #fed0d3;
//     font-size: 28px;
//     font-family: Jua;
//     color: #fed0d3;
//     background-color: #fff4f4;
//     outline: 0;
//     cursor: pointer;
//     &:hover {
//         background: ${lighten(0.004, '#fff4f4')};
//         box-shadow:  0 5px #dedede;
//     }
//     &:active {
//         background: ${darken(0.0008, '#fff4f4')};
//         box-shadow: 0 5px #666;
//         transform: translateY(4px);
//     }
// `;

class SignInModal extends Component {
    state = {
        credentials: {username: '', password: ''}
    }

    login = event => {
        if (this.state.credentials.username.length > 1 && this.state.credentials.password.length > 1) {
            console.log(this.state.credentials)
            fetch('http://devmap.ml/users/signin/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
            })
            .then( data => data.json())
            .then(
                data => {
                    console.log('data', data)
                    if (data.token) {
                        console.log(data.token);
                        alert('로그인 되었습니다!😄');
                        this.props.handleResponseSuccess();
                        this.props.closeSignInModal();
                    } else {
                        alert('아이디와 비밀번호를 확인해 주세요!😟');
                    }
                }
            )
            .catch( error => console.error(error));
        } else {
            alert('아이디와 비밀번호를 입력해 주세요!😨')
        }
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    inputEraser = () => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                username: '',
                password: ''    
            }
        })
    };

    render () {
        return (
            this.props.isModalOpen.signin === true ?
            <div> 
                <ModalBox>
                <div>
                    <div>    
                        <Welcome>
                            <LogoText>Login to </LogoText>
                            <LogoImg src={logo} alt="oops!"/>
                        </Welcome>
    
                        <TextLine>
                        <Labelemail>아 이 디</Labelemail>
                        <EmailInput 
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.inputChanged} 
                            placeholder="아이디를 입력해 주세요">
                        </EmailInput>
                        </TextLine>
    
                        <TextLine0>
                        <Labelpassword>비 밀 번 호</Labelpassword>
                        <PasswordInput 
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.inputChanged}
                            placeholder="비밀번호를 입력해 주세요">
                        </PasswordInput>
                        </TextLine0>
                    </div>
                    <TextLine1>
                    <SignInButton onClick={
                        () => {
                            this.login();
                            this.inputEraser();
                        }    
                    }>로그인</SignInButton>
                    </TextLine1>
                    {/* <div className="signup-link">
                        <Link to='/signup'>
                            <h3>회원이 아니신가요?</h3>
                        </Link>
                    </div> */}
                    
                    {/* <TextLine2>
                        <Oauth>카카오로 로그인하기</Oauth>
                    </TextLine2>   
    
                    <TextLine3>
                        <Oauth1>네이버로 로그인하기</Oauth1>
                    </TextLine3> */}
                </div>
                </ModalBox>
                <SignInModalShadow 
                    onClick={
                        () => {
                            this.props.closeSignInModal();
                            this.inputEraser();
                        }
                    }></SignInModalShadow>
            </div>
            : ''
        )
    }
}

export default SignInModal;

// import SignIn from './SignIn';
// axios.defaults.withCredentials = true;

// export default function SignInModal({ openSignInModal, closeSignInModal, isModalOpen, handleResponseSuccess }) {
//     const [signInInfo ,setSignInInfo] = useState({email: '' , password: '', errorMessage: ''});
//     const [signInOK, setSignInOK] = useState({message: '잠시 후에 다시 시도해 주세요!😭'})
    
//     const onSignInEmailHandler = (e) => {
//         setSignInInfo({eamil: e.target.value});
//     };
//     const onSignInPasswordHandler = (e) => {
//         setSignInInfo({password: e.target.value});
//     };

//     const signInOKHandler = () => {
//         // if (signInInfo.email.length > 4 && signInInfo.password.length > 4) { length 문제 뜸
//             const res = axios.post('/users/signin', {
//                 signInInfo
//             })
//             .then((res) => {
//                 if (res.status === 200) { // 상태 추가?
//                     handleResponseSuccess();
//                     openSignInModal(); // 닫기
//                     // window.location('http://devmap.ml') // 리다이렉트
//                 }
//             })
//             // .catch((err) => {
//             //     // if (res.status === 301) { // 계속 301이 뜬다고 한다 // CORS 에러
//             //         alert(`${signInOK.message}`)
//             //     // }
//             // })
//         // }
//     }

    // return (
        
    //     isModalOpen.signin === true ?
    //         <SignIn 
    //             closeSignInModal={closeSignInModal} 
    //             onSignInEmailHandler={onSignInEmailHandler} 
    //             onSignInPasswordHandler={onSignInPasswordHandler} 
    //             signInOKHandler={signInOKHandler} 
    //         /> 
    //     : ''
    // )
// }