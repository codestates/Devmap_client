import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import { darken, lighten } from 'polished';

// override axios default csrf header and cookie name to match what Django expects
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

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
    top: 60%; 
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
    margin-top: 20px;
    margin-bottom: 30px;
    color: #ffa2b4;
    font-size: 17px;
    font-family: Jua;
`;

// const TextInfo = styled.div`
//     text-align: center;
//     margin-bottom: 20px;
//     color: #FED0D3;
//     font-size: 15px;
//     font-family: Jua;
// `;

// const MyPageTitle = styled.label`
//     color: #fed0d3;
//     margin-left: 10%;
//     font-size: 25px;
//     font-family: Jua;
// `;

const MyPageInfo = styled.div`
    margin-bottom: 10px;
`;

// const MyPageInfoTitle = styled.span`
//     color: #fed0d3;
//     margin-left: 10%;
//     font-size: 25px;
//     font-family: Jua;
// `;

const MyPageInfoContent = styled.span`
    color: #FED0D3;
    padding-left: 53px;
    font-size: 25px;
    font-family: Jua;
`;

// const MyPageOldPassword = styled.div`
// `;
// const MyPageNewPassword = styled.div`
// `;
// const MyPageConfirmNewPassword = styled.div`
// `;
// // const MyPageNewUsername = styled.div`
// // `;

// const MyPageOldPasswordInput = styled.input`
//     height: 40px;
//     width: 52%;
//     margin-top: 20px;
//     margin-left: 50px;
//     border : 3px solid;
//     border-radius: 10px;
//     font-size: 18px;
//     font-family: Jua;
//     color: #ffa2b4;
//     background-color: #fff8f8;
//     outline: 0;
//     ::placeholder {
//         color: #FED0D3;
//         padding-left: 10px;
//     }
// `;

// const MyPagePasswordInput = styled.input`
//     height: 40px;
//     width: 52%;
//     margin-top: 20px;
//     margin-left: 21px;
//     margin-bottom: 20px;
//     border : 3px solid;
//     border-radius: 10px;
//     font-size: 18px;
//     font-family: Jua;
//     color: #ffa2b4;
//     background-color: #fff8f8;
//     outline: 0;
//     ::placeholder {
//         color: #FED0D3;
//         padding-left: 10px;
//     }
// `;

// const MyPageNewPasswordInput = styled.input`
//     height: 40px;
//     width: 52%;
//     margin-left: 80px;
//     margin-bottom: 20px;
//     border : 3px solid;
//     border-radius: 10px;
//     font-size: 18px;
//     font-family: Jua;
//     color: #ffa2b4;
//     background-color: #fff8f8;
//     outline: 0;
//     ::placeholder {
//         color: #FED0D3;
//         padding-left: 10px;
//     }
// `;

// const MyPageNewUsernameInput = styled.input`
//     height: 40px;
//     width: 52%;
//     margin-left: 42px;
//     margin-bottom: 20px;
//     border : 3px solid;
//     border-radius: 10px;
//     font-size: 18px;
//     font-family: Jua;
//     color: #ffa2b4;
//     background-color: #fff8f8; 
//     ::placeholder {
//         color: #FED0D3;
//         padding-left: 10px;
//     }
// `;

// const Message = styled.div`
//     color: #ffa2b4;
//     padding-bottom: 10px;
//     font-size: 18px;
//     font-family: Jua;
//     text-align: center;
//     margin-left: 50%;
// `;

// const CompareButton = styled.button`
//     width: 20%;
//     height: 30px;
//     margin-left: 69%;
//     margin-bottom: 2%;
//     border : 3px solid;
//     border-radius: 10px;
//     border-color: #FED0D3;
//     color: #ffffff;
//     background-color: #FED0D3;
//     font-size: 15px;
//     font-family: Jua;
//     outline: 0;
//     cursor: pointer;

//     &:hover {
//         background: ${lighten(0.004, '#fed0d3')};
//         box-shadow:  0 5px #dedede;
//     }
//     &:active {
//         background: ${darken(0.0008, '#fed0d3')};
//         box-shadow: 0 5px #666;
//         transform: translateY(4px);
//     }
// `;

// // button, div 등 태그 속성에 따른 실수에 유의
// const MyPageButton = styled.button`
//     width: 28%;
//     height: 45px;
//     margin-left: 36%;
//     margin-bottom: 10px;
//     border : 3px solid;
//     border-radius: 10px;
//     border-color: #FED0D3;
//     color: #ffffff;
//     background-color: #FED0D3;
//     font-size: 20px;
//     font-family: Jua;
//     outline: 0;
//     cursor: pointer;

//     &:hover {
//         background: ${lighten(0.004, '#fed0d3')};
//         box-shadow:  0 5px #dedede;
//     }
//     &:active {
//         background: ${darken(0.0008, '#fed0d3')};
//         box-shadow: 0 5px #666;
//         transform: translateY(4px);
//     }
// `;

// const Withdrawal = styled.a`
//     display: table;
//     margin-left: auto;
//     margin-right: auto;
//     color: #FED0D3;
//     font-size: 15px;
//     font-family: Jua;
//     cursor: pointer;
// `;

const MailToFront = styled.button`
    height: 40px;
    width: 60%;
    text-align: center;
    margin-left: 20%;
    padding-left: 2%;
    padding-right: 2%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #FED0D3;
    color: #ffffff;
    background-color: #FED0D3;
    font-size: 24px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    &:hover {
        background: ${lighten(0.004, '#fed0d3')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#fed0d3')};
        box-shadow: 0 2px #666;
        transform: translateY(4px);
    }
`;

const MailToBack = styled.button`
    height: 40px;
    width: 60%;
    text-align: center;
    margin-top: 7px;
    margin-left: 20%;
    padding-left: 2%;
    padding-right: 2%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #FED0D3;
    color: #ffffff;
    background-color: #FED0D3;
    font-size: 24px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    &:hover {
        background: ${lighten(0.004, '#fed0d3')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#fed0d3')};
        box-shadow: 0 2px #666;
        transform: translateY(4px);
    }
`;

const BackToMain = styled.button`
    margin-top: 4px;
    margin-right: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    font-size: 20px;
    font-family: Jua;
    float: right;
    border: 3px solid;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

// const API_HOST = 'http://devmap.ml/';
// let csrfToken_ = null;

// // csrf 토큰 받아오기
// async function getCsrfToken() {
//   if (csrfToken_ === null) {
//     const res = await fetch(`${API_HOST}users/memberinfo/`, {
//       credentials: 'include',
//     });
//     const data = await res.json();
//     csrfToken_ = data.csrfToken;
//   }
//   console.log(csrfToken_);
//   return csrfToken_;
// }

// // 헤더에 csrf 토큰을 넣어 post나 get 요청 보내기
// async function authedFetch(method) {
//   const res = await fetch(`${API_HOST}users/memberinfo/`, {
//     method: method,
//     headers: (
//       method === 'POST' // default
//         ? {'X-CSRFToken': await getCsrfToken()}
//         : {}
//     ),
//     credentials: 'include',
//   });
//   const data = await res.json();
//   return data;
// }

class MyPage extends Component {
    state = {
        username: '', 
        email: '',
        old_password: '',
        new_password: '', 
        confirm_new_password: '',
        check: false,
        message: '',
        // get: '',
        // post: ''
    };

    // async componentDidMount() {
    //     this.setState({
    //       get: await authedFetch('GET'),
    //       post: await authedFetch('POST'),
    //     })
    // };

    // getAllUserData = () => 
    // data // ${data.id}

    // username과 email 받아와서 띄워주기
    getUserData = async () => {
        // this.setState({
        //     get: await authedFetch('GET')
        // })
        await axios 
        .get('http://devmap.ml/users/memberinfo/')
        .then(
            data => {
                // data.json()
                console.log('get data', data);
                console.log('get user data', data.data); // 전체 유저 정보 다 받아옴 // 다른 방법 없다 
                // 현재 서버에서 변경한 뒤(해당 유저 정보만 받아오게)로 다시 에러 // 인증 관련, csrf 관련 수정해 보기
                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i].id === this.props.idNumber) { // 회원 가입시 받은 id number를 끌어 와서 비교
                        this.setState({
                            username: data.data[i].username,
                            email: data.data[i].email
                            // 제대로 뜨지만, 회원 가입 후 바로 로그인 후 마이 페이지로 들어와야지만 인식
                            // 로그인 시에 id를 받아오면 좋은데 서버에서 불가
                        })
                    }
                };
            }
        )
        .catch(err => console.error('err', err));
    };

    onOldPasswordHandler = event => {
        this.setState({old_password: event.target.value});
    };

    onNewPasswordHandler = event => {
        this.setState({new_password: event.target.value});
    };

    onConfirmNewPasswordHandler = event => {
        this.setState({confirm_new_password: event.target.value});
    };

    comparePassword = () => {
        if (this.state.new_password === this.state.confirm_new_password) {
            this.setState({message: '확인되었습니다!🥳', check: true});
        } else if (this.state.new_password !== this.state.confirm_new_password) {
            this.setState({message: '다시 확인해주세요!😰', check: false});
        };
    };
 
    // 비밀번호 변경하기
    modify = async () => {
        if (this.state.new_password.length > 1 && this.state.confirm_new_password.length > 1) {
            const authedAxios = axios.create(
                { headers: { 
                    Authorization: `${this.props.token}`
                }}
            )
            await authedAxios
            .post(`http://devmap.ml/users/memberinfochange/${this.props.idNumber}`, {
                old_password: this.state.old_password,
                new_password: this.state.new_password
            })

            // fetch('http://devmap.ml/users/memberinfochange/',{
            //     method: 'PUT',
            //     headers: {'Content-type': 'application/json'},
            //     body: JSON.stringify(this.state.new_password)
            // })
            .then(data => data.json())
            .then(json => {
                console.log('data', json)
            })
            .then(json => {
                alert('비밀번호가 정상적으로 변경되었습니다!😄')
                // window.location.assign('http://devmap.ml/users/main')
            })
            .catch(err => console.error('err', err));
        } else {
            alert('아래 항목을 모두 기입해 주세요!😨')
        };
    };

    componentDidMount() {
        console.log('componentDidMount!')
        this.getUserData();
        // console.log('userInfo', this.props.userInfo);
    };

    // componentDidMount!
    // (21) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {id: 1, username: "devmap", email: "devmap@devmap.com", password: "pbkdf2_sha256$216000$DIWOmruLv6zM$Q8LRKC78L7x/5dfixvsr+bXU8qMggwdMHT9LlnwFHSg="}1: {id: 2, username: "test", email: "test@test.com", password: "pbkdf2_sha256$216000$VJHpYITkWAdl$15arJcaWCOGu5/lPJTLBLURqXCb7jHiJ/9UD++6edJs="}2: {id: 3, username: "test1", email: "test1@test.com", password: "pbkdf2_sha256$216000$Fknrpub9bo9p$LO8OyApZ37vnr89L9KzyKOJrNXea+EQ5nDeZqlIXls8="}3: {id: 4, username: "1212", email: "1212@naver.com", password: "pbkdf2_sha256$216000$TnD5tidzLm1B$n/An+Pbun36uyI8+IuTCeyCiUW81RtZ4RBtJubQTxvE="}4: {id: 5, username: "nickname", email: "naver@naver.com", password: "pbkdf2_sha256$216000$1FYy6QaH0X3o$Bm/55kD6r2+vltdSoAQdCaAZ1RLSNxGtUdrdZq+9ijA="}5: {id: 6, username: "testtest", email: "test@test.co.kr", password: "pbkdf2_sha256$216000$zX5HbCFcJU8T$Be2tpvAdiAVlODByyw2ji1tg3nRKY14kNOuf8kfXpRc="}6: {id: 7, username: "nickname1234", email: "hi@hi.com", password: "pbkdf2_sha256$216000$GAebC3lUcuXJ$Cfw8ZHxIC0KGUQC1TK4yTMn0c0xrkfD28eqK9f9SXLU="}7: {id: 8, username: "nicanamehahaha", email: "hihi@hihi.com", password: "pbkdf2_sha256$216000$fOJE5WC8wTBe$iP+KauQwa6RiJUK4HLILgMvUbOWMQc9RQEpj4l/WgKA="}8: {id: 9, username: "121212121212", email: "12@12.com", password: "pbkdf2_sha256$216000$thx1MPBFssZf$xDSzaJ/vnVlDcbetqnkx6RYEEk53j5fNQTF67xMCRQs="}9: {id: 10, username: "nick", email: "1212@naver.com", password: "pbkdf2_sha256$216000$Xjwmg0DOQoRC$ZNBrg7iAZABCKiWbqCm/iYs1ZKt+MCOegFjHkeS8R3U="}10: {id: 11, username: "하이", email: "1234@567.com", password: "pbkdf2_sha256$216000$R3GhBIH8uwAE$+LZay2Q+Eo5SF+T7F8qiZ/CrTrOEcdqpThi56YvD2Rw="}11: {id: 12, username: "qwwe", email: "12@sdjkl.com", password: "pbkdf2_sha256$216000$xw92bRQR7EMI$VYdzpTOtcBjKSEFY+zxpqZlVEFxri4Onrjv6bPsydVc="}12: {id: 13, username: "sfsf", email: "12@skjdl.com", password: "pbkdf2_sha256$216000$1CyYKFZ3TPac$I90dmFcm1Fj8CWan6KhGLalEq4/3My+uc4Mz2ewBtH8="}13: {id: 14, username: "hello12", email: "hello12@naber.com", password: "pbkdf2_sha256$216000$rkQ2ldkG2Dmg$IDJAnlAwg8mp1jFuO6LnOYEvTkf2yVDx8VxQh2F1ck8="}14: {id: 15, username: "ejkwon", email: "ej@devmap.com", password: "pbkdf2_sha256$216000$NwuRtDktT0K2$9UQOjPe9Uq4XO1Esp/1bS7fhYm3jJGVfEGh+nVyWbWc="}15: {id: 16, username: "1234", email: "12@34.com", password: "pbkdf2_sha256$216000$N42BTzr3fks2$Jdsz3kxgUIAv+0cxmTEoHA2taYO5HpqrfvF/06E4xgw="}16: {id: 17, username: "12345", email: "12345678@12.com", password: "pbkdf2_sha256$216000$wt6eIOuqyoB2$OB6lCIGXy4X/VmsgeHKJRAFNJsiY9k+hwLbkEmntXl4="}17: {id: 18, username: "test12", email: "test@test.co.kr", password: "pbkdf2_sha256$216000$wH49VZiZ3pZg$GQYZwG50LVuO6zpnB/wb82vqyap1IsLwv+C/ZQSk9Zw="}18: {id: 19, username: "hellow", email: "hihi@naver.com", password: "pbkdf2_sha256$216000$znKDR4e7dnJH$ZDHBwT4JmTCPkNHklIdEGUO6n0jWBWzsVgIRruYvhnI="}19: {id: 20, username: "bytheway", email: "bytheway@way.com", password: "pbkdf2_sha256$216000$AwytfLJRS8H4$ho2vSabIzG5RdD1XWeNc6/2DgJ7xyNlgviUbNpN0zHw="}20: {id: 21, username: "ej", email: "ej@devmap.com", password: "pbkdf2_sha256$216000$I54Gkj3ef5C1$gFsYCsaJNyjpGBKHDlJsqlTeDYGM+u76SfzAHi6Rafg="}length: 21__proto__: Array(0)
    // 아이디와 이메일 undefined

    wantToGetMailFront = () => { // 임시, 엔드 포인트 작동 안함
        // const authedAxios = axios.create(
        //     { headers: { 
        //         Authorization: `${this.props.token}`
        //     }}
        // )
        // await authedAxios
        // .post(`http://devmap.ml/users/newsletterfront/${this.props.idNumber}`, {
        //     email: this.state.email
        // })
        // .then(data => data.json())
        // .then(json => {
        //     console.log('data', json)
        // })
        // .then(() => {
            alert('프론트엔드 뉴스 레터 신청이 완료되었어요!😄')
        // })
        // .catch(err => console.error('err', err));
    };

    wantToGetMailBack = () => { // 임시, 엔드 포인트 작동 안함
        // const authedAxios = axios.create(
        //     { headers: { 
        //         Authorization: `${this.props.token}`
        //     }}
        // )
        // await authedAxios
        // .post(`http://devmap.ml/users/newsletterback/${this.props.idNumber}`, {
        //     email: this.state.email
        // })
        // .then(data => data.json())
        // .then(json => {
        //     console.log('data', json)
        // })
        // .then(() => {
            alert('백엔드 뉴스 레터 신청이 완료되었어요!😄')
        // })
        // .catch(err => console.error('err', err));
    };
    
    render() {
        return (
        <MyPageWrapper>
            <MyPageBox>
                {/* <MyPageText>비밀번호를 수정하실 수 있습니다</MyPageText> */}
                <MyPageInfo>
                    {/* <MyPageInfoTitle></MyPageInfoTitle> */}
                    <MyPageInfoContent>{this.state.username}님 안녕하세요!</MyPageInfoContent>
                </MyPageInfo>
                <MyPageInfo>
                    {/* <MyPageInfoTitle>이 메 일</MyPageInfoTitle> */}
                    <MyPageInfoContent>{this.state.username}님이 가입하실 때 입력한 이메일 주소는</MyPageInfoContent>
                    <MyPageInfoContent>{this.state.email} 입니다</MyPageInfoContent>
                </MyPageInfo>
                {/* <MyPageOldPassword>
                    <MyPageTitle>비밀번호</MyPageTitle>
                    <MyPageOldPasswordInput
                        type="password"
                        name="password"
                        value={this.state.old_password}
                        onChange={this.onOldPasswordHandler}
                        placeholder="현재 비밀번호를 입력해 주세요"
                    />
                </MyPageOldPassword>
                <MyPageNewPassword>
                    <MyPageTitle>새 비밀번호</MyPageTitle>
                    <MyPagePasswordInput
                        type="password"
                        name="password"
                        value={this.state.new_password}
                        onChange={this.onNewPasswordHandler}
                        placeholder="새로운 비밀번호를 입력해 주세요"
                    />
                </MyPageNewPassword>
                <MyPageConfirmNewPassword>
                    <MyPageTitle>확 인</MyPageTitle>
                    <MyPageNewPasswordInput
                        type="password"
                        onChange={this.onConfirmNewPasswordHandler}
                        placeholder="새로운 비밀번호를 입력해 주세요"
                    />
                </MyPageConfirmNewPassword> */}
                <div>
                    <MyPageText>
                        아래 버튼을 클릭하시면<br/>
                        매주 각 분야별 최신 업데이트 정보와 트렌드 관련 정보를 정리하여<br/>
                        위 메일 주소로 보내드려요 😎
                    </MyPageText>
                    <MailToFront
                        onClick={this.wantToGetMailFront}
                    >프론트엔드 뉴스 레터 신청
                    </MailToFront>
                    <MailToBack
                        onClick={this.wantToGetMailBack}
                    >백엔드 뉴스 레터 신청
                    </MailToBack>
                </div>
                {/* <MyPageNewUsername>
                    <MyPageTitle>새 닉네임</MyPageTitle>
                    <MyPageNewUsernameInput
                        onChange={onNewUserNameHandler}
                        type="text"
                        placeholder="새로운 닉네임을 입력해 주세요"
                    />
                </MyPageNewUsername>
                    <TextInfo>* 닉네임을 변경하고 싶지 않으시면 빈 칸으로 남겨두세요 *</TextInfo> */}
                {/* <Message>{this.state.message}</Message>
                <CompareButton onClick={this.comparePassword}>일치 확인</CompareButton>
                <MyPageButton 
                    onClick={this.modify}
                >정보 변경
                </MyPageButton> */}
                {/* <div className="withdrawal-link">
                    <Link to='/withdrawal'>
                        <Withdrawal>회원 탈퇴</Withdrawal>
                    </Link>
                </div> */}
            </MyPageBox>
            <div className="mainpage-link">
                <Link to='/users/main'>
                    <BackToMain>메인 페이지로 돌아가기</BackToMain>
                </Link>
            </div>
        </MyPageWrapper>
        );
    };
}

export default MyPage;

// export default function MyPage({ token, isSignnedIn }) {
//     const [myPageInfo, setMyPageInfo] = useState({email: 'isSignnedIn.userInfo.email', newPassword: '', confirmNewPassword: '', newUserName: 'isSignnedIn.userInfo.userName', check: false, errorMessage: '' })
//     const [myPageOK, setMyPageOK] = useState({message: '잠시 후에 다시 시도해 주세요!😭'})
    
//     const onNewPasswordHandler = (e) => {
//         setMyPageInfo({newPassword: e.target.value});
//     };
//     const onConfirmNewPasswordHandler = (e) => {
//         if (myPageInfo.confirmNewPassword === myPageInfo.newPassword) {
//             setMyPageInfo({errorMessage: '확인되었습니다!🥳', check: true});
//             setMyPageInfo({confirmNewPassword: e.target.value});
//         } else {
//             setMyPageInfo({errorMessag: '다시 확인해주세요!😰', check: false});
//         }
//     };
//     const onNewUserNameHandler = (e) => {
//         setMyPageInfo({newUserName: e.target.value});
//     };
    
//     // onClick에 넣고, clearForm 기능과 함께 사용하기
//     const myPageOKHandler = () => {
//         if (myPageInfo.newPassword.length > 4) {
//             const res = axios.post('http://devmap.ml/users/memberinfo', {
//                 myPageInfo
//             })
//             .then((res) => {
//                 if (res.status === 200) {
//                     alert('정보 변경이 정상적으로 완료되었습니다!🤩')
//                     window.location('http://devmap.ml/users/memberinfo') // 서버 엔드포인트 확인
//                     // 클라이언트 엔드포인트, 서버 엔드포인트 같아도 괜찮은가?
//                     // 이렇게 하면 리다이렉트되어 clearForm 기능이 구현이 될까?
//                 }
//             })
//             .catch((err) => {
//                 alert(`${myPageOK.message}`)
//             })
//         }
//     }

    // handleResponseSuccess와 따져보기

    // useEffect(() => {
    //     getEmail();
    // }, [])

    // 로그인이 안되어있는 상황이라, email 값도 불러오지 못하고 입력도 안됨
    // 현재 서버와 통신이 제대로 안되는 상태

    // const getEmail = async () => {
    //     const authedAxios = axios.create(
    //         { headers: { 
    //             Authorization: `${token}`
    //             // 로그인 이후 모든 소통에서 헤더에 토큰 넣어 보낸다
    //         }}
    //     );

    //     const res = await authedAxios.get(`http://devmap.ml/users/memberinfo`)
    //     console.log('MyPage Info', res)
    //     setMyPageInfo({email: res.data.email});
    // };