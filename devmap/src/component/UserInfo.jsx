// import React, { useState } from 'react';

// import SignUpModal from './SignUpModal';
// import MyPage from '../pages/MyPage';

// export default function userInfo() {
//     const [userInfo, setUserInfo] = useState({token: '', id: null});

//     const updateUserInfo = () => {
//         setUserInfo({token: token, id: user.id});
//         console.log('id', id);
//     };

//     return (
//         <div>
//             <SignUpModal updateUserInfo={updateUserInfo} />
//             <MyPage userInfo={userInfo} />
//         </div>
//     )
// }

// 상위 컴포넌트를 하나만 둘 수 있나보다
// 여기서고 App에서도 SignUpModal에 props를 내려줄 수가 없다