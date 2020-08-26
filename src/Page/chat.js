import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import io from 'socket.io-client';
import $ from 'jquery';

var socket = io.connect('localhost:5000/');
class Char extends React.Component{

    constructor(props){

        super(props);

        console.log(props.match);
        this.state = {name : '', message : '', messageList : [], status : false};

    }
    /**
     * 이걸 인용해서 chanel id도 만들고 채팅방 리스트와 함께 만들수 있다.
     */
    componentDidMount(){

    }

    nicknameSend = () => {
    
        console.log(this.messageName.current.value);

        let nickname = this.messageName.current.value;
        this.setState({name : nickname});

        if(nickname == ''){
            console.log('에러');
        }else {
            socket.emit('init', { name: nickname});
            /**
             * 서버에서 emit으로 호출해서 사용을 한다.
             */
            socket.on('connent', (msg) => {
                console.log(msg);
                document.getElementById('content').style.display = 'block';
                this.setState({status : true});
            });
        }
        
    }

    commentSend = () => {
  
        /**
         * 서버에서 on으로 받아서 사용을 한다.
         */
        this.setState({
            message : this.messageContent.current.value
        });

        var chating = {
            'nickname' : this.state.name,
            'message' : this.messageContent.current.value
        }
        
        socket.emit('chat message1', chating);

    }

    /**
     * state에 변화가 일어났을 경우 발생하는 LifeCycle 
     */
    componentWillMount(){
        let message = [];

        socket.on('chat message2', (msg) => {
            this.messageContent.current.value = '';

            console.log(msg)
            message.unshift({'nickname' : msg.nickname , 'content' : msg.message});

            this.setState({messageList : message });
        });
    }

    onTodoChange = (value) => {
        this.setState({name : value});
    }

    messageName = React.createRef();
    messageContent = React.createRef();


    keyDownFuc = (e, type) =>{

        if(type == 'nick'){
            if(e.keyCode == 13){
                this.nicknameSend();
            }
        }
    }
    render(){
        let { name, messageList, status } = this.state;

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
                        <input 
                            ref={this.messageName} 
                            disabled = {status ? "disabled" : false}
                            value = {name}
                            onChange = {e => this.onTodoChange(e.target.value)}
                            onKeyDown={(e) => { this.keyDownFuc(e, 'nick');}}
                            >
                        </input>
                        <button 
                            onClick={() => { this.nicknameSend()}}
                        >닉네임 등록
                        </button>
                    </div>
                    <div style={display} id="content">
                        <textarea ref={this.messageContent}></textarea>
                        <button onClick={() => { this.commentSend()}}>
                            Send
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    componentWillUnmount(){
        socket.emit('disconnect', 'aaaa');
    }
}

export default Char;