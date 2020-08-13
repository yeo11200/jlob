import React from 'react';
import PropTypes, { array } from 'prop-types';
import axios from 'axios';
// 외부에 있는 React를 불러오기 위해서 사용을 한다.
// 단 별칭을 지어주는게 좋다.
import * as Fun from '../fun';
import ProfileWrite from './write/profileWrite';
import * as COMMON from '../common';
import List from './list/list';

export default class proFile extends React.Component {

    // 제일 먼저 시작될 함수
    constructor(props){
        super(props);
        this.state = {
            menuOn :  'info',
            profile : [],
            careerDate : Fun.a(),
            isLoding : false,
        }
        
    }

    getList = async () => {
        await axios.get(COMMON.API_SERVER + '/profile', {}).then((response) => {
            var items = response.data;
            this.setState({
                profile : items.data,
                isLoding : true
            })

            console.log(this.state.profile);
        }).catch(response => {
            this.setState({
                profile : [],
                isLoding : false
            })
        });
    }

    // component가 시작되기 전에 사용할 함수
    async componentDidMount () {
        console.log(this.state.menuOn);

        console.log(this.state);  
        await this.getList();

        console.log(this.state);       
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
        const {profile, isLoding } = this.state;

        console.log(profile);
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
                <List list={profile}></List>
                <ul>
                {
                    isLoding ? profile.carrer.map((value, index) =>{
                        return (
                            <li>
                                <div>
                                    <span>{value.mc_compony}</span>
                                </div>
                                <div>
                                    <span>{Fun.dateYmdFilter(value.mc_startdate)}</span> ~ 
                                    <span>{Fun.dateYmdFilter(value.mc_enddate)}</span>
                                </div>
                                <div>
                                    <span>{value.mc_position}</span>
                                </div>
                                <div>
                                    <span>{value.mc_project_name}</span>
                                </div>
                                
                    
                            {
                                // map {} => 안에는 return () 이 필수로 들어가야한다. 
                                // react에서는 {} 안에는 습관처럼 return을 적자
                                value.project.map((value1, index) => {
                                    return (
                                        <ul>
                                            <span className="projectTitle">{index + 1}{value1.pro_title}</span>
                                            <li>{value1.pro_content}</li>
                                            <li>{Fun.dateYmdFilter(value1.pro_start_date)}</li>
                                            <li>{Fun.dateYmdFilter(value1.pro_end_date)}</li>
                                            <li>{value1.pro_skill_set}</li>
                                        </ul>
                                    )
                                })
                            }
                        
                            </li>
                        )
                    }) : <li>Loding</li>
                }
                </ul>
                <div className={"profile-about-me " + (this.state.menuOn === 'info' ? 'on' : '')}>
                    <dl>
                        <dt>신진섭 </dt>
                        <dd>
                            <p>저는 <code>_ _ _ _ _</code> 개발자가 되고 싶습니다.</p>
                            <div>
                                1. 테스트 코드를 짤 짜는<br></br>
                                2. 완성보다 버그를 줄이는<br></br>
                                3. 책임감을 가지는<br></br>
                                4. 남들보다 혹시 남과 같이 노력하는<br></br>
                            </div> 
                        </dd>
                        <dd>
                            <p>저는 <code>_ _ _ _ _</code> 팀원이 되고 싶습니다.</p>
                            <div>
                                1. 테스트 코드를 짤 짜는<br></br>
                                2. 완성보다 버그를 줄이는<br></br>
                                3. 책임감을 가지는<br></br>
                                4. 남들보다 혹시 남과 같이 노력하는<br></br>
                            </div> 
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
                {/**
                 * 글쓰기 포맷
                 * 글쓰기시 활성화 component
                 * writer 클릭시 class 활성화 active
                 */}
                 <div>
                     <ProfileWrite></ProfileWrite>
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
