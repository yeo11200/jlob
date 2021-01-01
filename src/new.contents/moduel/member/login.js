import React from 'react'
import axios from 'axios'

import * as Common from '../../../common'
import * as Fun from '../../../fun'

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            user : '',
            pass : '',
        }


        console.log(props);

    }

    componentDidMount(){
        console.log(1);
    }

    changeLoginValue = (event) => {

        let value = event.currentTarget;

        /**
         * event를 parameter로 받고
         * event.name과 event.value로 사용을 해준다.
         * state와 tag의 name을 같게 해주면 input에 대한 상태관리가 편해진다.
         */
        this.setState({
            [value.name]: value.value
        })
    }

    componentWillReceiveProps(){
        console.log(this.props);

        if(this.props.loginState === 'N'){
            this.setState({
                user: '',
                pass: ''
            })
        }
    }

    submitClickLogin = () => {

        const { user, pass } = this.state;

        console.log(Common.REG_DATA.member_id.test(user));

        if(pass.length < 8 || pass.length > 15){
            Fun.toastUi('비밀번호를 8 ~ 15자 사이로 입력해주세요.');
        }

        
        /**
         * 입력받은 회원에 대한 조건 
         * email 형식이 아닐 경우 조건 변경
         */
        if(Common.REG_DATA.member_id.test(user) === false){
            Fun.toastUi('아이디 형식이 다릅니다.');
        }
    }

    render(){

        const { changeState, loginState } = this.props;

        const { user, pass } = this.state;
        console.log(loginState);


        return(
            <div class="login">
                <input type="text" name="user" placeholder="Username" onChange={ (event) => this.changeLoginValue(event) } value={ user } />
                <input type="password" name="pass" placeholder="Password"  onChange={ (event) => this.changeLoginValue(event) }  value={ pass } />
                <input type="button" name="login" class="login loginmodal-submit" value="Login" onClick={ () => this.submitClickLogin() }/>
                
            
                <div class="login-help">
                    <a href="" onClick={ () => changeState('join') }>Register</a> - <a href="#">Forgot Password</a>
                </div>
            </div>
            
        )
    }

    componentWillUnmount(){
        console.log(111);
    }
}

export default Login;