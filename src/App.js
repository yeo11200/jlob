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


class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      'loginYn' : 'N'
    }
  }

  /**
   * 로그인팝업을 띄울 때 사용할 함수
   */
  loginPopup = (state) => {
    this.setState({
        'loginYn' : state
    })
  }

  render(){
    return (
      // basename={process.env.PUBLIC_URL} : 기본적인 경로는 유지 됨
      <Route className="container" basename={process.env.PUBLIC_URL} >
        <div id="toast"></div>
        <Header loginPopup={this.loginPopup}></Header>
        <Index loginState={this.state.loginYn} loginPopup={this.loginPopup}></Index>
      </Route>
    );
  }
  
}

export default App;
