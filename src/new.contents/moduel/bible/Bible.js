import React from 'react'
import axios from 'axios'

class Bible extends React.Component{

    constructor(props){
        super(props);

        const BIBLE_ID = localStorage.getItem('BIBLE_ID') ? localStorage.getItem('BIBLE_ID') : null;
        const WIZ_ID = localStorage.getItem('WIZ_ID') ? localStorage.getItem('WIZ_ID') : null;

        const BIBLE_RANDOM_ID = Math.floor(Math.random() * 31102);
        const RANDOM_WIZ_ID = Math.floor(Math.random() * 100000);

    }

    componentDidMount(){
        this.getBibleApi();
    }
    getBibleApi = () => {

        axios.get('https://project-setting.s3.ap-northeast-2.amazonaws.com/json/bible.json')
        .then( response => {
            console.log(response);
        
            let items = response;

            if(items.status === 200){

            }else{
                console.log('error');
            }
        })
    }

    render(){
        return(
            <div>성경</div>
        )
    }
}


export default Bible;