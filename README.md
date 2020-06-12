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

##### 1. firebase를 가지고 웹 push를 만들 예정
```npm 
npm install --save firebase
```

```js
import FireBase from 'firebase';

FireBase.initializeApp();
```
