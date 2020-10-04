import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab,  Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import {  } from '@material-ui/icons'
class Header extends React.Component{

    render(){
        var classname = {
            link : {
                color : 'red',
                alignItmes : 'center',
                flexDirection : 'column'
            }
        }

        console.log(classname);
        return(
            <AppBar position="static">
                {/* value={value} onChange={handleChange} */}
                <Tabs aria-label="simple tabs example">
                    <Link exact to="/test" style={classname.link}><Tab label="이력서"></Tab></Link>
                    <Link exact to="/test2" style={classname.link}><Tab label="블로그 기술스펙"></Tab></Link>
                    <Link to="/test3" style={classname.link}><Tab label="채팅"></Tab></Link>
                </Tabs>
            </AppBar>
        )
    }
}


export default Header;
