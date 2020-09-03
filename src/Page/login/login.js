import React  from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

class Login extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const script = document.createElement('script');

        script.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';
        script.async = true;

        document.body.appendChild(script);
        
        let aa = new naver();
        console.log(aa);
    }

    render(){

        return(
            <div>
                <KaKaoBtn
                    jsKey={'06cbf36cb0b25ef2af618a4d87fb333f'}
                    buttonText='카카오 계정으로 로그인'
                    getProfile={true}
                />
                <h2>aaaaaa</h2>
            </div>
        )
    }
}

/**
 * style을 통해서 해당 컴포넌트의 디자인을 직접할수있다.
 */
const KaKaoBtn = styled(KaKaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`

export default Login;