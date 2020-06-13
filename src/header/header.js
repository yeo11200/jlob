import React from 'react';
import { Router, Link} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            aa : 1,
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
    render(){
        return(
            <div>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                        {/** 
                         * exact를 사용하면 /일떄만 나오고 나머지는 안나온다. 
                         * 비슷한 url에 정확하게를 원한다면 exact를 사용한다.
                         */}
                        <Link exact to="/zzzz1">zzzz</Link>
                    </li>
                    <li className="list-group-item">
                        {/**
                         * Link는 URL를 넣을 때 사용한다.
                         */}
                        <Link exact to="/about/aaaa">이력서</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/blog">Blog 정보</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/zzzz4?:namea">zzzz</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;