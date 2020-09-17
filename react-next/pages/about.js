import React from 'react';
import Layout from '../componets/_includes/Layout';
import {Router} from 'next/router';

class About extends React.Component{

  constructor(props){

    super(props);
    console.log(props.query);
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