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
      createData = function(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

      goToView = function(items){
        console.log(items);
        window.location.href = `/test2/view?id=${items}`;
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
                    
                        <table aria-label="simple table">
                            <tbody>
                                <tr>
                                    <th width="50">회사명 </th>
                                    <th width="300" align="left">직군</th>
                                    <th width="100" align="right">프로젝트</th>
                                    <th width="100"align="right">입사 일</th>
                                    <th width="100" align="right">종료 일</th>
                                </tr>
                                {itemsList.map((value, index) => (
                                    
                                    <ProfileView key={value.mc_idx} row={value} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />
                                    
                                ))}
                                </tbody>
                        </table>

                </div>
            </div>
        )
    }
}

export default Profile;