export var API_SERVER = window.location.hostname.indexOf('localhost') > -1 ? '//localhost:5000' : '//jinseop-todo-list.herokuapp.com';

// export var API_SERVER = '//13.124.87.240';

// export var API_SERVER = 'https://jinseop-todo-list.herokuapp.com';

const REG_DATA = {
    /** id는 email로만 가능한 정규식 */
    'member_id': /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    /** 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 */
    'memeber_pass': /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
}

const LoginFunction = (callback, data) => {

    if(data.LOGIN_ID !== ''){
        callback(true);
    }else{
        callback(false);
    }
}

/**
 * esma 6 문법
 * 구조분해 할당 
 * team  = '' 선언시 데이터가 안넘어 올 경우, 초기값을 지정이 가능하다.
 */
const LoginData = ({ id, name, nickname, token, team  = ''}) => {

}

const LogOutData = () => {

}

export { REG_DATA, LoginFunction }