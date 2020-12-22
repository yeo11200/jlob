import React from 'react';


class Header extends React.Component{


    constructor(props){
        super(props);
    }   

    render(){

        let {calendarYM, today} = this.props;

        return(
            <div className="RCA-header-container">
                <h2 className="RCA-header-calendarYM RCA-header-middle">
                    {calendarYM.format("YYYY년MM월")}
                </h2>
                <h3 className="RCA-header-today RCA-header-middle">
                    {today.format("YYYY-MM-DD")}
                </h3>
                <ul className="RCA-header-buttons RCA-header-middle">
                    <li onClick={ () => { this.props.moveMonth(-1) } }>
                        <i className="move-button left-img icon"></i>
                    </li>
                    <li>
                        이동
                    </li>
                    <li  onClick={ () => { this.props.moveMonth(1) } }>
                        <i className="move-button right-img icon"></i>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Header;