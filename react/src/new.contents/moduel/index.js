/**
 * Route의 component의 데이터를 export만 시키기 위한 js
 */
import React from 'react';
import {Route} from 'react-router-dom';


class Index extends React.Component{
    render(){
       return(
           <div>
               <Route exact path="/test" Component={}></Route>
           </div>
       ) 
    }
}

export default Index;