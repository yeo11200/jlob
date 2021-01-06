const React = require('react');
const queryString = require('query-string');

class Auto extends React.Component{

    constructor(props){
        super(props);

        var query = queryString.parse(props.location.search);

        console.log(query.id);

        this.state = {
            id : atob(query.id)
        }
    }

    componentDidMount(){

        console.log(this.state.id);

    }

    render(){

        return(
            <div>검증</div>
        )
    }
}

export default Auto;