import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import io from 'socket.io-client';
import $ from 'jquery';

var socket = io.connect('http://localhost:4000/');
class Char extends React.Component{

    constructor(props){

        super(props);

        this.state = {name : '', message : '', messageList : []};

    }
    /**
     * 이걸 인용해서 chanel id도 만들고 채팅방 리스트와 함께 만들수 있다.
     */
    componentDidMount(){
              
        socket.emit('init', { name: 'aaaa'});
        /**
         * 서버에서 emit으로 호출해서 사용을 한다.
         */
        socket.on('connent', (msg) => {
            console.log(msg);
        });
        
    }

    aaaa = () => {
  
        /**
         * 서버에서 on으로 받아서 사용을 한다.
         */
        if(this.messageContent.current.value != this.state.name){
            
            
            this.setState({
                name : this.messageContent.current.value
            });

        }
        
        
        socket.emit('chat message1', this.messageContent.current.value);

    }

    /**
     * state에 변화가 일어났을 경우 발생하는 LifeCycle 
     */
    componentWillMount(){
        let message = [];

        socket.on('chat message2', (msg) => {
            this.messageContent.current.value = '';
            message.unshift({'content' : msg});

            this.setState({messageList : message });
        });
    }
    messageName = React.createRef();
    messageContent = React.createRef();

    render(){
        let { messageList } = this.state;
        return(
            <div>
                <div>
                    <ul>
                        {
                            messageList.length > 0 ? messageList.map((value, index) => {
                                return(
                                    <li>{value.content}</li>
                                )
                            }) : <li>send ing</li>
                        }
                    </ul>
                </div>
                <div>
                    <input ref={this.messageName}></input>
                    <textarea ref={this.messageContent}></textarea>
                    <button onClick={() => { this.aaaa()}}>Send</button>
                </div>

            </div>
        )
    }

    componentWillUnmount(){
        socket.emit('disconnect', 'aaaa');
    }
}

export default Char;