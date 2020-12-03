import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useTodos(){
    //useSelector(파라미터 가 Rootstate 의 여러개들중 todos를 선택) 실행시 todos의 담긴 리듀서 가 실행 하여 그에 맞는 값을 반환
    //const result: any = useSelector(selector: Function, equalityFn?: Function)
    const todos = useSelector((state : RootState) =>  state.todos);    
    return todos;
}