import React from 'react';
//import { Todo } from '../modules/todos';
import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useTodos(); // useTodos() => [{…}, {…}, {…}] 
  console.log(todos)//[{…}, {…}, {…}] 처음 리듀서 가 실행이 되면 state: TodosState = initialState 이므로 
  // 기본 인  state 가 출력이된다. state는 initialState 의 값을 가지고 있다. 
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;