import React from "react";
import axios from 'axios';
import Person from './profileComponent/person';
import ProfileView from './profileComponent/profile.view';

import ReactLoading from 'react-loading';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';
import { FirstPage, LastPage, KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons';

import * as Common from '../../../common';
import * as Fun from '../../../fun';

class Profile extends React.Component{

    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            itemsList : [],
            resposnseCode : null,
        }        
    }

    componentDidMount(){
        console.log(1);
        this.getProfileData();
    }

    getProfileData = async () => {
        
        var  totalCareer = [];

        await axios.get(Common.API_SERVER+'/profile').then( response => {
            
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


                Fun.callTest(totalCareer);
                
            }else{
                this.setState({itemsList : []});
            }

        })

    }

    render(){

        let { itemsList, resposnseCode } = this.state;
        return(
            <div>
                <h2>이력서</h2>
                <Person></Person>

                {/* 자기 소개서나 프로젝트 별로 작업 할 곳 */}

                <div>
                    <h2>경력사항</h2> <div style={{textAlign: 'right'}}>총경력 : {Fun.a()}</div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>회사명 </TableCell>
                                    <TableCell align="left">직군</TableCell>
                                    <TableCell align="right">프로젝트</TableCell>
                                    <TableCell align="right">입사 일</TableCell>
                                    <TableCell align="right">종료 일</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {itemsList.map((value, index) => (
                                
                                <ProfileView key={value.mc_idx} row={value} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />
                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        )
    }
}

export default Profile;