import React from "react";
import { Link } from 'react-router-dom';
// import { Modal, Backdrop } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';

import * as Common from '../../../../common';
import * as Fun from '../../../../fun';

class ProfileView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TableRow key={this.props.row.mc_compony}>
                <TableCell component="th" scope="rows">
                    {this.props.row.mc_compony}
                </TableCell>
                <TableCell align="center"><Link to={`/test2/dita?id=${this.props.row.mc_idx}`} style={{textDecoration: 'none'}}>{this.props.row.mc_position}</Link></TableCell>
                <TableCell align="right"><div dangerouslySetInnerHTML={{__html : Fun.splitComma(this.props.row.mc_project_name)}}></div></TableCell>
                {/* <TableCell align="right">{value.mc_project_name}</TableCell> */}
                <TableCell align="right">{Fun.dateYmdFilter(this.props.row.mc_startdate)}</TableCell>
                <TableCell align="right">{Fun.dateYmdFilter(this.props.row.mc_enddate)}</TableCell>
            </TableRow>
        )
    }
}


export default ProfileView;