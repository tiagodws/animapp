import React, { Component} from 'react';
import { Link } from 'react-router';

export default class MainMenu extends Component{
    render(){
        return(
            <div className="col-xs-12">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-principal-collapse" aria-expanded="false">
                                <span className="sr-only">Menu</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="menu-principal-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/"}>Inicio</Link></li>
                            <li><Link to={"/animal/new"}>Animal</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}
