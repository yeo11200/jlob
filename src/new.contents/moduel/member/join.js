import React from 'react'
import axios from 'axios'

import * as Common from '../../../common'
import * as Fun from '../../../fun'
import { Input, Box, Button, Select, MenuItem } from '@material-ui/core';

class Join extends React.Component{

    constructor(props){

        super(props);

        this.state={
            'user' : '',
            'userErr' : {
                'status' : '',
                'message' : ''
            },
            'pass' : '',
            'passConfirm' : '',
            'passErr' : '',
            'name' : '',
            'nameErr' : '',
            'nickname' : '',
            'nickErr' : '',
            'emailArr' : [
                {'email' : 'gmail.com', 'value' : 'google'}, 
                {'email' : 'naver.com', 'value' : 'naver'},
                {'email' : 'nate.com', 'value' : 'nate'}, 
                {'email' : 'hanmail.net', 'value' : 'daum'},
                {'email' : '', 'value' : '직접입력'}
            ],
            'email' : {
                'email' : 'naver.com',
                'type' : 'naver'
            }
        }

        this.submitClickJoin = this.submitClickJoin.bind(this);

        this.overlapIdCheck = this.overlapIdCheck.bind(this);

        this.changeJoinValue = this.changeJoinValue.bind(this);
    }

    componentDidMount(){
        console.log(1);
    }

    componentWillReceiveProps(){
        if(this.props.loginState === 'N'){
            this.setState({
                'user' : '',
                'userErr' : {
                    'status' : '',
                    'message' : ''
                },
                'pass' : '',
                'passConfirm' : '',
                'passErr' : '',
                'name' : '',
                'nameErr' : '',
                'nickname' : '',
                'nickErr' : '',
                'id' : '',
                'emailArr' : [
                    {'email' : 'gmail.com', 'value' : 'google'}, 
                    {'email' : 'naver.com', 'value' : 'naver'},
                    {'email' : 'nate.com', 'value' : 'nate'}, 
                    {'email' : 'hanmail.net', 'value' : 'daum'},
                    {'email' : '', 'value' : '직접입력'}
                ],
                'email' : {
                    'email' : 'naver.com',
                    'type' : 'naver'
                }
            })
        }

    }

    changeJoinValue = (event) => {

        let value = event.currentTarget;

        this.setState = {
            [value.name]: value.value
        }
    }

    submitClickJoin = () => {

        const { id, userErr, pass, passConfirm, name, nickname, user} = this.state;
        
        if(nickname.length < 6 || nickname.length > 12){
            Fun.toastUi('닉네임을 6 ~ 12자 사이로 입력해주세요.');
            return;
        }

        if(name.length < 4 || name.length > 8){
            Fun.toastUi('이름을 4 ~ 8자 사이로 입력해주세요.');
            return;
        }

        if(pass.length < 8 || pass.length > 15){
            Fun.toastUi('비밀번호를 8 ~ 15자 사이로 입력해주세요.');
            return;
        }

        if(Common.REG_DATA.memeber_pass.test(pass) === false){
            Fun.toastUi('숫자 영문 특수문자 포함한 8 ~ 15자를 입력해 주세요.');
            return;
        }
        
        if(pass !== passConfirm){
            Fun.toastUi('입력하신 비밀번호가 다릅니다.');
            return;
        }
        /**
         * 입력받은 회원에 대한 조건 
         * email 형식이 아닐 경우 조건 변경
         */
        if(Common.REG_DATA.member_id.test(id) === false){
            Fun.toastUi('아이디 형식이 다릅니다.');
            return;
        }

        this.overlapIdCheck(user, 'click');

        console.log(user);

        if(userErr.status === 'fail'){
            Fun.toastUi('사용중인 아이디 입니다. (2)');
            return;
        }else{

            let result = {
                'id' : id,
                'name' : name,
                'nickname' : nickname,
                'pw' : pass,
            }

            axios.post(Common.API_SERVER+'/users/join', result).then( res => {
                const items = res.data;

                const resCode = items.status;

                if(resCode === 200){
                    Fun.toastUi('회원가입이 완료되었습니다. 이메일을 인증을 해주세요');
                    this.props.loginState = 'N';

                }else{
                    Fun.toastUi(items.message);
                    return;
                }

            })
        }
    }


    overlapIdCheck = async (event, eventName = null, state = null) => {

        let data = null;
        
        if(eventName === 'click'){
            data = event;
        }else{
            data = event.currentTarget.value;
        }

        let result = {
            'id': data+'@'+this.state.email.email,
            'type': 'join'
        };
        

        console.log(result);

        if(Common.REG_DATA.member_id.test(result.id) === false){
            Fun.toastUi('아이디 형식이 다릅니다.');
            return;
        }

        await axios.post(Common.API_SERVER+'/users/find-id', result).then((res) => {

            const items = res.data;

            const resCode = items.status;

            if(resCode === 200){

                let error = {};

                if(items.message.data.cnt >= 1){
                    Fun.toastUi(items.message.message);

                    error = {
                        'status' : 'fail',
                        'message' : items.message.message
                    }
                }else{
                    error = {
                        'status' : 'succ',
                        'message' : items.message.message
                    }

                    this.setState(
                        {
                            id : result.id,
                            user : data
                        
                        }
                    );
                }

                this.setState({userErr : error});

            }else{
                Fun.toastUi(items.message.message);
                this.setState({userErr : ''});
            }

        })
    }

    changeEmailJoin = (event) => {

        let data = event.currentTarget;

        this.setState({
            'email' : {
                'email' : data.value,
                'type' : this.state.email.type
            }
        })
    }

    changeSelectEmail = (data) => {
        console.log(data);

        this.setState({
            'email' : {
                'email' : data.email,
                'type' : data.value
            },
            'id' : this.state.user
        })
    }

    render(){

        const { clickRadioState, loginState } = this.props;

        const { passErr, nameErr, nickErr, emailArr, email } = this.state;

        let style = {
            'top-div' : {
                textAlign : 'center',
            },
            'div' : {
                display : 'table-call',
                marginTop : '10px',
                textAlign: 'center',
                verticalAlign: 'middle',
            },
        }

        return(
            <div style={ style["top-div"]}>

                <div style={ style["div"]} className="member-error">
                    <Box component="span" style={ style["span"]}>
                        Id : 
                    </Box>
                    <Input 
                        name="user"
                        placeholder="User"
                        autoComplete="off"
                        onChange={ (event) => this.overlapIdCheck(event, '', 'join') }></Input>
                    {/* { (userErr !== '') ? <label>{ userErr } </label> : ''} */}
                    <Select labelId="label" id="select" value={email.type}>
                        {
                            emailArr.map((value, index) => {
                                return <MenuItem value={value.value} onClick={() => { this.changeSelectEmail(value)}}>{value.value}</MenuItem>
                            })
                        }
                    </Select>
                    {
                    (email.type === '직접입력') ? 
                        <Input 
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            value={email.value}
                            onChange={ (event) => this.changeEmailJoin(event, '', 'email') }></Input> : '' 
                    }
                    
                </div>

                <div style={ style["div"]} className="member-error">
                    <Box component="span" style={ style["span"]}>
                        Pass : 
                    </Box>
                    <Input 
                        name="pass"
                        placeholder="Password"
                        autoComplete="off"
                        onChange={ (event) => this.changeJoinValue(event)}></Input>
                    { (passErr !== '') ? <label>{ passErr }</label> : ''}
                </div>

                <div style={ style["div"]} className="member-error">
                    <Box component="span" style={ style["span"]}>
                        Pass Confirm : 
                    </Box>
                    <Input 
                        name="passConfirm"
                        placeholder="Password"
                        autoComplete="off"
                        onChange={ (event) => this.changeJoinValue(event)}></Input>
                </div>

                <div style={ style["div"]} className="member-error">
                    <Box component="span" style={ style["span"]}>
                        Name : 
                    </Box>
                    <Input 
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                        onChange={ (event) => this.changeJoinValue(event)}></Input>
                    { (nameErr !== '') ? <label>{ nameErr }</label> : ''}
                </div>

                <div style={ style["div"]} className="member-error">
                    <Box component="span" style={ style["span"]}>
                        Nickname : 
                    </Box>
                    <Input 
                        name="nickname"
                        placeholder="Nickname"
                        autoComplete="off"
                        onChange={ (event) => this.changeJoinValue(event)}></Input>
                    { (nickErr !== '') ? <label>{ nickErr }</label> : ''}
                </div>

                <div style={ style["div"]} className="button-array">
                    <span>
                        <Button variant="outlined" color="secondary" onClick={ () => this.submitClickJoin() }>
                            Join
                        </Button>
                    </span>
                    <span>
                        <Button variant="outlined" color="primary" onClick={ () => clickRadioState('login') }>
                            Login
                        </Button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Join