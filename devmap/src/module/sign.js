

export const sign = {
    user: "",
    sign: false,
};

//액션 타입 정의
 const SIGN = 'SIGN';


//액션 크리에이터
export function signIn(){
    return {
        type: SIGN,
        sign   
    }
}
//리듀서
function reducer(state = sign, action){
    switch (action.type){
        case SIGN :
            return {
                user : action.user ,
                sign : !state.sign
            }
        default:
            return state;                        
    };
};


  //store.dispatch(sign({id:1}));

  export default reducer;