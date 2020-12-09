import logo from './logo.svg';
//import './App.css';
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import Top from './pages/Top'
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

function App() {
  return (
    <div className="App">
      <Circle />
      <Top></Top>
    </div>
  );
}

export default App;
