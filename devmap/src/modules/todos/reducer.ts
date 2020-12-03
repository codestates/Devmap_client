import { createReducer } from "typesafe-actions";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodosAction, TodosState } from "./types";

// 초깃값 설정 
const initialState : TodosState = [
    { id: 1, text: '타입스크립트 배우기', done: true},
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true},
    { id: 3, text: '투두리스트 만들기', done: false}
];

//리듀서 구현
/** 
 * object map형태로 구현하는 과정에서 action 객체를 구조 분해 
 * (Object Destructuring) 함으로써 
 * payload의 이름을 원하는 이름으로 바꿔줄 수 있습니다. 
 * 이를 통하여 업데이터 함수의 가독성을 더욱 높일 수 있죠.
 * **/
const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, { payload: text }) =>
      state.concat({
        id: Math.max(...state.map(todo => todo.id)) + 1,
        text,
        done: false
      }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
      state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, { payload: id }) =>
      state.filter(todo => todo.id !== id)
  });

// function todos(state: TodosState = initialState, action: TodoAction): TodosState {
//     switch (action.type) {
//         case ADD_TODO: 
//         //새 항목을 만들 때 마다 고유 ID를 설정하기 위하여 현재 상태의 모든 항목들의 id 를 체크하고 그 중 가장 큰 값을 사용하도록 처리하였습니다.
//             const nextId = Math.max(...state.map(todo => todo.id)) +1;
//             //읽기전용 이라 concat
//             return state.concat({
//                 id: nextId,
//                 text: action.payload,
//                 done: false
//             });
//         case TOGGLE_TODO:
//             return state.map(todo => 
//                 todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//                 );
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id !== action.payload);
//         default:
//             return state;                        
//     }
// }

export default todos;