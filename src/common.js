export var API_SERVER = '//jinseop-todo-list.herokuapp.com';

// export var API_SERVER = '//13.124.87.240';

// export var API_SERVER = 'https://jinseop-todo-list.herokuapp.com';

const REG_DATA = {
    /** id는 email로만 가능한 정규식 */
    'member_id': /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    /** 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 */
    'memeber_pass': /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
}


export { REG_DATA }