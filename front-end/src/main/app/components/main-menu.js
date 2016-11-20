import React, { Component} from 'react';
import { Link } from 'react-router';

export default class MainMenu extends Component{
  render(){
    return(
        <div className="ui stackable  menu">
          <Link className="item" to="/">Home </Link>
            <Link className="item" to="/pet/new">New </Link>
          <Link className="item" to="/adopt">Adopt </Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
            <div className="item">
              <div className="ui buttons">
                <button className="ui positive button">Sign up</button>
                <div className="or"></div>
                <button className="ui button">Login</button>
              </div>
            </div>
          </div>
        </div>

    )
  }
}
