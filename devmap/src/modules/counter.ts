
//모듈 작업
import {
    createAction,
    ActionType,
    createReducer
  } from 'typesafe-actions';
// 액션의 type 을 선언 할 때 우리가 기존에 as const 를 붙여줬었는데, typesafe-actions를 사용하시면 붙일 필요가 없습니다. as const 를 지워주세요.
const INCREASE = 'counter/INCREASE'; //as const;
const DECREASE = 'counter/DECREASE'; //as const;
const INCREASE_BY = 'counter/INCREASE_BY';// as const;

// const k = 'counter'  //여기서는 리터럴
// export const ka = () => ({type: k}); //여기서 k 는 스트링



//상태에 어떠한 변화가 필요하면 액션 이란것 이 발생
//액션객체는 type 필드를 반드시 가져야한다.
//type 은 액션의 이름 나머지 값들은 
//나중에 상태를 업데이트를 할 떄 참고해야 할 값
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
//액션 생성 함수 : 액션 객체를 만들어 주는 함수
export const increaseBy = createAction(INCREASE_BY)<number>();
//액션의 페이로드로 들어가는 값은 Generic을 사용하여 정해줄 수 있으며, 만약 액션의 페이로드에 아무것도 필요 없다면 Generic을 생략하시면 됩니다.


//어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데
//매번 액션 객체를 직접 작성하기 번거로울 수 있고,
//과정에서 실수 나 정보를 놓칠 수도 있다 이러한 일을 방지하기 위해 
//함수로 만들어서 관리한다.

//액션 객체들에 대한 type준비
//ReturnType 은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입

const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>;


// type 의 타입이 무조건 string 으로 처리되어버립니다.
// 그렇게 되면 나중에 리듀서를 제대로 구현 할 수가 없어요



//상태의 타입과 상태의 초깃값 선언
interface CounterState  {
    count: number;
}

const initialState : CounterState ={
    count: 0
};

//리듀서 : 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은
//액션 객체를 파라미터로 받아 오고 두 값을 참고하여 새로운 상태를 만들어서
//반환한다.

// Generic 으로 '상태의 타입'과 '액션들의 타입'을 넣어주어야 합니다
const counter =createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count : state.count +1}),
    [DECREASE]: state => ({ count : state.count -1}),
    [INCREASE_BY]: (state,action) => ({count: state.count + action.payload})
});

// function counter(state: CounterState = initialState, action: CounterAction){
//     console.log('나왜실행?')
//     switch (action.type){
//         case INCREASE:
//             return {count: state.count + 1};
//         case DECREASE:
//             return {count: state.count - 1};
//         case INCREASE_BY:
//             return {count: state.count + action.payload};
//         default:
//             return state;            
//     }
// }

export default counter;