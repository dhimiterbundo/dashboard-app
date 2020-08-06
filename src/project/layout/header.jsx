import React , {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';


class Header extends Component {
     useStyles = makeStyles({
        root: {
          flexGrow: 1,
          maxWidth: 500,
        },
      });
      
    // state = {  }
    render() { 
        return (
            <Paper square>
              <Tabs
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs example"
              >
                <Tab icon={<HomeIcon />} aria-label="phone" />
                <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                <Tab icon={<PersonPinIcon />} aria-label="person" />
              </Tabs>
            </Paper>
          );
     
    }
}
export default Header;