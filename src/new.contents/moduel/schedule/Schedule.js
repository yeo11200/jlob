import React from 'react'
import moment from 'moment'
import Header from './Header'
import Calendar from './Calendar';

class Schedule extends React.Component{

    constructor(props){

        super(props);

        
        /**
         * 부모 컨포먼트에서 오늘의 날짜를 해야하는 이유는 자식의 Calnder에도 데이터를 넘겨줘야하기 때문에
         * 부모 컴포넌트에서 작업을 하고, 해당 하는 Event를 사용한다.
         */
        this.state = {
            calendarYM : moment(),
            today : moment(),
            selected : moment().format("YYYY-MM-DD")
        }
    }

    /**
     * 하위 컴포넌스 전달시 defult의 값
     */
    // static defaultProps = {
    //     clickFn : (state)=>{
    //         console.log(state);
    //     }
    // }

    clickFn = (state) => {
        console.log(state);
    }
    /**
     * @param {*} month : 해당 날짜를 전달
     * 
     * 자식 컴포넌스에 이벤트를 전달 및, state 값 변경
     */
    moveMonth = (month) => {
        this.setState({
            calendarYM : this.state.calendarYM.add(month,'M'),
        })

        console.log(this.state.calendarYM.format('YYYY-MM'));

        let data = this.state.calendarYM.format('YYYY-MM');

    }

    /**
     * 
     * @param {*} clickedDate : 선택한 날짜의 데이터
     * 
     * click event 발생할 경우 발생하는 event
     * 데이터 초기화
     */
    changeSelected = (clickedDate) =>{
 
        
        if(moment(clickedDate).isSame(this.state.selected,'day')){
            this.props.clickFn(clickedDate);
            return;
        }
 
        this.setState({
            selected : clickedDate
        })
 
        /**
         * clickFn 함수 
         */
        this.clickFn(clickedDate);
        
        /**
         * moment 함수 
         * isBefore(date, key) : defult key == 'day'
         * 작은 지 여부, key 값에 따라서 true / false 를 탄다
         * 
         * isAfter(date, key) : defult key == 'day'
         * 큰 지 여부, key 값에 따라서 true / false 를 탄다
         */
        if(moment(clickedDate).isBefore(this.state.calendarYM,'month')){
            this.moveMonth(-1);
        }else if(moment(clickedDate).isAfter(this.state.calendarYM,'month')){
            this.moveMonth(1);
        }
    }

    render(){

        let {calendarYM, today} = this.state;

        return(
            <div className="test-layout">
                <div className="RCA-app-container">
                    <Header 
                        calendarYM={calendarYM} 
                        today={today} 
                        moveMonth={this.moveMonth}>
                    </Header>
                    <Calendar 
                        YM={calendarYM.format("YYYY-MM-DD")}                        
                        selected={this.state.selected}
                        changeSelected={this.changeSelected}>
                    </Calendar>
                </div>
            </div>
            
        )
    }
}

export default Schedule;