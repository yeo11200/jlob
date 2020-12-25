import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Route,
  Router,
  Link 
} from 'react-router-dom';
 
import Header from './new.contents/_includes/header';

import Index from './new.contents/moduel/index';

import '../src/css/common.css?v=2020';


function App() {
  
  return (
    // basename={process.env.PUBLIC_URL} : 기본적인 경로는 유지 됨
    <Route className="container" basename={process.env.PUBLIC_URL} >
      <div id="toast"></div>
      <Header></Header>
      <Index></Index>
    </Route>
  );
}

export default App;
