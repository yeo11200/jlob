import React from 'react';
import { Router, Link} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            aa : 1,
        }
    }

    render(){
        return(
            <div>
                <ul>
                    <li>
                        {/** 
                         * exact를 사용하면 /일떄만 나오고 나머지는 안나온다. 
                         * 비슷한 url에 정확하게를 원한다면 exact를 사용한다.
                         */}
                        <Link exact to="/zzzz1">zzzz</Link>
                    </li>
                    <li>
                        {/**
                         * Link는 URL를 넣을 때 사용한다.
                         */}
                        <Link to="/zzzz2">zzzz</Link>
                    </li>
                    <li>
                        <Link to="/zzzz3">zzzz</Link>
                    </li>
                    <li>
                        <Link to="/zzzz4?:namea">zzzz</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;