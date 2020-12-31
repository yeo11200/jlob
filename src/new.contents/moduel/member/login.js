import React from 'react';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id : '',
            pw : '',
        }
    }

    componentDidMount(){
        console.log(1);
    }

    render(){

        return(
            <div>
                <input type="text" name="user" placeholder="Username" />
                <input type="password" name="pass" placeholder="Password" />
                <input type="submit" name="login" class="login loginmodal-submit" value="Login" />
                
            
                <div class="login-help">
                    <a href="#">Register</a> - <a href="#">Forgot Password</a>
                </div>
            </div>
        )
    }
}

export default Login;