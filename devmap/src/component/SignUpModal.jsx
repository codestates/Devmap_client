import React, { Component } from 'react';
// import React, { useState } from 'react';
// import axios from 'axios';

// import SignUp from './SignUp';
// axios.defaults.withCredentials = true;

// export default function SignUpModal({ openSignUpModal, closeSignUpModal, isModalOpen }) {
//     const [signUpInfo, setSignUpInfo] = useState({email: '', username: '', check: false, errorMessage: ''});
//     const [signUpOK, setSignUpOk] = useState({message: '잠시 후에 다시 시도해 주세요!😭'});
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const onSignUpEmailHandler = (e) => {
//         setSignUpInfo({email: e.target.value});
//     };
//     const onSignUpPasswordHandler = (e) => {
//         setPassword(e.target.value);
//     };
//     const onConfirmPasswordHandler = (e) => {
//         setConfirmPassword(e.target.value);
//     };

//     const comparePassword = (e) => {
//         if (password === confirmPassword) {
//             setSignUpInfo({errorMessage: '확인되었습니다!🥳', check: true});
//         } else if (password !== confirmPassword) {
//             setSignUpInfo({errorMessage: '다시 확인해주세요!😰', check: false});
//         }
//     };

//     const onUserNameHandler = (e) => {
//         setSignUpInfo({username: e.target.value});
//     };

//  const signUpOKHandler = (e) => {
    // if (signUpInfo.check === true && signUpInfo.password.length > 4 && signUpInfo.username.length > 1) {
        // 현재 에러 상태 체크 제대로 되지 않음 // onInput? // 수정 완료
        // const res = axios.post('/users/signup', {
            // 현재 서버 주소가 devmap.ml // 클라이언트는 localhost:3000
            // 위와 같이 보내면 CORS 에러는 안 뜸 // POST http://localhost:3000/users/signup 404 (Not Found) // http://devmap.ml 생략, package.json에 proxy로 되어 있음
            // OPTIONS로 감 // 200은 뜬다는데 못 받아 옴
            // signUpInfo // json화 해서 보내야 함? // 객체 빼고 data에 대입해서 보내야 함? // 서버에는 email, password, username만 필요함(confirmPassword는 클라이언트 단에서의 비교)
            // 리액트와 장고 연결(장고에서 리액트 빌드파일 읽기) // 우리쪽에서 실시간 실험 못 함 // 작동하는 것은 확인됨? 같은데서 돌려서? // 로그인 상태 바꿔 푸시하기
            // 로그아웃, 회원 탈퇴
            // 토큰 관련
            // fetch 사용? // axios 관련 조건 import?
        // })
        // .then((res) => {
        //     if (res.status === 200) { // 상태 추가?
        //         openSignUpModal(); // 모달 닫기
        //         window.location('http://localhost:3000/users/main') // 메인 페이지로 이동
        //     }
        // })
    // } else {
    //     alert(`${signUpOK.message}`)
    // }
// };

import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

    const SignUpModalShadow = styled.div`
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

    const SignUpWrapper = styled.div`
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
        margin-left: 25%;
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

    const SignUpInputArea = styled.div`
    `;
    const SignUpEmail = styled.div`
    `;
    const SignUpPassword = styled.div`
    `;
    const SignUpConfirmPassword = styled.div`
    `;
    const SignUpUserName = styled.div`
    `;

    // p 태그는 input이 아래로 내려간다, 한 줄에 두고 싶다면 label 태그를 사용할 것(input과 속성이 연결된다)
    const SignUpTitle = styled.label`
        color: #fed0d3;
        margin-left: 10%;
        font-size: 25px;
        font-family: Jua;
    `;

    const SignUpEmailInput = styled.input`
        height: 40px;
        width: 50%;
        margin-left: 59px;
        margin-right: 40px;
        margin-bottom: 20px;
        border : 3px solid;
        border-radius: 10px;
        font-size: 18px;
        font-family: Jua;
        color: #ffa2b4;
        // 글씨색 너무 흐려서 어쩔 수 없이 전체 색 변경
        background-color: #fff8f8; 
        ::placeholder {
            color: #FED0D3;
            padding-left: 10px;
        }
    `;

    const SignUpPasswordInput = styled.input`
        height: 40px;
        width: 50%;
        margin-left: 30px;
        margin-right: 40px;
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

    const SignUpConfirmPasswordInput = styled.input`
        height: 40px;
        width: 50%;
        margin-left: 86px;
        margin-right: 40px;
        margin-bottom: 10px;
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

    const SignUpUserNameInput = styled.input`
        height: 40px;
        width: 50%;
        margin-left: 59px;
        margin-right: 40px;
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

    const ErrorMessage = styled.div`
        color: #ffa2b4;
        padding-bottom: 10px;
        font-size: 18px;
        font-family: Jua;
        text-align: center;
        margin-left: 50%;
    `;

    const CompareButton = styled.button`
        width: 20%;
        height: 30px;
        margin-left: 69%;
        margin-bottom: 2%;
        border : 3px solid;
        border-radius: 10px;
        border-color: #FED0D3;
        color: #ffffff;
        background-color: #FED0D3;
        font-size: 15px;
        font-family: Jua;
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

    const SignUpButton = styled.button`
        width: 28%;
        height: 45px;
        margin-left: 36%;
        border : 3px solid;
        border-radius: 10px;
        border-color: #FED0D3;
        color: #ffffff;
        background-color: #FED0D3;
        font-size: 20px;
        font-family: Jua;
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

    class SignUpModal extends Component {
        // constructor(props) {
        //     super(props);
            // console.log(props.closeSignUpModal); // 받아 온다

            state = {
                credentials: {username: '', email: '', password: ''},
                confirmPassword: '',
                check: false,
                errorMessage: '',
            }
        // }
    
        // 클라이언트에서는 토큰 상태 신경 안써도 된다
        // login = event => {
        //     console.log(this.state.credentials)
        //     fetch('http://devmap.ml/users/signin/', {
        //         method: 'POST',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(this.state.credentials)
        //     })
        //     .then( data => data.json())
        //     .then(
        //         data => {
        //             console.log(data.token);
        //         }
        //     )
        //     .catch( error => console.error(error));
        // }
    
        register = event => {
            console.log(this.state.credentials)
            fetch('http://devmap.ml/users/signup/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
            })
            .then(data => data.json())
            .then(
                data => {
                    console.log(data.token);
                }
            )
            .then(data => {
                // if (data.status === 200) {
                    alert('환영합니다!🥰')
                    this.props.closeSignUpModal();
                // }
            })
            .catch(err => console.error(err));
        }

        inputChanged = event => {
            const cred = this.state.credentials;
            cred[event.target.name] = event.target.value;
            this.setState({credentials: cred});
        }
    
        onConfirmPasswordHandler = event => {
            this.setState({confirmPassword: event.target.value});
        };

        comparePassword = () => {
            if (this.state.credentials.password === this.state.confirmPassword) {
                this.setState({errorMessage: '확인되었습니다!🥳', check: true});
            } else if (this.state.credentials.password !== this.state.confirmPassword) {
                this.setState({errorMessage: '다시 확인해주세요!😰', check: false});
            }
        };

        render() {
            // const { openSignUpModal, closeSignUpModal, isModalOpen } = this.props;
            // console.log(this.props.closeSignUpModal);
            return(
                this.props.isModalOpen.signup === true ? 
                <div>
                    <SignUpWrapper>
                        {/* <SignUpInputArea> */}
                        <Welcome>
                            <LogoText>Welcome to </LogoText>
                            <LogoImg src={logo} alt="oops!"/>
                        </Welcome>
                            <SignUpUserName>
                            <SignUpTitle>아 이 디</SignUpTitle>
                            <SignUpUserNameInput
                                type="text"
                                name="username"
                                value={this.state.credentials.username}
                                onChange={this.inputChanged}
                                placeholder="아이디를 입력해 주세요"
                            />
                            </SignUpUserName>
                            <SignUpEmail>
                            <SignUpTitle>이 메 일</SignUpTitle>
                            <SignUpEmailInput 
                                type="text"
                                name="email"
                                value={this.state.credentials.email}
                                onChange={this.inputChanged} 
                                placeholder="이메일을 입력해 주세요"
                            />
                            </SignUpEmail>
                            <SignUpPassword>
                            <SignUpTitle>비 밀 번 호</SignUpTitle>
                            <SignUpPasswordInput
                                type="password"
                                name="password"
                                value={this.state.credentials.password}
                                onChange={this.inputChanged}
                                placeholder="비밀번호를 입력해 주세요"
                            />
                            </SignUpPassword>
                            {/* 서버쪽에 항목 없어 임시로 주석. 서버와 상세 항목 비교하기 */}
                            <SignUpConfirmPassword>
                            <SignUpTitle>확 인</SignUpTitle>
                            <SignUpConfirmPasswordInput
                                type="password"
                                onChange={this.onConfirmPasswordHandler}
                                placeholder="비밀번호를 입력해 주세요"
                            />
                            </SignUpConfirmPassword>
                            <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                            <CompareButton onClick={this.comparePassword}>일치 확인</CompareButton>
                        {/* </SignUpInputArea> */}
                            <SignUpButton 
                                onClick={this.register} // this.comparePassword
                            >회원 가입
                            </SignUpButton>
                        {/* <div className="signin-link">
                            <Link to='/signin'>
                                <h3>계정이 있으신가요?</h3>
                            </Link>
                        </div> */}
                    </SignUpWrapper>
                    <SignUpModalShadow onClick={() => this.props.closeSignUpModal()} />
                </div>
                : ''
            )
        }
    }
    
    export default SignUpModal;
    
//     return (
//         isModalOpen.signup === true ? 
//             <SignUp 
//                 // closeSignUpModal={closeSignUpModal} 
//                 // onSignUpEmailHandler={onSignUpEmailHandler} 
//                 // onSignUpPasswordHandler={onSignUpPasswordHandler} 
//                 // onConfirmPasswordHandler={onConfirmPasswordHandler} 
//                 // comparePassword={comparePassword}
//                 // onUserNameHandler={onUserNameHandler} 
//                 // signUpOKHandler={signUpOKHandler} 
//                 // errorMessage={signUpInfo.errorMessage} 
//             />
//         : ''
//     );
// }