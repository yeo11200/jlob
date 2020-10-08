import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import * as Common from '../../../../common';
import * as Fun from '../../../../fun';

class ProfileDetail extends React.Component{

    constructor(props){

        super(props);

        var query = queryString.parse(props.location.search);
        
        console.log('detail', query);

        console.log(props);

        this.state = {
            idx : query.id
        }
    }


    componentDidMount(){
        this.getProfileData();
    }
    getProfileData = async () => {
        
        var  totalCareer = [];

        await axios.get(Common.API_SERVER+'/profile/'+ this.state.idx).then( response => {
            
            var items = response.data;

            var resposnseCode = items.status;
            this.setState({resposnseCode : items.status});

            console.log(resposnseCode);
            if(resposnseCode === 200){

                var itemsList = items.data.carrer;

                for(var i in itemsList){
                    console.log(itemsList[i]);

                    totalCareer.push({ idx : itemsList[i].mc_idx , start : itemsList[i].mc_startdate, end : itemsList[i].mc_enddate});
                }
                this.setState({itemsList : itemsList});
                
            }else{
                this.setState({itemsList : []});
            }

        })

    }

    render(){
        return(
            <div><h2>상세보기다</h2></div>
        )
    }
}

export default ProfileDetail;