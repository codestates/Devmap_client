//각 할 일 항목에 대한 정보를 보여주는 컴포넌트
import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';
import { isPropertySignature } from 'typescript';
type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  // TODO: 커스텀 Hook 사용해서 onToggle / onRemove 구현
  const { onToggle, onRemove } = useTodoActions(todo.id);
  
  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>{todo.text}</span>
      <span className="remove" onClick={onRemove}>(X)</span>
    </li>
  );
}

export default TodoItem;