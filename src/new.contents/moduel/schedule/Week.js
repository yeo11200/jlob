import React from 'react'
import moment from 'moment'

class Week extends React.Component {
 
    state = {}
   
    Days = (firstDayFormat,weekIndex) => {
        const _days = [];
     
        for (let i = 0; i < 7; i++) {
     
          const Day = moment(firstDayFormat).add('d', i);
          _days.push({
            yearMonthDayFormat: Day.format("YYYY-MM-DD"),
            getDay: Day.format('D'),
            isHolyDay: false,
            weekIndex
          });
        }
     
        return _days;
      }

      mapDaysToComponents = (Days, calendarMonthYear, selectedDayFormat ,fn = () => { }) => {
        const thisMonth = moment(calendarMonthYear);
        
        return Days.map((dayInfo, i) => {
        
                let className = "date-weekday-label";
            
                if (!thisMonth.isSame(dayInfo.yearMonthDayFormat,'month')) {
                    className = "date-notThisMonth";
                  } else if (i === 0) {
                    className = "date-sun"
                  }else if(i===6){
                    className ="date-sat"
                  }
             
                  if(moment(dayInfo.yearMonthDayFormat).isSame(selectedDayFormat,'day')){
                    className = "selected"
                  }
             
                  return (
                    <div className={"RCA-calendar-day " + className}key={`RCA-${dayInfo.weekIndex}-${i}-day`}onClick={() => fn(dayInfo.yearMonthDayFormat)}>
                      <label className="RCA-calendar-day-label">
                        {dayInfo.getDay}
                      </label>
                    </div>
                  )
            }
        )
    }
  
    render() {
      return (
        <div className="RCA-calendar-week">
            {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat,this.props.weekIndex),
                this.props.ymOfThisCalendar,
                this.props.selected,
                this.props.fn
            )}
        </div>
      )
    }
  }

export default Week;