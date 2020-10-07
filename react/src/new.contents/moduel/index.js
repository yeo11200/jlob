/**
 * Route의 component의 데이터를 export만 시키기 위한 js
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Profile, ProfileDetail } from '../route/router';

class Index extends React.Component{
    render(){
        console.log('Index');
        return(
            <div>
                {/**
                 * 해당 url에 대한 컴포넌트를 지정할 때 사용을 한다.
                 * render function () { return <>} 이렇게 쓰는 방법
                 * component = {component }를 사용하는 방법이다
                 */}
                <Route path="/test" render={() => (
                    <h3>Render Test</h3>
                )}></Route>

                    <Route exact path="/test2" component={ Profile }></Route>
                    <Route path="/test2/id=:id" component={ ProfileDetail }></Route>
            </div>
        )
    }
}

export default Index;