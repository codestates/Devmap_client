import { combineReducers } from 'redux';
import counter from './counter';
//여러 개의 리듀서 를 만들 수 있으므로 루트 리듀서를 만들어준다.

const rootReducer = combineReducers({
    counter
});

export default rootReducer;

//스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용 할 때 필요
export type RootState = ReturnType<typeof rootReducer>;