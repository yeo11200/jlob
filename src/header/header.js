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
                <Link>zzzz</Link>
            </div>
        )
    }
}

export default Header;