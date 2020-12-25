import React from 'react'
import axios from 'axios'

class Bible extends React.Component{

    constructor(props){
        super(props);

        let BIBLE_ID = localStorage.getItem('BIBLE_ID') ? localStorage.getItem('BIBLE_ID') : null;
        let WIZ_ID = localStorage.getItem('WIZ_ID') ? localStorage.getItem('WIZ_ID') : null;
        let BIBLE_YN = localStorage.getItem('BIBLE_YN') ? localStorage.getItem('BIBLE_YN') : 'N';


        if(BIBLE_ID === null && WIZ_ID === null){
            BIBLE_ID = Math.floor(Math.random() * 31102);
            WIZ_ID = Math.floor(Math.random() * 100000);
        }
        

        console.log(BIBLE_ID);
        console.log(WIZ_ID);

        this.state = {
            'bible_id' : BIBLE_ID,
            'wiz_id' : WIZ_ID,
            'bible' : null,
            'bible_yn' : BIBLE_YN
        }
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

                if(this.state.bible_yn === 'Y'){

                    this.setState({
                        'bible' : items.data.bible_korHRV[this.state.bible_id]
                    })

                }else{

                }

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