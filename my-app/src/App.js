import './App.css';
import TreeList from './atlassian/treeList';

import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return(
            <div>
                <TreeList/>
            </div>
        )
    }
}

export default App;
