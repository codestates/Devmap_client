import React from 'react';
import Button from './Button'
import EccessToLogin from './EccessToLogin';
//헤더 태그 안에 들어가 컴포넌트 top  이안에 로그인 버튼 이있고 그걸 눌렀을때 EccessTOLogin.jsx 모달이 들어가야한다. 



const Top = () => {
    return (
       <div>
           <EccessToLogin></EccessToLogin>
           <hr></hr>
       </div>
        
       
    
           
        
        
    );
}
export default Top;