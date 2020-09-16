import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Profile, Blog, Schedule, Char, Login } from './index';
import ProfileWrite from '../Page/write/profileWrite';
class moduel extends React.Component {

    constructor(props){
        super(props);
        
        
        this.state = {

        }

    }
    render(){
        return(
            <div>
                {/**
                 * 해당 url에 대한 컴포넌트를 지정할 때 사용을 한다.
                 * render function () { return <>} 이렇게 쓰는 방법
                 * component = {component }를 사용하는 방법이다
                 */}
                <Route path="/zzzz1" render={() => (
                    <h3>Render Test</h3>
                )}></Route>
                <Switch>
                    <Route exact path="/about" component={Profile}></Route>
                </Switch>
                <Route path="/about/:id" component={Char}></Route>
                <Route path="/blog" component={ () => <Blog name="name"></Blog>}></Route>
                <Route path="/schedule" component={ () => <Schedule name="schedule"></Schedule>}></Route>
                <Route path="/chat" component={ () => <Char></Char>}></Route>
                <Route path="/login" component={Login}></Route>
                {/**
                 * 이벤트 형식으로 사용하면 props에서 에러가 발생함
                 */}
                <Route path="/write" component={ProfileWrite}></Route>
            </div>
        )
    }
}

export default moduel;