import React from 'react'
import axios from 'axios'

import * as Common from '../../../common'
import * as Fun from '../../../fun'
import { Input, Box, Button } from '@material-ui/core';
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

    /**
     * 부모로 부터 데이터를 받을 경우 
     * props가 update가 될 경우 이벤트가 발생한다.
     */
    componentWillReceiveProps(){
        console.log(this.props);

        if(this.props.loginState === 'N'){
            this.setState({
                user: '',
                pass: '',
                loginErr : ''
            })
        }
    }

    submitClickLogin = () => {

        const { user, pass } = this.state;


        if(pass.length < 8 || pass.length > 15){
            Fun.toastUi('비밀번호를 8 ~ 15자 사이로 입력해주세요.');
            return;
        }

        if(Common.REG_DATA.memeber_pass.test(pass) === false){
            Fun.toastUi('숫자 영문 특수문자 포함한 8 ~ 15자를 입력해 주세요.');
            return;
        }
        
        /**
         * 입력받은 회원에 대한 조건 
         * email 형식이 아닐 경우 조건 변경
         */
        if(Common.REG_DATA.member_id.test(user) === false){
            Fun.toastUi('아이디 형식이 다릅니다.');
            return;
        }


        let login = {
            id : user,
            pw : pass
        }

        axios.post(Common.API_SERVER+'/users/login', login).then(res => {

            let items = res.data;

            let resCode = items.status;

            console.log(items);

            if(resCode === 200){

            }else{
                let resMsg = items.message;

                Fun.toastUi(resMsg);
            }
        }).catch(res => {
            console.log(res);
        });
    }

    keyPressLogin = (event) => {
        let keyCode = event.keyCode;
        if(keyCode === '13'){
            this.changeLoginValue();
        }
    }

    render(){

        const { clickRadioState, loginState } = this.props;
        const { user, pass, loginErr} = this.state;

        let style = {
            div : {
                marginTop:'10px', textAlign:'center'
            },
            span : {
                width:'20%', textAlign:'left'
            }
        }
        return(
            <div class="login">
                <div style={style.div}>
                    <Box 
                        component="span" 
                        color="text.primary" 
                        style={ style.span }> Id   : 
                    </Box>
                    <Input 
                        type="text" 
                        name="user" 
                        id="user" 
                        placeholder="UserId" 
                        onChange={ (event) => this.changeLoginValue(event) } 
                        value={ user } 
                        onKeyDown={ (event) => this.keyPressLogin(event) } 
                        style={ {marginLeft:'25px '} }/>
                </div>
                <div style={style.div}>
                    <Box 
                        component="span" 
                        color="text.primary" 
                        style={ style.span }> Pass : </Box>
                    <Input type="password" name="pass" placeholder="Password"  onChange={ (event) => this.changeLoginValue(event) }  value={ pass } onKeyDown={ (event) => this.keyPressLogin(event) }/>
                </div>
                <div className="member-error">
                    { (loginErr !== '') ? <label>{ loginErr }</label> : ''}
                </div>
                <div style={style.div}>
                    <Button variant="outlined" color="secondary" onClick={ () => this.submitClickLogin() }>
                        Login
                    </Button>
                </div>
                
            
                <div class="login-help" style={style.div}>
                    <div class="login-link">
                        <a onClick={ () => clickRadioState('join') } name="join">Register</a>
                        <a href="#" name="forgot">Forgot Password</a>
                        <a href="#" name="forgot">Forgot Id</a> 
                    </div>
                        
                </div>
            </div>
            
        )
    }

}

export default Login;