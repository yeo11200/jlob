# jlob


```npm
npm run deploy
// 배포 명렁어
```

```npm
// react 패키지 다운로드
npm install -g create-react-app

// react 프로젝트 생성
create-react-app project

// spa를 사용하기위한 라이브러리
npm install --save react-router-dom

//git page에 올리기 위한 라이브러리
npm install --save gh-pages
```

```js

// url링크를 거는방식
<Link to="/link">
// url 링크를 거는데 정확한 링크가아니면 출력되지않는다.
<Link exact to="/link">
// 받은 url에 따른 component 출력
<Route path="/link" component={component}>
// 받은 url에 따른 component 출력
<Route path="/link" render={() => { <h2>hello</h2>}}>
```

```js
// as를 사용하면 별명으로 사용할 수 있다.
import { BrowerRouter as Router, Route, Link} from 'react-router-dom'
```

##### props의 타입을 지정해줄 경우 사용을 한다.
```npm
npm install --save prop-types

or 

yarn add prop-types
```

```js
// class 명으로 사용할 경우
// 아래처럼 class명 defaultProps를 해준다.
// defaultProps는 props가 안넘어올 경우 기본적으로 담아주거나 타입을 지정할 때 사용을 한다.
className.defaultProps = {
    propName : propType.string;
}
```

```html
<!-- classname 작성시 {this.state.a ? 'a' : ''} -->
<li className={this.state.classNamePush == 'zzzz' ? 'on' : ''}>

<!-- 다중 className을 설정할 경우 -->
<div className={"profile-about-me " + (this.state.menuOn === 'info' ? 'on' : '')}>
```

```js
// React에서 event를 발생할 경우
// constructor = this.event.bind를 하거나
// html에 function 안에 event를 넣어주면 된다
    menuClickOn = function(menu){
        console.log(menu);
        this.setState({menuOn : menu})
    }

    <ul className="profile-menu">
        <li onClick={ () => { this.menuClickOn('info')}}>자기소개서</li>
        <li onClick={ () => { this.menuClickOn('project')}}>프로젝트경험</li>
        <li onClick={ () => { this.menuClickOn('announce')}}>발표내용</li>
    </ul>
```
```js
import * as Fun from '../fun';
// 복잡한 계산 공식이나 여러 곳에서 사용될 함수를 지정해서 사용한다.
// *는 export 된 모든 것을 가지고온다
```

```js
componentWillMount() // react 컴포넌트가 실행할 때 제일먼저 실행, 주로 axios를 사용할 때 사용
componentDidUpdate() // status or props 변경될 때 사용한다.


/** axios를 사용하는 방법
http의 메소드는
get, post, put, delete
Rest API의 http 메소드로 사용
*/

// params를 넣으면 url에 파라메터 데이터가 들어간다
axios.get('/url', {params : { id : 1}}).then( (response) => {}).catch((e) => {});
axios.post('/url', {a:1, b:2}).then( (response) => {}).catch((e) => {});

or 

axios({
  method: 'get',
  url: '/url',
  responseType: 'stream'
})

axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```
##### 1. firebase를 가지고 웹 push를 만들 예정
```npm 
npm install --save firebase
```

```js
import FireBase from 'firebase';

FireBase.initializeApp();
```

#### 2. summernote 작업중
```npm
npm install --save react-summernote

or 

yarn add react-summernote
```

```npm
// summer note는 jquery 기반으로 작동이 된다
// jquery 플로그인 사용
npm install --save jquery

or 

yarn add jquery
```
