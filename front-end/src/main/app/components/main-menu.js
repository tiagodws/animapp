import React, { Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class MainMenu extends Component{
  render(){
    return(
        <div className="ui stackable  menu">
          <Link className="item" to="/">{this.props.texts['HOME_BUTTON']}</Link>
            <Link className="item" to="/pet/new">{this.props.texts['REGISTER_PET_BUTTON']}</Link>
          <Link className="item" to="/pet/adopt">{this.props.texts['ADOPT_PET_BUTTON']} </Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder={this.props.texts['SEARCH']} />
                <i className="search link icon"></i>
              </div>
            </div>
            <div className="item">
              <div className="ui buttons">
                <button className="ui positive button">Sign up</button>
                <div className="or"></div>
                <Link to="/login"><button className="ui button">Login</button></Link>
              </div>
            </div>
          </div>
        </div>

    )
  }
}



function mapStateToProps(state){
    debugger;
    return{
        texts: state.languageResources.texts || {}
    }
}

export default connect(mapStateToProps, null)(MainMenu);
