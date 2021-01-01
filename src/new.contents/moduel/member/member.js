import React from 'react';
import Login from './login';
import Join from './join';

class Member extends React.Component{

    constructor(props){

        super(props);

        console.log(props);

        this.state = {
            popupState : 'login',
        }
    }

    clickRadioState = function(state){

        console.log(state);

        this.setState({
            popupState : state,
        })

    }

    clickTest = (test) => {
        console.log(test);
    }

    render(){

        const { popupState } = this.state;

        const { loginState, loginPopup } = this.props;

        return(
            <div>
                <div id="login-modal" className={ loginState == 'Y' ? 'on' : ''}>
                    <div class="modal-dialog">

                        <span className="close" onClick={() => loginPopup('N')}> &times;</span>
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
                            <div className={ (popupState == 'login' ? 'on' : '') + " state"}>
                                <Login changeState={ this.clickRadioState } loginState= { loginState }></Login>
                            </div>
                            <div className={ (popupState == 'join' ? 'on' : '') + " state"}>
                                <Join></Join>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(loginState == 'Y' ? 'on' : '') + ' dimmed'} onClick={() => loginPopup('N')}></div>
            </div>
        )
    }
}

export default Member