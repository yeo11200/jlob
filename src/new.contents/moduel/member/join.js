import React from 'react';

class Join extends React.Component{

    constructor(props){

        super(props);

        this.state={
            'email' : ''
        }
    }

    componentDidMount(){
        console.log(1);
    }

    render(){
        return(
            <div>
                회원가입
            </div>
        )
    }
}

export default Join