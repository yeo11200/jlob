import React from "react";
import axios from 'axios';

import ProfileView from './profileComponent/profile.view';

import ReactLoading from 'react-loading';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, CircularProgress } from '@material-ui/core';
import { FirstPage, LastPage, KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons';

import * as Common from '../../../common';
import * as Fun from '../../../fun';

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            itemsList : [],
            resposnseCode : null,
        }        
    }

    componentDidMount(){
        this.getProfileData();
    }

    getProfileData = async () => {
        
        var  totalCareer = [];

        await axios.get(Common.API_SERVER+'/profile').then( response => {
            
            var items = response.data;

            var resposnseCode = items.status;
            this.setState({resposnseCode : items.status});

            if(resposnseCode === 200){

                var itemsList = items.data.carrer;

                for(var i in itemsList){
                    console.log(itemsList[i]);

                    totalCareer.push({ idx : itemsList[i].mc_idx , start : itemsList[i].mc_startdate, end : itemsList[i].mc_enddate});
                }
                var date = Fun.callTest(totalCareer)
                this.setState({itemsList : itemsList, date : date});


                Fun.callTest(totalCareer);
                
            }else{
                this.setState({itemsList : []});
            }

        })

    }

    // fileChange = function(e){

    //     var file = e.target.files[0];

    //     var size = 10 * 1024 * 1024;

    //     console.log(size);
    //     if(size <= file.size){
    //         console.log('너무 커요');
    //         return;
    //     }
    //     this.setState({
    //         setfile : e.target.files[0]
    //     })
    // }

    // testPost = function(){

    //     const formData = new FormData();

    //     formData.append('file', this.state.setfile);

    //     axios.post(Common.API_SERVER+'/profile', formData).then(res => {
    //         console.log(res);
    //     }).catch(res => {
    //         console.log(res);
    //     });
    // }

    render(){

        let { itemsList, resposnseCode, date } = this.state;
        return(
            <div>
                {/* 자기 소개서나 프로젝트 별로 작업 할 곳 */}

                <div>
                    <h2>경력사항</h2> <div style={{textAlign: 'right'}}>총경력 : {date}</div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>회사명 </TableCell>
                                    <TableCell align="center">직군</TableCell>
                                    <TableCell align="right">프로젝트</TableCell>
                                    <TableCell align="right">입사 일</TableCell>
                                    <TableCell align="right">종료 일</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.itemsList.length == 0 ? <CircularProgress color="secondary" /> : itemsList.map((value, index) => (
                                
                                <ProfileView key={value.mc_idx} row={value} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />
                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <input type="file" onChange={(e) => this.fileChange(e)}></input>
                    <button onClick={() => this.testPost()}>테스트</button> */}
                </div>
            </div>
        )
    }
}

export default Profile;