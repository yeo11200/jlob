import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

import ReactQuill from 'react-quill'; // ES6\
import ReactQuillImageUploader, {saveImageSrc} from 'react-quill-image-uploader' // react-quill 이미지 업로드시 필요한 package
import 'react-quill/dist/quill.snow.css'; // ES6
import * as EditorConfig from './editor.config';
import $ from 'jquery';
import queryString from 'query-string';

// css imports
import '../../index.css';

// imports for summernote
// import 'react-summernote/dist/react-summernote.css'; // import styles
// import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

// import 'react-summernote/dist/react-summernote.css'; // import styles
// import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

// Import bootstrap(v3 or v4) dependencies


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
        console.log(this.proTyle.current.value);
        console.log(this.proTitle);
        // ReactQuill = 해당 editor에 대한 값
        // https://github.com/zenoamaro/react-quill
        console.log(this.proTitle.state.value);
        // var postData = {
        //     'pro_type' : this.proTyle.current.value,
        //     'pro_title' : this.proTitle.current.value
        // }

        // axios.post('http://localhost:8004/profile', postData).then(response => {

        // });
    }

    /**
     * componentWillMount : render 전에 실행이 된다 그래서 에러가 해당하는 id나 class로 사용하는 event를 사용하면 에러가 발생
     * componentDidMount : render 이후 발생하는 id와 class를 이용한 event를 사용하기 좋다.
     */
    componentDidMount(){
        console.log("componentDidMount");

    }
    
    modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false]}],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'color'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, 
            { 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }, 'link', 'emoji'],
            ['link', 'image', 'video'],
            ['clean']
          ],
          clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
          },
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
                    </select>
                    <br></br>
                    <input id="aaa" ref={this.proTitle}></input>
                    <ReactQuill
                        ref={(el) => this.proTitle = el}
                        formats={EditorConfig.formats}
                        modules={this.modules}
                        theme="snow" 
                    />

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
