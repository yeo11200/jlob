import React from 'react';
import Layout from '../componets/_includes/Layout';
import {Router} from 'next/router';
const queryString = require('query-string');

class About extends React.Component{

  constructor(props){

    super(props);
  }

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);

    console.log(parsed);
    console.log('window.innerHeight', window.innerHeight);
  }
  render(){
    return(
      <Layout>
        <p>About Next.js</p>
      </Layout>
    )
  }
}

export default About