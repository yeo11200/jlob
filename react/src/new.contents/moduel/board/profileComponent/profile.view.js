import React from "react";
// import { Modal, Backdrop } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';

import * as Common from '../../../../common';
import * as Fun from '../../../../fun';

class ProfileView extends React.Component{

    constructor(props){
        super(props);

        console.log('props111');
        console.log(props);
    }

    render(){
        return(
            <tr>
                <td width="50" component="th" scope="rows">
                    {this.props.row.mc_compony}
                </td>
                <td width="300" align="right">{this.props.row.mc_position}</td>
                <td width="100"align="right"><div dangerouslySetInnerHTML={{__html : Fun.splitComma(this.props.row.mc_project_name)}}></div></td>
                {/* <TableCell align="right">{value.mc_project_name}</TableCell> */}
                <td width="100" align="right">{Fun.dateYmdFilter(this.props.row.mc_startdate)}</td>
                <td width="100" align="right">{Fun.dateYmdFilter(this.props.row.mc_enddate)}</td>
            </tr>
        )
    }
}


export default ProfileView;