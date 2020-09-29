import React from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';
import { IconButton} from '@material-ui/core';
import { FirstPage, LastPage, KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons'


class Profile extends React.Component{

    render(){
        console.log('Profile');

          
        return(
            <div>
                <h2>이력서</h2>
            </div>
        )
    }
}

export default Profile;