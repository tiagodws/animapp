import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class ShelterNew extends Component{

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return(
            <div>
                Shelter New
            </div>
        )
    }
}

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelterNew);