import React, {Component} from 'react';

export default class PetCard extends Component{

    componentDidMount(){
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
    }

    render(){
        debugger;
        return(
            <div className="card">
                <div className="blurring dimmable image">
                    <div className="ui dimmer">
                        <div className="content">
                            <div className="center">
                                <div className="ui inverted button"><i className="red heart icon"></i> Adopt</div>
                            </div>
                        </div>
                    </div>
                    <img  src={this.getProfilePicture()} />
                </div>
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



                    <div className="header">{this.props.pet.getName()}</div>
                    <div className="meta">
                        <div className="ui label">
                            Type
                            <div className="detail">{this.props.pet.getType()}</div>
                        </div>
                        <div className="ui label">
                            Race
                            <div className="detail">{this.props.pet.getRace()}</div>
                        </div>
                        <div className="ui label">
                            Sex
                            <div className="detail"><i className={`${this.props.pet.getSex() ? "man" : "woman"} icon`}></i></div>
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
                            Adopt
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
        if(this.state && this.state.profilePicture){
            return this.state.profilePicture;
        }else{
            return this.props.pet.getProfilePicture();
        }

    }
}