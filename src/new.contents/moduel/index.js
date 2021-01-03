/**
 * Route의 component의 데이터를 export만 시키기 위한 js
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Profile, ProfileDetail, Main, Char, Schedule, Bible, Member } from '../route/router';
import Person from './board/profileComponent/person';


class Index extends React.Component{

    constructor(props){
        super(props);

        const randomId = Math.floor(Math.random() * 100000);

        const nowRandomId = localStorage.getItem('TOKEN_ID');

        console.log(props);

        if(randomId !== nowRandomId){
            localStorage.setItem('TOKEN_ID', randomId);
        }
        
    }
    render(){
        return(
            <div>
                <Person></Person>
                {/**
                 * 해당 url에 대한 컴포넌트를 지정할 때 사용을 한다.
                 * render function () { return <>} 이렇게 쓰는 방법
                 * component = {component }를 사용하는 방법이다
                 */}
                <Route path="/test" render={() => (
                            <div>
                                <div className="blog-info">
                                    <dl>
                                        <dd>{this.props.name}</dd>
                                        <dd>React</dd>
                                        <dd>Express</dd>
                                        <dd>FireBase</dd>
                                        <dd>MariaDB</dd>
                                        <dd>AWS RDS</dd>
                                        <dd>Git Hub</dd>
                                        <dd>material-ui</dd>
                                        <dd>AWS S3</dd>
                                    </dl>
                                </div>
                
                                <div className="blog-connenct">
                
                                </div>
                            </div>
                )}></Route>
                    <Route exact path="/" component={ Main }></Route>
                    <Route exact path="/test2" component={ Profile }></Route>
                    <Route exact path="/test3" component={ Char }></Route>
                    <Route path="/test2/dita" component={ ProfileDetail }></Route>
                    <Route path="/schedule" component={ Schedule }></Route>
                    <Route path="/bible" component={ Bible }></Route>
                    
                    <Member loginState={this.props.loginState} loginPopup={this.props.loginPopup}></Member>
            </div>
        )
    }
}

export default Index;