import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

export class schedule extends Component {

    constructor(props){

        super(props);

        this.state = {
            getTitle : 'zzzz'
        };
    }

    /**
     * React Component가 실행할 때 제일 먼저 실행될 함수
     * 주로 비동기 통신 할 때 사용한다.
     * arrow function 일 경우 setStete가 먹힌다.
     * 원인은 파악 중
     */
    componentWillMount(){
        axios.get('https://api.ip.pe.kr/').then((response) => {
            console.log(response.data);
            this.setState({ 
                getTitle: response.data
              });
            // this.setState({getTitle : response.data});
        })
    }

    render() {
        return (
            <div>
                {this.state.getTitle}
                {this.aa}
            </div>
        )
    }
}

schedule.defaultProps = {
    name: PropTypes.string,
}
export default schedule
