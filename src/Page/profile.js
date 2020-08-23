import React from 'react';
import PropTypes, { array } from 'prop-types';
import axios from 'axios';
// 외부에 있는 React를 불러오기 위해서 사용을 한다.
// 단 별칭을 지어주는게 좋다.
import * as Fun from '../fun';
import ProfileWrite from './write/profileWrite';
import * as COMMON from '../common';
import Char from './chat';

export default class proFile extends React.Component {

    // 제일 먼저 시작될 함수
    constructor(props){
        super(props);
        this.state = {
            menuOn :  'info',
            profile : [],
            careerDate : Fun.a(),
            isLoding : false,
            profilea : 'N',
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
            <div className={'profile-write ' + (this.state.profilea == 'N' ? 'profile-info' : '') + ' ssss'}>
                <div className="profile-about-title">
                    <span>항상 노력하는 지원자 신진섭입니다.{this.state.profilea}</span>
                    <span>총경력 : {this.state.careerDate}</span>
                </div>
                <div className={"profile-about-me"}>
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

                    <div>
                        <span>Blog : </span><a href="https://blog.naver.com/sksksms2">https://blog.naver.com/sksksms2</a>
                    </div>
                    <div>
                        <span>GitHub : </span><a href="https://github.com/yeo11200">https://github.com/yeo11200</a>
                    </div>
                    <div>
                        <span>Contact : </span><a href="mailto:yeo11200@hanmail.net">yeo11200@hanmail.net</a>
                    </div>
                </div>

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

                <div>
                    <ul>
                        {
                            isLoding ? profile.list.map((value, index) => {

                                if(value.pro_type == 'profile'){
                                    return(
                                        <div className="profile">
                                            <span>{value.pro_title}</span>
                                            {
                                                /**
                                                 * dangerouslySetInnerHTML = v-html, ng-html과 같은 역할
                                                 * __html : value, 
                                                 */
                                            }
                                            <div dangerouslySetInnerHTML={{__html : value.pro_content}}></div>
                                        </div>
                                    )
                                }
                            }) : <li>Loding</li>
                        }
                    </ul>
                </div>
                <div className={"profile-about-me"}>
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
                 * 
                 */}
                 <div className={'profile-write ' + (this.state.profilea == 'Y' ? 'on' : '') + ' ssss'}>
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
