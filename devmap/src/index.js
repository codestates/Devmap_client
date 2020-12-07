import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer); // 스토어 생성

// Provider 컴포넌트를 통해 리액트 프로젝트에 리덕스 적용
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();