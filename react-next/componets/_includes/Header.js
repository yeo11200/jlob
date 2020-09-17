import Link from 'next/link';
import Router from 'next/router'
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const linkStyle = {
  marginRight: 15
};

const Header = () => {

  let goToHashChange = function(hash){
    //{ shallow: true } : 현재 페이지의 라우트만 바뀐다.
    Router.push(hash);
  }
return(

  <header>
    <Paper square>
      <Tabs 
        aria-label="simple tabs example"
        indicatorColor="primary"
        textColor="primary">
        <Tab label="Item One" onClick={() => goToHashChange('about')}></Tab>
        <Tab label="Item Two" onClick={() => goToHashChange('/')}></Tab>
      </Tabs>
    </Paper>
  </header>
)
};

export default Header;
