# jlob
[React ProgressBar](https://basketdeveloper.tistory.com/65)
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

<!-- 다중 className을 설정할 경우
  3항연산자로 다이나믹하게 하려면 ()을 사용이용해서 사용해야한다.\
 -->
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

// axios의 parameter은 url, data(객체), header(객체) 사용하면 된다.
axios.get(url, params, header).then().catch(e) 
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


// react에서 string 형의 html을 html 파일로 변형을 한다
dangerouslySetInnerHTML = { {__html : value}}
```


#### 3. cors
```js
/**
 * express에서 cors를 했는데도 에러가 났다
 * 확인은 해보니 localhost를 작성할 땐 http://를 꼭붙혀줘야한다
 * 그렇게 cors를 벗어날수있다.
*/
axios.get('http://localhost:8004/profile', {}).then((response) => {
    console.log(response);
});
```

#### 4. axios header
```js
// 글로벌로 선언해서 사용을 할 수 있다.
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios를 선언
const instance = axios.create({
    // 기본값을 세팅
    // timeout을 보통 0초로 지정
    baseURL = 'https://api.example.com';
});

// 인스턴스의 모든 요청은 2.5초 간만 대기 후 타임아웃 처리합니다.
instance.defaults.timeout = 2500;
```
#### 5. React Oh Tag
```npm
// https://flamingotiger.github.io/frontend/react/react-helmet/
npm install --save react-helmet @types/react-helmet

```

##### 1. og tag란 
###### - 미리보기 제목, 설명, 이미지로 사이트의 정책을 할 수 있고, head에 meta tag에 적어서 사용을한다.

###### og tag 다양한 속성
| 속성 | 뜻 |
| --- | :---: |
| subject | 홈페이지의 주제 |
| title | 홈페이지의 이름 |
| description | 홈페이지의 설명 |
| Keywords | 키워드를 입력 |
| Author | 만들사람 이름 |
| robots | All, index,follow, noindex,follow. index,nofollow, noindex,nofollow|



```html
// a tag에서 href로 메일을 보내려고 하면 mailto를 앞에 붙혀서 사용을 해야한다.

<a href="mailto:yeo11200@hanmail.net">yeo11200@hanmail.net</a>
```


#### react에서 파라메터 추가 하는 방법 
```js
<Link to={'/profile?:pa&:page&:search'}>
</Link>

<Route path="/profile?:pa&:page&:search" component={Compornt}></Route>
```

#### react 컴포넌트가 불리고 나서 import
```js
// React 함수안에 lazy함수가 별도로 있다. lazy란 불리고 나서 사용을 하는 것을 지칭하는데 주로 이미지를 부를 때 사용을 한다

// 그래서 js 파일 같은 경우도 컴포넌트가 불린후 lazy를 주로 사용한다.

// ex)

React.lazy( () => import aaaa from './route/React');

```
