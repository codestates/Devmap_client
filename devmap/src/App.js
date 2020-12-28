import React, { useState , useEffect} from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import Top from './pages/Top';
import Background from './pages/Background';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import RoadMapFront from './pages/RoadMapFront';
import RoadMapBack from './pages/RoadMapBack';
import SignUpModal from './component/SignUpModal';

function App() {
  const [isSignnedIn, setIsSignnedIn] = useState({isSignIn: false, userInfo: null});

  const handleResponseSuccess = () => { // 로그인 상태만 바꾸어 줌
    // await axios.get('http://devmap.ml/users/signin').then((res) => {
    //   let count = 0;
    //     count++;
    //   if (count > 1) {
      setIsSignnedIn({isSignIn: true}); // userInfo: res.data // userInfo 상태 생성하기?
    //   } else {
    //     return ;
    //   }
    //     console.log(isSignnedIn.userInfo);
    // },);
  };

  const handleSignOut = () => {
    // axios
    //   .post('http://devmap.ml/users/signout', {
    //     token: null
    //   })
    //   .then(() => {
      setIsSignnedIn({isSignIn: false});
      alert('정상적으로 로그아웃 되었습니다!👋')
      // window.location.assign('http://devmap.ml/users/main/')
    // })
  };

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

  const All_style = styled.div`
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

  const Body_style = styled.body`
    position: relative;
    top: 30px;
  `;

  // signup, signin 주소 필요하다(모달이 뜰 때 배경이 사라지지 않게 하려면)
  
  return (
    <All_style>
      <header>
        <Top isSignnedIn={isSignnedIn} handleResponseSuccess={handleResponseSuccess} handleSignOut={handleSignOut}/>
      </header>
      <Body_style>
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
              <MyPage isSignnedIn={isSignnedIn} />
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
      </Body_style>
    </All_style>
  );
}

// signIn, signUp은 접속 엔드포인트 주지 않음
// 로드맵은 한 곳에서 경우에 따라 렌더?

export default App;
