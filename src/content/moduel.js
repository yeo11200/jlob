import React from 'react';
import { Route } from 'react-router-dom';
import { Profile, Blog, Schedule, Char } from './index';
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
                <Route path="/about" component={Profile}></Route>
                <Route path="/blog" component={ () => <Blog name="name"></Blog>}></Route>
                <Route path="/schedule" component={ () => <Schedule name="schedule"></Schedule>}></Route>
                <Route path="/chat" component={ () => <Char></Char>}></Route>
            </div>
        )
    }
}

export default moduel;