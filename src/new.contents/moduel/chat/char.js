import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import $ from 'jquery';
import * as Common from '../../../common';
import * as Fun from '../../../fun';

var socket = io.connect(Common.API_SERVER);

class Char extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            name : '', 
            room : '',
            state : false,
            chatText : '',
            messageList : [],
            uid : localStorage.getItem('TOKEN_ID'),
        }

    }
    /**
     * 이걸 인용해서 chanel id도 만들고 채팅방 리스트와 함께 만들수 있다.
     */
    componentDidMount(){

    }
    
        /**
     * state에 변화가 일어났을 경우 발생하는 LifeCycle 
     */
    componentWillMount(){

        socket.on('chat message2', (msg) => {

            this.setState({
                'chatText' : '',
            })

            document.getElementById('chatInput').value = '';

            var message = this.state.messageList;
            console.log(msg);

            message.push({'nickname' : msg.nickname , 'content' : msg.message, 'mUid' : msg.mUid});
            
            console.log(message);

            var charList = document.getElementById('char-list');

            this.setState({messageList : message });


            var currentScroll = charList.scrollTop;
            var endScroll = charList.scrollHeight;
                  
            /**
             * 위치에 따라 스크롤의 높이가 달라진다.
             */

            if(this.state.uid == msg.mUid){
                if(currentScroll < endScroll || currentScroll === 0){
                    $('#char-list').scrollTop(endScroll);
    
                    console.log(endScroll);
                }
            }
            
        });
    }

    back = () => {
        console.log(this.state.name);
        // props.history.goBack();
    }

    inputChange = (event, state) => {
        /**
         * react에서 변수의 데이터를 담을 떄 change 함수를 사용
         * event.target 도 있지만, event.currenttarget 을 사용하면 조금 더 정확한 데이터가 가능
         * 
         */
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    joinChating = () =>{

        var message = [];
        if(this.state.name.length != 0 && this.state.room.length != 0){

            let data = {
                'mUid' : this.state.uid,
                'roomName' : this.state.room,
                'nickname' : this.state.name,
            }

            if(data.nickname.length == 0){
                return;
            }

            // 방생성은 같은방일 때 한번 
            socket.emit('create room', data);

            
            socket.on('join room', (data) => {

                message.push({'nickname' : this.state.name , 'content' : data.message, 'state' : 'join'});

                this.setState({
                    state : true
                })

                console.log(message);
                if(data.status == '0000'){
                    this.setState({
                        messageList : message
                    });
                }else {
                    this.setState({
                        messageList : message
                    });
                }
            });

        }else{

            if(this.state.name.length == 0){
                Fun.toastUi('이름을 입력해주세요.');
            }else if(this.state.room.length == 0){
                Fun.toastUi('방 이름을 입력해 주세요.');
            }
        }
    }

    setChatting = () => {

        var room = $('input[name=room]').val();
        var name = $('input[name=name]').val();


        console.log(1);
        if(this.state.chatText == '' || this.state.chatText == null){
            return;
        }

        var chating = {
            'mUid' : this.state.uid,
            'roomName' : room,
            'nickname' : name,
            'message' : this.state.chatText
        }

        socket.emit('chat message1', chating);
    }

    getListReturn = (value) => {

        /**
         * 조건에 따라 요소에 대한 선택과, 요소를 그릴 수 있는 방법이 있다.
         * 1. function으로 return + dangerouslySetInnerHTML 하는 방법
         * 2. 3항 연산자로 하는 방법
         * 3. component를 활용해서 사용하는 방법
         */
        var html = ''
        if(value.state === 'join'){
            html += `<div>${value.content}</div>`;
        }else{
            html += `<div class="sender">${value.nickname}</div>`;
            html += `<div class="message">${value.content}</div>`;
        }

        return html;
    }
    render(){

        var style = {
            inputStype : {
                marginLeft : '5px',
            },
            textArea : {
                border : '1px solid #F18C7E',
            }
        }
    
        const { name, room, state, chatText, messageList, uid } = this.state
        return(
            <div>
                <div className="char-input">
                    <div className={(state == true ? 'on' : 'none') + ' here'}>
                        <input onChange={(event) => this.inputChange(event, 'name')} name="name"/>
                        <input onChange={(event) => this.inputChange(event, 'room')} name="room" style={style.inputStype}/>
                        <button 
                            type="button" 
                            className="submit-button" 
                            onClick={(event) => this.joinChating()}>
                            Join
                        </button>
                    </div>
                    <div className={'char-textarea ' + (state == true ? 'on' : 'none')} style={style.textArea}>
                        <textarea id="chatInput" name="chatText" onChange={(event) => this.inputChange(event, 'text')}>{chatText}</textarea>
                        <button 
                            type="button" 
                            className={'submit-button' + ((chatText == '' || chatText == null) ? ' off' : ' on')}
                            onClick={(event) => this.setChatting()}
                            disabled={chatText == '' || chatText == null ? true : false}>
                            Submit
                        </button>
                    </div>
                </div>

                <div className="char-list">
                    <ul 
                        className={(messageList.length !== 0 ? 'on' : '')}
                        id="char-list">
                    {/** 동적으로 생성할 li */
                        messageList.length === 0 ? '' : messageList.map((value, index) => {
                            return (
                            <li 
                                className={
                                (uid === value.mUid && value.state !== 'join' ? 'left' : 'right') + 
                                (value.state === 'join' && value.state !== undefined ? ' center' : '')}
                                dangerouslySetInnerHTML={{__html : this.getListReturn(value)}}>
                            </li>
                            )
                        })
                    } 
                    </ul>
                </div>
                <button onClick={this.back}>뒤로가기</button>
            </div>
        )
    }
}

export default Char;
