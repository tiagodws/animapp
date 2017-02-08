import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import MainMenu from './app/components/main-menu';
import {changeLanguage, loadLanguage} from './app/actions/language-actions'

class App extends Component {

    componentDidMount(){
        this.props.changeLanguage('en');
        this.props.loadLanguage('en');
    }

  render() {

        return (
            <div>
                <MainMenu />
                <div className="ui container">
                    <div className="ui segments" >
                        <div className="ui segment"  style={{minHeight: "85vh"}}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeLanguage, loadLanguage}, dispatch);
}

function mapStateToProps(state){
    return{
        texts: state.languageResources.texts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
