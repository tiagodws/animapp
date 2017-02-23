import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class PetCard extends Component{

    componentDidMount(){
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
    }

    render(){
        return(
            <div className="card">
                <img className="ui medium fluid image" src={this.getProfilePicture()} />
                <div className="content">
                    <div className="ui three column grid">
                        {this.props.pet.getPictures().map((picture, index)=>{
                            if(picture != this.getProfilePicture()) {
                                return (
                                    <div className="column" onClick={()=> this.changeProfilePicture(picture).bind(this)} style={{cursor:"pointer"}}>
                                        <div className="ui segment">
                                            <img className="ui image" src={picture} />
                                        </div>
                                    </div>
                                )
                            }
                          })
                        }
                    </div>
                    <div className="header">{this.props.pet.getName() || this.props.texts['UNDEFINED']}</div>
                    <div className="meta">
                        <div className="ui label">
                            {this.props.texts['SPECIE']}
                            <div className="detail">{this.props.pet.getSpecie() || this.props.texts['UNDEFINED']}</div>
                        </div>
                        <div className="ui label">
                            {this.props.texts['RACE']}
                            <div className="detail">{this.props.pet.getRace() || this.props.texts['UNDEFINED']}</div>
                        </div>
                        <div className="ui label">
                            {this.props.texts['SEX']}
                            <div className="detail"><i className={`${this.props.pet.getSex() == 'M' ? 'man' : 'woman'} icon`}></i></div>
                        </div>
						<div className="ui label">
                            {this.props.texts['UNDEFINED']}
                            <div className="detail">{this.props.pet.getPublicationDate().toDateString()}</div>
                        </div>
                    </div>
                    <div className="description">
                        {this.props.pet.getDescription()}
                    </div>
                </div>
                <div className= "extra content">
                    <span className="floated left">
                        <button className="ui labeled red icon button">
                            <i className="heart icon"></i>
                            {this.props.texts['ADOPT']}
                        </button>
                        <button className="ui blue icon button">
                            <i className="info icon"></i>
                        </button>
                        <button className="ui orange icon button">
                            <i className="meh icon"></i>
                        </button>
                    </span>
                </div>
            </div>
        )
    }

    changeProfilePicture(picture){
        this.setState({profilePicture: picture})
    }

    getProfilePicture(){
        return (this.state && this.state.profilePicture) ?
            this.state.profilePicture : this.props.pet.getProfilePicture();
    }
}



function mapStateToProps(state){
    return{
        texts: state.languageResources.texts || {}
    }
}

export default connect(mapStateToProps, null)(PetCard);