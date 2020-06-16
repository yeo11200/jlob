import React from 'react';
import PropTypes from 'prop-types';
// 외부에 있는 React를 불러오기 위해서 사용을 한다.
// 단 별칭을 지어주는게 좋다.
import * as Fun from '../fun';
export default class proFile extends React.Component {

    // 제일 먼저 시작될 함수
    constructor(props){
        super(props);
        console.log(Fun.a());
        console.log(props.match.params.name);
        this.state = {
            menuOn :  'info',
        }
    }

    // component가 시작되기 전에 사용할 함수
    componentWillMount() {
        console.log(this.state.menuOn);
    }

    menuClickOn = function(menu){
        let menuToggle = null;

        // state 값을 받아와서 toggle 형태로 받아준다.
        if(menu == 'info'){
            menuToggle = (this.state.menuOn === 'info') ? '' : 'info';
        }else if(menu === 'project'){
            menuToggle = (this.state.menuOn === 'project') ? '' : 'project';
        }else if(menu === 'announce'){
            menuToggle = (this.state.menuOn === 'announce') ? '' : 'announce';
        }
        this.setState({menuOn : menuToggle});
    }

    render(){
        return(
            <div className="profile-info">
                <div className="profile-about-title">
                    <span>항상 노력하는 지원자 신진섭입니다.</span>
                    <span>총경력 : {this.state.careerDate}</span>
                </div>
                
                <ul className="profile-menu">
                    <li onClick={ () => { this.menuClickOn('info')}}
                        className={(this.state.menuOn === 'info' ? 'on' : '')}
                    >
                        자기소개서
                    </li>
                    <li onClick={ () => { this.menuClickOn('project')}}
                        className={(this.state.menuOn === 'project' ? 'on' : '')}
                    >
                        프로젝트경험
                    </li>
                    <li onClick={ () => { this.menuClickOn('announce')}}
                        className={(this.state.menuOn === 'announce' ? 'on' : '')}
                    >
                        발표내용
                    </li>
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
                <div className={"profile-about-me " + (this.state.menuOn === 'project' ? 'on' : '')}>
                    <dl>
                        <dt>프로젝트 경험</dt>
                        <dd>
                            <div>
                                <span>
                                    7. 에듀서브 수업 마이그레이션
                                    & React Native Web View
                                </span>
                            </div>
                            <div>
                                <span>2020.06 ~ ing</span>
                            </div>
                            <div>
                                <span>
                                    <dl>
                                        <dt>php 7.2</dt>
                                        <dt>angular 1.5</dt>
                                        <dt>javascript</dt>
                                        <dt>aws</dt>
                                        <dt>mariaDB 10.5</dt>
                                        <dt>React Native 0.61</dt>
                                        <dt>Npm</dt>
                                    </dl>
                                </span>
                                <p>프로젝트 내용</p>
                            </div>
                        </dd>
                        <dd>
                            <div>
                                <span>6. 에듀서브 커뮤니티 마이그레이션</span>
                            </div>
                            <div>
                                <span>2020.01 ~ 2020.03</span>
                            </div>
                            <div>
                                <span>
                                    <dl>
                                        <dt>php 7.2</dt>
                                        <dt>angular 1.5</dt>
                                        <dt>javascript</dt>
                                        <dt>aws</dt>
                                        <dt>mariaDB 10.5</dt>
                                        <dt>git</dt>
                                        <dt>C.I</dt>
                                    </dl>
                                </span>
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
                <div className={"profile-about-me " + (this.state.menuOn === 'announce' ? 'on' : '')}>
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