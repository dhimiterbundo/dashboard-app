import React , {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Table extends Component {
    // state = {  }
componentDidMount(){
 this.getData();
}
getData(){
    axios.get('https://coronavirus.al/api/stats.php').then(response => {
        console.log(response)
    })
    .catch(error=>{console.log(error)});
}
    render() { 
        return <div>  <h1>Hello World</h1>
        <Button variant="contained" color="primary">
        Get Data
      </Button></div>;
    }
}
export default Table;