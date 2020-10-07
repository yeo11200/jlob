import React from 'react';

class ProfileDetail extends React.Component{

    constructor(props){

        super(props);
        console.log('detail');
    }

    render(){
        return(
            <div><h2>상세보기다</h2></div>
        )
    }
}

export default ProfileDetail;