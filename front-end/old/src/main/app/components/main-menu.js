import React, { Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeLanguage, loadLanguage} from '../actions/language-actions';

class MainMenu extends Component{
    render(){
        return(
            <div className="ui stackable  menu">
                <Link className="item" to="/">{this.props.texts['HOME_BUTTON']}</Link>
                <Link className="item" to="/pet/new">{this.props.texts['REGISTER_PET_BUTTON']}</Link>
                <Link className="item" to="/pet/adopt">{this.props.texts['ADOPT_PET_BUTTON']} </Link>
                <div className="right menu">
                    <div className="item">
                        <i className="br flag" onClick={()=>this.onFlagClick('br')}></i>
                        <i className="us flag" onClick={()=>this.onFlagClick('en')}></i>
                    </div>
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

    onFlagClick(lang){
        if(this.props.lang != lang) {
            this.props.changeLanguage(lang);
            this.props.loadLanguage(lang);
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeLanguage, loadLanguage}, dispatch);
}

function mapStateToProps(state){
    return{
        lang: state.languageResources.lang,
        texts: state.languageResources.texts || {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
