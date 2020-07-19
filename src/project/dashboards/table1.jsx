import React , {Component} from 'react';
import axios from 'axios';
class Table extends Component {
    // state = {  }
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
        console.log(response)
    })
    .catch(error=>{console.log(error)});
}
    render() { 
        return <h1>Hello World</h1>;
    }
}
export default Table;