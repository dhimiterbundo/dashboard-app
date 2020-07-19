import React from 'react';
import './App.css';
import Header from './project/layout/header';
import Table from './project/dashboards/table1';

function App() {
    return (
        <div className="App" >
        <Header> </Header> 
        <Table > </Table> 
        <div> Footer </div> 
        </div>
    );
}

export default App;