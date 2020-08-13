import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Route,
  Router,
  Link
} from 'react-router-dom';

import Header from './header/header';

import Moduel from './content/moduel';
function App() {
  return (
    <Route className="container" basename={process.env.PUBLIC_URL}>
      <Header></Header>
      <Moduel></Moduel>
    </Route>
  );
}

export default App;
