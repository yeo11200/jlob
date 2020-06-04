import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Route,
  Router,
  Link
} from 'react-router-dom';

import Header from './header/header';
function App() {
  return (
    <Route>
      <Header></Header>
    </Route>
  );
}

export default App;
