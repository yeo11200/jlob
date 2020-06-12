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
            <div>
                <div>
                    <span>항상 노력하는 지원자 신진섭입니다.</span>
                </div>

                <div>
                    <dd>
                        <p>
                            안녕하세요. 신진섭입니다
                            지금은 이력서 테스트 중입니다.
                            {this.props.match.params.name}
                        </p>
                    </dd>
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