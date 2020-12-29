import React from 'react';


class Login extends React.Component{

    constructor(props){

        super(props);

    }

    render(){
        return(
            <div>
                login popup
                <div id="login-modal">
                    <div class="modal-dialog">
                        <div class="loginmodal-container">
                            <h1>Login to Your Account</h1><br />
                            
                            <div class="radio-tab">
                                <input type="radio" id="login"></input>
                                <label for="login">로그인</label>

                                <input type="radio" id="submit"></input>
                                <label for="submit">회원가입</label>
                            </div>
                            <input type="text" name="user" placeholder="Username" />
                            <input type="password" name="pass" placeholder="Password" />
                            <input type="submit" name="login" class="login loginmodal-submit" value="Login" />
                            
                            
                            <div class="login-help">
                                <a href="#">Register</a> - <a href="#">Forgot Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login