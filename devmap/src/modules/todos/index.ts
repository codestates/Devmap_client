export { default } from './reducer'; // reducer 를 불러와서 default로 내보내겠다는 의미
export * from './actions'; // 모든 액션 생성함수들을 불러와서 같은 이름들로 내보내겠다는 의미
export * from './types'; // 모든 타입들을 불러와서 같은 이름들로 내보내겠다는 의미
// import {
//     createAction,
//     ActionType,
//     createReducer
//   } from 'typesafe-actions';
// //액션 type
// // const ADD_TODO = 'todos/ADD_TODO';// as const;
// // const TOGGLE_TODO = 'todos/TOGGLE_TODO';// as const;
// // const REMOVE_TODO = 'todos/REMOVE_TODO';// as const;

// // //액션 생성 함수
// // // export const addTodo = (text: string) => ({
// // //     type: ADD_TODO,
// // //     payload: text  
// // // });

// // // export const toggleTodo = (id: number) => ({
// // //     type: TOGGLE_TODO,
// // //     payload: id
// // // });

// // // export const removeTodo =(id: number) =>({
// // //     type: REMOVE_TODO,
// // //     payload: id
// // // });

// // export const addTodo = createAction(ADD_TODO)<string>();
// // export const toggleTodo = createAction(TOGGLE_TODO)<number>();
// // export const removeTodo = createAction(REMOVE_TODO)<number>();




// // // 액션들의 타입 스크립트 타입 준비
// // // type TodoAction =
// // // | ReturnType<typeof addTodo>
// // // | ReturnType<typeof toggleTodo>
// // // | ReturnType<typeof removeTodo>;

// // const actions = { addTodo, toggleTodo, removeTodo };
// // type TodosAction = ActionType<typeof actions>;

// // //-----------------------------//
// // // 상태를 위한 타입 및 초기 상태 선언 
// // export type Todo  ={
// //     id: number,
// //     text: string,
// //     done: boolean;
// // };
// //굳이 바로  Todo 를 지정하지 않은 이유 는 객체를 배열로 묶을려고
// //type TodosState = Todo[];

// // 초깃값 설정 
// const initialState : TodosState = [
//     { id: 1, text: '타입스크립트 배우기', done: true},
//     { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true},
//     { id: 3, text: '투두리스트 만들기', done: false}
// ];

// //리듀서 구현
// /** 
//  * object map형태로 구현하는 과정에서 action 객체를 구조 분해 
//  * (Object Destructuring) 함으로써 
//  * payload의 이름을 원하는 이름으로 바꿔줄 수 있습니다. 
//  * 이를 통하여 업데이터 함수의 가독성을 더욱 높일 수 있죠.
//  * **/
// const todos = createReducer<TodosState, TodosAction>(initialState, {
//     [ADD_TODO]: (state, { payload: text }) =>
//       state.concat({
//         id: Math.max(...state.map(todo => todo.id)) + 1,
//         text,
//         done: false
//       }),
//     [TOGGLE_TODO]: (state, { payload: id }) =>
//       state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
//     [REMOVE_TODO]: (state, { payload: id }) =>
//       state.filter(todo => todo.id !== id)
//   });

// // function todos(state: TodosState = initialState, action: TodoAction): TodosState {
// //     switch (action.type) {
// //         case ADD_TODO: 
// //         //새 항목을 만들 때 마다 고유 ID를 설정하기 위하여 현재 상태의 모든 항목들의 id 를 체크하고 그 중 가장 큰 값을 사용하도록 처리하였습니다.
// //             const nextId = Math.max(...state.map(todo => todo.id)) +1;
// //             //읽기전용 이라 concat
// //             return state.concat({
// //                 id: nextId,
// //                 text: action.payload,
// //                 done: false
// //             });
// //         case TOGGLE_TODO:
// //             return state.map(todo => 
// //                 todo.id === action.payload ? { ...todo, done: !todo.done } : todo
// //                 );
// //         case REMOVE_TODO:
// //             return state.filter(todo => todo.id !== action.payload);
// //         default:
// //             return state;                        
// //     }
// // }

// export default todos;