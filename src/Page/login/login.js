import React  from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import '../../css/common.css';
import { func } from 'prop-types';

class Login extends React.Component{

    constructor(props){
        super(props);

        console.log('login');

        this.state = {login : ''};
    }

    componentDidMount(){

        this.setState({login : 'Y'})
    }

    exitClose = function(){
        this.props.history.goBack();
    }
    render(){

        let {login} = this.state;
        const { onLogin } = this.props;
        return(
            <div>
                <div id="popup" className={(login == 'Y') ? 'on' : ''}>
                    <div id="popmenu">
                        <p>안녕하세요!</p>
                        <div className="exit" onClick={() => this.exitClose()}>닫기</div>

                        <div>
                            <KaKaoBtn
                                jsKey={'3a793d10b75312cba5600b958e64f3ff'}
                                buttonText='카카오 계정으로 로그인'
                                onSuccess={this.responseKaKao}
                                onFailure={this.responseFail}
                                getProfile={true}
                            />

                            <FacebookLogin
                                appId="2688206104728088"
                                autoLoad={false}
                                fields="name,first_name,last_name,email"
                                callback={onLogin}
                                render={renderProps => (
                                    <div onClick={renderProps.onClick}>facebook</div>
                                )}

                                className="facebook"
                            />
                        </div>
                    </div>
                </div>

            <div className="modal">
                
                  <label className="modal_bg" for="open-pop"></label>
                    <div className="modal_inner">
                        <label className="modal_close" for="open-pop"></label>
                        <h2>popup 제목</h2>
                        <p>내용</p>
                        <div>
                            
                        </div>
                    </div>
            </div>
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