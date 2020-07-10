import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSummernote from 'react-summernote';

export class profileWrite extends Component {

    constructor(prop){
        super(prop);
    }

    /**
     * ref 생성 = React.createRef
     * ref의 value 값을 가져오기 위해선 current.value
     * ref의 상태 및 이벤트 추가는 current
     * 받아올땐 this.변수로 받아준다
     */
    proTyle = React.createRef();
    proTitle = React.createRef();
    proContent = React.createRef();

    submitProfile = function(){
        alert(this.proTyle.current.value);
        alert(this.proTitle.current.value);
    }
    render() {
        return (
            <div>
                {/**
                 * 글쓰기 전용
                 * profile type : 포토폴리오, 자기소개서, 희망 팀, 경력증명서
                 * profile Title : 포토폴리오의 제목
                 * profile Content : 포토폴리오 내용
                 */}
                <div>
                    <select ref={this.proTyle}>
                        <option value="portFolio">포트폴리오</option>
                        <option value="aboutMe">자기소개서</option>
                        <option value="hopeTeam">희망하는 팀</option>
                        <option value="career">경력증명서</option>
                    </select><br></br>

                    <input ref={this.proTitle}></input>
                    {/* <ReactSummernote
                        value="Default value"
                        options={{
                        lang: 'ru-RU',
                        height: 350,
                        dialogsInBody: true,
                        toolbar: [
                            ['style', ['style']],
                            ['font', ['bold', 'underline', 'clear']],
                            ['fontname', ['fontname']],
                            ['para', ['ul', 'ol', 'paragraph']],
                            ['table', ['table']],
                            ['insert', [' link', 'picture', 'video']],
                            ['view', ['fullscreen', 'codeview']]
                        ]
                        }}
                        onChange={this.onChange}
                    /> */}

                    <button onClick={() => {
                        this.submitProfile();
                    }}>전송</button>
                </div>
            </div>
        )
    }
}

profileWrite.defaultProps = {
    
}
export default profileWrite
