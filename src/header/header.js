import React from 'react';
import { Router, Link} from 'react-router-dom';
import '../css/common.css';

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            aa : 1,
            classNamePush : null,
            // firebaseConfig = {
            //     apiKey: "AIzaSyAzdEI_b6zQ1DcmMsXj1qglZgtt3jEWlKk",
            //     authDomain: "todolist-f3d53.firebaseapp.com",
            //     databaseURL: "https://todolist-f3d53.firebaseio.com",
            //     projectId: "todolist-f3d53",
            //     storageBucket: "todolist-f3d53.appspot.com",
            //     messagingSenderId: "963413121103",
            //     appId: "1:963413121103:web:54c9fe1ed174adb119f23a",
            //     measurementId: "G-00L2B594G4"
            //   },
        }
    }

    headerClick = function(e) {
        console.log(e);
        this.setState({classNamePush : e});
    }

    render(){
        return(
            <div>
                <ul className="header-ui">
                    <li className={this.state.classNamePush == 'zzzz' ? 'on' : ''}>
                        {/** 
                         * exact를 사용하면 /일떄만 나오고 나머지는 안나온다. 
                         * 비슷한 url에 정확하게를 원한다면 exact를 사용한다.
                         */}
                        <Link exact to="/zzzz1" onClick={(e) => {this.headerClick ('zzzz')}}>zzzz</Link>
                    </li>
                    <li className={this.state.classNamePush == 'about' ? 'on' : ''}>
                        {/**
                         * Link는 URL를 넣을 때 사용한다.
                         */}
                        <Link exact to="/about" onClick={(e) => {this.headerClick ('about')}}>이력서</Link>
                    </li>
                    <li className={this.state.classNamePush == 'blog' ? 'on' : ''}>
                        <Link to="/blog" onClick={(e) => {this.headerClick ('blog')}}>Blog 정보</Link>
                    </li>
                    <li className={this.state.classNamePush == 'schedule' ? 'on' : ''}>
                        <Link to="/schedule" onClick={(e) => {this.headerClick ('schedule')}}>scedlue</Link>
                    </li>

                    <li>
                        <Link to="/chat" onClick={(e) => {this.headerClick ('chat')}} randomId={ramdomId}>chat</Link>
                    </li>

                    <li>
                         <Link to="/login">로그인</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;