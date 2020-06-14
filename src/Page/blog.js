import React, { Component } from 'react';
import PropTypes from 'prop-types';


class blog extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="blog-info">
                    <dl>
                        <dd>{this.props.name}</dd>
                        <dd>React</dd>
                        <dd>Express</dd>
                        <dd>FireBase</dd>
                        <dd>MariaDB</dd>
                        <dd>AWS RDS</dd>
                        <dd>Git Hub</dd>
                    </dl>
                </div>

                <div className="blog-connenct">

                </div>
            </div>
        );
    }
}


blog.propTypes = {
    name:PropTypes.string = 'kk'
};


export default blog;
