import React from 'react';
import PropTypes from 'prop-types';

export default class proFile extends React.Component {

    constructor(props){
        super(props);
        
        console.log(props.match.params.name);
        this.state = {

        }
    }


    render(){
        return(
            <div className="profile-info">
                <div>
                    <span>항상 노력하는 지원자 신진섭입니다.</span>
                </div>

                <div>
                    <dl>
                        <dt>자기소개</dt>
                        <dd>
                            <p>
                                안녕하세요. 신진섭입니다
                                지금은 이력서 테스트 중입니다.
                                {this.props.match.params.name}
                            </p>
                        </dd>
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