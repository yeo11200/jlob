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

    /**
     * function, array function의 차이점
     *  props에서 setState를 시켜줄 경우 undefinded 발생 
     *  function은 바인딩을 시켜줘야한다.
     * 하지만 array function은 자동적으로 바인딩을 시켜주기 때문에 에러가 발생하지않는다.
     * 
     * bind를 시켜주는 방법
     * this.clickRadioState = this.clickRadioState.bind(this); 선언후 작성
     */
    clickRadioState = state => {

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

        let style = {
            login : {
                label : {
                    fontWeight: '600',
                    marginRight: '20px'
                }
            }
        }


        return(
            <div>
                <div id="login-modal" className={ (loginState == 'Y' ? 'on' : '') }>
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
                                <label className="select-radio" for="login">로그인</label>

                                <input 
                                    type="radio" 
                                    id="join" 
                                    name="radio" 
                                    onClick={ () => this.clickRadioState('join')}
                                    checked={ popupState == 'join' ? 'checked' : ''} />
                                <label className="select-radio" for="join">회원가입</label>
                            </div>
                            <div className={ (popupState == 'login' ? 'on' : '') + " state"}>
                                <Login clickRadioState={ this.clickRadioState } loginState= { loginState } styleLogin={style.login}></Login>
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