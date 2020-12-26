import React from 'react'
import axios from 'axios'

class Bible extends React.Component{

    constructor(props){
        super(props);

        let BIBLE_ID = localStorage.getItem('BIBLE_ID') ? localStorage.getItem('BIBLE_ID') : null;
        let WIZ_ID = localStorage.getItem('WIZ_ID') ? localStorage.getItem('WIZ_ID') : null;
        let BIBLE_YN = localStorage.getItem('BIBLE_YN') ? localStorage.getItem('BIBLE_YN') : 'N';

        let already = null;

        if(BIBLE_ID === null && WIZ_ID === null){
            BIBLE_ID = Math.floor(Math.random() * 31102);
            WIZ_ID = Math.floor(Math.random() * 100000);
            already = 'N';
        }else{
            already = 'Y';
        }
        

        console.log(BIBLE_ID);
        console.log(WIZ_ID);

        this.state = {
            'bible_id' : BIBLE_ID,
            'wiz_id' : WIZ_ID,
            'bible' : {},
            'bible_yn' : BIBLE_YN,
            'isLoding' : false,
            'already' : already
        }
    }

    componentDidMount(){
     
        if(this.state.already == 'Y'){
            this.getBibleApi();
        }
    }

    getBibleApi = () => {

        axios.get('https://project-setting.s3.ap-northeast-2.amazonaws.com/json/bible.json')
        .then( response => {
            console.log(response);
        
            let items = response;

            if(items.status === 200){

                console.log(this.state);
                let bibleYn = this.state.bible_yn;

                if(bibleYn == 'N'){

                    localStorage.setItem('BIBLE_ID', this.state.bible_id);
                    localStorage.setItem('WIZ_ID', this.state.wiz_id);
                    localStorage.setItem('BIBLE_YN', 'Y');

                    bibleYn = 'Y';   
                }

                console.log(this.state.bible_id);
                console.log(items.data.bible_korHRV[this.state.bible_id]);

                this.setState({
                    'bible' : items.data.bible_korHRV[this.state.bible_id],
                    'bible_yn' : bibleYn,
                    'isLoding' : true
                })




            }else{
                console.log('error');
            }
        })
    }

    selectBibleContent = () => {

        let BIBLE_ID = localStorage.getItem('BIBLE_ID') ? localStorage.getItem('BIBLE_ID') : null;
        let WIZ_ID = localStorage.getItem('WIZ_ID') ? localStorage.getItem('WIZ_ID') : null;

        if(BIBLE_ID === null && WIZ_ID === null){
            BIBLE_ID = Math.floor(Math.random() * 31102);
            WIZ_ID = Math.floor(Math.random() * 100000);
        }
        this.setState({
            'bible_id' : BIBLE_ID,
            'wiz_id' : WIZ_ID,
            'already' : 'Y',
        })

        this.getBibleApi();
    }

    bibleContent = () => {

        localStorage.removeItem('BIBLE_ID');
        localStorage.removeItem('WIZ_ID');
        localStorage.removeItem('BIBLE_YN');

        this.setState({
            'bible_yn' : 'N',
            'isLoding' : false
        })
    }

    render(){

        const { bible,  bible_yn:bibleYn, isLoding} = this.state;

        return(
            <div>
                성경
                {
                    (() => {
                       if(bibleYn == 'N'){
                            return (
                                <button onClick={ () => { this.selectBibleContent() } }>말씀 뽑기</button>
                            )
                       }else{

                            if(isLoding == true){
                                return(
                                    <div>
                                        올 해 성도님에게 주신 말씀은 
                                        <div>{bible.book} {bible.chapter} 장 {bible.verse} 절 {bible.content} 입니다.</div>

                                        해당 말씀을 가지고 나아갈 수 있는 한해 되길 기도합니다.

                                        <div>
                                            <button onClick={ () => this.bibleContent() }>다시 뽑기</button>
                                        </div>
                                    </div>
                                )
                            }else{
                                return(
                                    <div>잠시만 기다려 주세요.</div>
                                )
                            }
                       }
                    })()
                }
                
            </div>
            
        )
    }
}


export default Bible;