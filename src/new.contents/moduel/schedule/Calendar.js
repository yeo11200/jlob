import React from 'react'
import DataCalender from './DataCalender'
import moment from 'moment'
import Week from './Week'

class Calendar extends React.Component {

    constructor(props){
        super(props)
    }

    /**
     * 
     * @param {*} monthYear 
     * @param {*} selected 
     * @param {*} clickFn : callback event
     */
    Weeks = (monthYear,selected,clickFn) => {
        const firstDayOfMonth = moment(monthYear).startOf('month');
        const firstDateOfMonth = firstDayOfMonth.get('d');
     
        const firstDayOfWeek = firstDayOfMonth.clone().add('d', -firstDateOfMonth);
        // const lastDayOfThisCalendar = dayOfThisCalendar.clone().add('d', 6 * 7);
     
        const _Weeks = [];
     
        for (let i = 0; i < 6; i++) {
            _Weeks.push((
                <Week key={`RCA-calendar-week-${i}`}
                weekIndex={i}
                ymOfThisCalendar={firstDayOfMonth.format("YYYY-MM")}
                firstDayOfThisWeekformat={firstDayOfWeek.clone().add('d', i * 7).format("YYYY-MM-DD")}
                selected={selected}
                fn={clickFn}
                />
              ))
        }
        return _Weeks
    }

    render(){

        return(
            <div className="RCA-calendar-container">
                <DataCalender dates={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}/>
                {this.Weeks(this.props.YM,this.props.selected,this.props.changeSelected)}
            </div>
        )
        
    }
}


export default Calendar;