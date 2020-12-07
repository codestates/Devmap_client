import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './module';
// Provider 컴포넌트를 통해 리액트 프로젝트에 리덕스 적용

const store = createStore(rootReducer); // 스토어를 만듭니다.
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>,
  </Provider>,
  
  document.getElementById('root')
);

reportWebVitals();