import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import io from 'socket.io-client';
import $ from 'jquery';
import * as Comm from '../common';
const queryString = require('query-string');


var socket = io.connect(Comm.API_SERVER);
class Char extends React.Component{

    constructor(props){

        super(props);

        console.log(props.match);

        console.log(queryString.parse(window.location.search));
        console.log(Math.round(Math.random() * 1000));
        
        
        this.state = {name : '', message : '', messageList : [], status : false, roomName : '', roomStatus : false, clientId : Math.round(Math.random() * 1000)};
    }

    /**
     * 이걸 인용해서 chanel id도 만들고 채팅방 리스트와 함께 만들수 있다.
     */
    componentDidMount(){

    }

    commentSend = () => {
  
        /**
         * 서버에서 on으로 받아서 사용을 한다.
         */

        var messageContent = this.messageContent.current.value;
        let nickname = this.messageName.current.value;

        this.setState({
            message : messageContent,
            name : nickname
        });

        if(nickname.length == 0){
            return;
        }
        
        if(messageContent.length > 0){

            if(!messageContent.includes('퇴장')){
                var chating = {
                    'room' : this.state.roomName,
                    'nickname' : this.state.name,
                    'message' : messageContent
                }
                
                socket.emit('chat message1', chating);
            }else {
                var out = window.confirm('진짜 퇴장하시겠습니까?');

                if(out){
                    socket.emit('client disconnect', 'aaaa');
                }else{
                    var chating = {
                        'room' : this.state.roomName,
                        'nickname' : this.state.name,
                        'message' : messageContent
                    }

                    console.log(this.state.roomName);
                    
                    socket.emit('chat message1', chating);
                }
            }

        }else{
            alert('채팅을 입력하세요.');
        }

    }

    /**
     * state에 변화가 일어났을 경우 발생하는 LifeCycle 
     */
    componentWillMount(){
        var message = this.state.messageList;
        socket.on('chat message2', (msg) => {
            this.messageContent.current.value = '';
            message.push({'nickname' : msg.nickname , 'content' : msg.message});
            this.setState({messageList : message });
        });
    }

    onTodoChange = (value) => {
        this.setState({name : value});
    }

    messageName = React.createRef();
    messageContent = React.createRef();
    roomName = React.createRef();


    keyDownFuc = (e, type) =>{

        if(type == 'nick'){
            if(e.keyCode == 13){
                this.nicknameSend();
            }
        }else if(type == 'room'){
            if(e.keyCode == 13){
                this.submitRoomName();
            }
        }
    }

    submitRoomName = () => {
        let rommName = (this.roomName.current.value == '') ? '' : this.roomName.current.value;
        let nickname = this.messageName.current.value;

        var message = this.state.messageList;
        if(rommName.length > 0){
            let data = {
                'mUid' : 1,
                'roomName' : rommName,
                'nickname' : nickname,
            }

            if(nickname.length == 0){
                return;
            }

            // 방생성은 같은방일ㄸ ㅐ한번 
            if(this.state.roomName != rommName && this.state.nickname != nickname){
                socket.emit('create room', data);

            
                socket.on('join room', (data) => {

                    message.push({'nickname' : 'join' , 'content' : data.message});
                    if(data.status == '0000'){
                        document.getElementById('content').style.display = 'block';
    
                        this.setState({
                            status : true,
                            'roomStatus' : true, 
                            'roomName' : rommName, 
                            messageList : message });
                    }else {
                        document.getElementById('content').style.display = 'block';
                        this.setState({
                            status : true,
                            'roomStatus' : true, 
                            'roomName' : rommName, 
                            messageList : message });
                    }
                });
            }

        }else {
            alert('방 정보를 입력하세요');
        }
        
    }

    levalRoom = () => {
        var message = this.state.messageList;
        console.log(this.state);
        if(this.state.roomName != ''){
            console.log(111);
            socket.emit('client disconnect', this.state);
        }

        socket.on('client disconnect2', (data) => {
            
            message.push({'nickname' : data.status , 'content' : data.msg});

            this.setState({
                status : false,
                'roomStatus' : false, 
                'roomName' : '', 
                messageList : message 
            });

            // message.push({'nickname' : 'join' , 'content' : data.message});
            // if(data.status == '0000'){
            //     document.getElementById('content').style.display = 'block';

            //     this.setState({
            //         status : true,
            //         'roomStatus' : true, 
            //         'roomName' : rommName, 
            //         messageList : message });
            // }else {
            //     document.getElementById('content').style.display = 'block';
            //     this.setState({
            //         status : true,
            //         'roomStatus' : true, 
            //         'roomName' : rommName, 
            //         messageList : message });
            // }
        });
        
    }
    render(){
        let { name, messageList, status, roomStatus } = this.state;

        const display = {display: 'none'};
        return(
            <div>
                <div>
                    <ul>
                        {
                            messageList.length > 0 ? messageList.map((value, index) => {
                                return(
                                    <li className={value.nickname == name ? 'right' : 'left'}>{value.nickname} : {value.content}</li>
                                )
                            }) : <li>send ing</li>
                        }
                    </ul>
                </div>
                <div>
                    <div>
                        <div>
                            <button 
                                onClick={() => { this.levalRoom()}}
                            >나가기
                            </button>
                        </div>
                        <div>
                            <input
                                ref={this.roomName}
                                disabled = {roomStatus ? "disabled" : false}
                                onKeyDown={(e) => { this.keyDownFuc(e, 'room');}}
                            >
                            </input>
                        </div>
                        <div>
                            <input 
                                ref={this.messageName} 
                                disabled = {status ? "disabled" : false}
                                value = {name}
                                onChange = {e => this.onTodoChange(e.target.value)}
                                >
                            </input>
                            <button 
                                onClick={() => { this.submitRoomName()}}
                            >닉네임 등록
                            </button>
                        </div>
                    </div>
                    <div style={display} id="content">
                        <textarea ref={this.messageContent}></textarea><br/>
                        <button onClick={() => { this.commentSend()}}>
                            Send
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    componentWillUnmount(){
        socket.emit('client disconnect', 'aaaa');
    }
}

export default Char;