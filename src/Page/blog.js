import React, { Component } from 'react';
import PropTypes from 'prop-types';


class blog extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <dt>
                        <dd>{this.props.name}</dd>
                        <dd>React</dd>
                        <dd>Express</dd>
                        <dd>FireBase</dd>
                        <dd>MariaDB</dd>
                        <dd>AWS RDS</dd>
                        <dd>Git Hub</dd>
                    </dt>
                </div>
            </div>
        );
    }
}


blog.propTypes = {
    name:PropTypes.string = 'kk'
};


export default blog;
