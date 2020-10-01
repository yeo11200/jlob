import React from "react";
import axios from 'axios';
import Person from './profileComponent/person';

import ReactLoading from 'react-loading';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';
import { FirstPage, LastPage, KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons';

import * as Common from '../../../common';

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
        
        await axios.get(Common.API_SERVER+'/profile').then( response => {
            
            var items = response.data;

            var resposnseCode = items.status;
            this.setState({resposnseCode : items.status});

            console.log(resposnseCode);
            if(resposnseCode === 200){

                console.log(items.data);
                this.setState({itemsList : items.data.carrer});

                console.log(items.data.carrer);
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
      }
    render(){
        console.log('Profile');
          
          const rows = [
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            this.createData('Eclair', 262, 16.0, 24, 6.0),
            this.createData('Cupcake', 305, 3.7, 67, 4.3),
            this.createData('Gingerbread', 356, 16.0, 49, 3.9),
          ];
        let { itemsList, resposnseCode } = this.state;

        console.log(itemsList);
        return(
            <div>
                <h2>이력서</h2>
                <Person></Person>        
                {/* 자기 소개서나 프로젝트 별로 작업 할 곳 */}


                <div>
                    <h2>경력사항</h2>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {itemsList.map((value, index) => (
                                <TableRow key={value.mc_compony} onClick={ () => this.goToView(value.mc_compony)}>
                                    <TableCell component="th" scope="rows">
                                        {value.mc_compony}
                                    </TableCell>
                                    <TableCell align="right">{value.mc_position}</TableCell>
                                    <TableCell align="right">{value.mc_project_name}</TableCell>
                                </TableRow>
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