import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import styled from 'styled-components';

import './App.css';
import Top from './pages/Top';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import RoadMapFront from './pages/RoadMapFront';
import RoadMapBack from './pages/RoadMapBack';

const All = styled.div`
    // 스크롤바(필요시 수정하여 구현)
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #FED0D3;
    }
    ::-webkit-scrollbar-track {
      background-color: grey;
    }
`;

const Body = styled.body`
    position: relative;
    top: 30px;
`;

function App() {
  const [isSignnedIn, setIsSignnedIn] = useState({isSignIn: false, userInfo: null});
  // const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);
  const [idNumber, setIdNumber] = useState(null);

  const handleResponseSuccess = (data) => {
    // await axios.get('http://devmap.ml/users/signin').then((res) => {
    //   let count = 0;
    //     count++;
    //   if (count > 1) {
      // await axios
      //   .post('http://devmap.ml/users/signin/')
      //   .then(res => {
      //     console.log('res'. res);
      //     user = res.userInfo;
      //     token = res.token;
      //   })
        setIsSignnedIn({isSignIn: true});
        // setUserInfo(user);
        setToken(data.token);
        // console.log('token status', token);
      //   } else {
    //     return ;
    //   }
    //     console.log(isSignnedIn.userInfo);
    // },);
  };

  console.log('로그인 상태, App', isSignnedIn.isSignIn); // true // false(signout 시)
  console.log('App token status', token); // 받아온다!!!! // null(signout 시)

  const handleSignOut = () => {
    // await axios
    //   .post('http://devmap.ml/users/signout/')
    //   .then(() => {
        setIsSignnedIn({isSignIn: false});
        setToken(null);
        alert('정상적으로 로그아웃 되었습니다!👋');
        window.location.replace('http://localhost:3000/users/main/');
      // })
  };

  const getIdNumber = (data) => {
    setIdNumber(data.user.id)
  };

  console.log('회원 가입시 서버로부터 받은 id number', idNumber);

  // useEffect(() => { // componentDidMount()
  //   handleResponseSuccess();
  // }, [isSignnedIn.isSignIn]) // 상태 바뀔 때에만 작동하도록
  // 이걸 실행하면 무조건 상태가 로그인이 된다
  // 카운트로 바꾸어주긴 했지만, 이게 왜 useEffect로 실행되어야 하는지는 의문, 상의해 볼 것
  // 마이 페이지용!

  // 인증 과정, 토큰을 헤더에 담아 post 보내기 등 - 로그인에서 토큰 받아, 이후 요청시마다 헤더에 담아주는 것으로 구현하는게 맞지..?
  // Full IM 23 권은정  6:32 PM
  // 아마 클라이언트에서는
  // 6:32
  // 로그인 이후 그 로드맵에서 뭐 요청할 때나 마이페이지 정보 수정할 때
  // 6:32
  // 이럴때 헤더에 넣어서 보내주는걸로 짜려고 했어요
  // 6:33
  // 저희가 뭐 인증관련 생성을 하거나 이런거는 일절 없고
  // 6:33
  // 받은 토큰을 로그인 완료된 후에 통신할 때마다 헤더에 넣어 보내는 그 정도로만

  // 위와는 별개로 signup, signin post 왜 안되는지 살펴볼 것, 클라이언트 문제?
  // CORS 해결하여 서버에서는 200 뜬다고 하는데, 클라이언트에서는 아직 못 받아옴

  // signup, signin 주소 필요하다(모달이 뜰 때 배경이 사라지지 않게 하려면)
  
  return (
    <All>
      <header>
        <Top isSignnedIn={isSignnedIn} handleResponseSuccess={handleResponseSuccess} handleSignOut={handleSignOut} getIdNumber={getIdNumber} />
      </header>
      <Body>
        <Switch>
          <Route
            exact path="/"
            component={Main}
            // render를 쓰면 계속 에러가 났었는데 () 뒤에 {}를 계속 실수로 붙여주었기 때문
          />
          <Route
            exact path="/users/signup"
            component={Main}
          />
          <Route
            exact path="/users/signin"
            component={Main}
          />
          <Route
            path="/users/main"
            render={() => 
              <Main/>
            }
          />
          <Route
            path="/users/memberinfo"
            render={() => 
              <MyPage isSignnedIn={isSignnedIn} token={token} idNumber={idNumber} />
            }
          />
          <Route
            path="/users/totalMap-front"
            render={() => 
              <RoadMapFront isSignnedIn={isSignnedIn}/>
            }
          />
          <Route
            path="/users/totalMap-back"
            render={() => 
              <RoadMapBack isSignnedIn={isSignnedIn}/>
            }
          />
        </Switch>
      </Body>
    </All>
  );
}

// signIn, signUp은 접속 엔드포인트 주지 않음
// 로드맵은 한 곳에서 경우에 따라 렌더?

export default App;
