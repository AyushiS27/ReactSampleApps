import React from 'react';
import {connect} from 'react-redux';
import {actionIncrementCount} from './reducer';

class Blogs extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <h2 onClick={() => { console.log("On click h2");this.props.actionIncrementCount(); }}>BLOGS {this.props.count}</h2>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        count: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actionIncrementCount : () => {dispatch(actionIncrementCount())}
    }
}
export default connect(mapStateToProps, {actionIncrementCount})(Blogs);