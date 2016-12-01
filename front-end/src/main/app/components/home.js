import React, {Component} from "react";

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component{


    render(){

        const statistics = [
            {
                icon: "child blue",
                value: "257",
                description: this.props.texts['VOLUNTEERS']
            },
            {
                icon: "heart red",
                value: "15",
                description: this.props.texts['ADOPTIONS_THIS_MONTH']
            },
            {
                icon: "money green",
                value: "R$ 1.590,00",
                description: this.props.texts['DONATED_THIS_MONTH']
            }
        ]


        return (
            <div>
                <div className="ui text container">

                    <div className="ui grid">

                        <div className="sixteen wide column">
                            <h2 className="ui center aligned icon header">
                                <i className="circular paw icon"></i>
                                {this.props.texts['WELCOME_TO_ANIMAPP']}
                            </h2>
                        </div>

                        <div className="sixteen wide column center aligned">
                            <p className="ui center aligned">{this.props.texts['WHAT_WE_DO']}</p>
                        </div>

                        <div className="sixteen wide column">
                            <div className="ui stackable three column grid">
                                {statistics.map(this.renderStatistics)}
                            </div>
                        </div>

                        <div className="sixteen wide colum">
                            <div className="ui basic segment">
                                <img src="./resources/img/stray-dog-1.png" className="ui small right floated image" />
                                <p>{this.props.texts['WELCOME_TEXT']}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }


    renderStatistics(statistic){
        return(
            <div className="column">
                <div className="ui tiny statistic">
                    <div className="value">
                        <i className={`${statistic.icon} icon`}></i> {statistic.value}
                    </div>
                    <div className="label">
                        {statistic.description}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        texts: state.languageResources.texts || {}
    }
}

export default connect(mapStateToProps, null)(Home);
