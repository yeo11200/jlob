import React from 'react';
import PropTypes from 'prop-types';

export default class proFile extends React.Component {

    // 제일 먼저 시작될 함수
    constructor(props){
        super(props);
        
        console.log(props.match.params.name);
        this.state = {
            menuOn :  '',
        }
    }

    // component가 시작되기 전에 사용할 함수
    componentWillMount() {
        console.log(this.state.menuOn);
    }

    menuClickOn = function(menu){
        console.log(menu);
        this.setState({menuOn : menu})
    }

    render(){
        return(
            <div className="profile-info">
                <div className="profile-about-title">
                    <span>항상 노력하는 지원자 신진섭입니다.</span>
                </div>
                
                <ul className="profile-menu">
                    <li onClick={ () => { this.menuClickOn('info')}}>자기소개서</li>
                    <li onClick={ () => { this.menuClickOn('project')}}>프로젝트경험</li>
                    <li onClick={ () => { this.menuClickOn('announce')}}>발표내용</li>
                </ul>

                <div className={"profile-about-me " + (this.state.menuOn === 'info' ? 'on' : '')}>
                    <dl>
                        <dt>자기소개</dt>
                        <dd>
                            <p>
                                안녕하세요. 신진섭입니다
                                지금은 이력서 테스트 중입니다.
                                {this.props.match.params.name}
                            </p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>프로젝트 경험</dt>
                        <dd>
                            <span>6. 프로젝트 경험</span>
                            <div>
                                <p>사용한 기술</p>
                                <p>프로젝트 내용</p>
                            </div>
                        </dd>
                        <dd>
                            <span>5. 프로젝트 경험</span>
                            <div>
                                <p>사용한 기술</p>
                                <p>프로젝트 내용</p>
                            </div>
                        </dd>
                        <dd>
                            <span>4. 프로젝트 경험</span>
                            <div>
                                <p>사용한 기술</p>
                                <p>프로젝트 내용</p>
                            </div>
                        </dd>
                        <dd>
                            <span>3. 프로젝트 경험</span>
                            <div>
                                <p>사용한 기술</p>
                                <p>프로젝트 내용</p>
                            </div>
                        </dd>
                        <dd>
                            <span>2. 프로젝트 경험</span>
                            <div>
                                <p>사용한 기술</p>
                                <p>프로젝트 내용</p>
                            </div>
                        </dd>
                        <dd>
                            <span>1. 프로젝트 경험</span>
                            <div>
                                <p>사용한 기술</p>
                                <p>프로젝트 내용</p>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>발표</dt>
                        <dd>
                            1. 발표 제목
                            <span> 발표 ppt url</span>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}

// props의 타입을 지정해준다
// 부모로 부터 받은 값을 이야기한다
proFile.defaultProps = {
    name: PropTypes.string,
}