import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import * as Common from '../../../../common';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Box, TextField, CircularProgress} from '@material-ui/core';
import ProfileView from './profile.view';
import * as Fun from '../../../../fun';
import $ from 'jquery';

class ProfileDetail extends React.Component{

    constructor(props){

        super(props);

        var query = queryString.parse(props.location.search);
        
        console.log('detail', query);

        console.log(props);

        this.state = {
            idx : query.id,
            itemsList : [],
            resposnseCode : null,
            title : {},
            date : null,
            dataSet : null,
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

            
            if(resposnseCode === 200){

                var itemsList = items.data.view;
                var title = items.data.title;

                console.error(title);
                totalCareer.push({ idx : title.mc_idx , start : title.mc_startdate, end : title.mc_enddate});
                console.log(itemsList);
                this.setState({itemsList : itemsList, title : title, date : Fun.callTest(totalCareer)});
                
            }else{
                this.setState({itemsList : []});
            }

        })

    }

    paperCustom = (index, list) => {
        console.log($('.ui-'+index));

        console.log(list);
        $('.MuiPaper-root').removeClass('MuiPaper-elevation3');

        if(index !== this.state.dataSet){
            this.setState({dataSet : index});
            $('.ui-'+index).addClass('MuiPaper-elevation3');
        }else{
            this.setState({dataSet : null});
        }

    }
    render(){

        let { itemsList, resposnseCode, title, date } = this.state;

        console.log(this.state.dataSet)
        return(
            <div>
                    <Box component="div" m={1}>
                        {title.mc_compony} <span>{date}</span>
                    </Box>
                    {
                        resposnseCode == null ? <CircularProgress color="secondary" /> : itemsList.map((value, index) => (
                            <Paper elevation={1} className={`ui-${index}` + (this.state.dataSet === index ? ' on' : '')} onClick={ () => this.paperCustom(index, itemsList)}
                            color="secondary.main"
                            >
                                <div>
                                    <div><span>프로젝트 명 : </span>{value.pro_content}</div>
                                    <div><span>프로젝트 시작일 : </span>{Fun.dateYmdFilter(value.pro_start_date)}</div>
                                    <div><span>프로젝트 종료일: </span>{Fun.dateYmdFilter(value.pro_end_date)}</div>
                                    <div dangerouslySetInnerHTML={{__html : Fun.splitComma(value.pro_skill_set)}}></div>
                                </div>
                            </Paper>
                        ))
                    }
            </div>
        )
    }
}

export default ProfileDetail;