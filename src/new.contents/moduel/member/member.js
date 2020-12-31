import React from 'react';
import Login from './login';
import Join from './join';

class Member extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            popupState : 'login'
        }
    }

    clickRadioState = function(state){

        console.log(state);

        this.setState({
            popupState : state,
        })

    }

    render(){

        const { popupState } = this.state;

        return(
            <div>
                login popup
                <div id="login-modal">
                    <div class="modal-dialog">
                        <div class="loginmodal-container">
                            <h1>Login to Your Account</h1><br />
                            
                            <div class="radio-tab">
                                <input 
                                    type="radio" 
                                    id="login" 
                                    name="radio" 
                                    onClick={ () => this.clickRadioState('login')}
                                    checked={ popupState == 'login' ? 'checked' : ''}
                                    />
                                <label for="login">로그인</label>

                                <input 
                                    type="radio" 
                                    id="join" 
                                    name="radio" 
                                    onClick={ () => this.clickRadioState('join')}
                                    checked={ popupState == 'join' ? 'checked' : ''} />
                                <label for="join">회원가입</label>
                            </div>
                            <div>
                                <Login></Login>
                            </div>
                            <div>
                                <Join></Join>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member