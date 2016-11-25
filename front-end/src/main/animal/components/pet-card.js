import React, {Component} from 'react';

export default class PetCard extends Component{

    componentDidMount(){
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
    }

    render(){
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
                    <img  src={this.props.pet.getProfilePicture()} />
                </div>
                <div className="content">

                    <div className="ui three column grid">
                        {this.props.pet.getPictures().map((picture, index)=>{
                              return(
                                  <div className="column oi">
                                      <div className="ui segment">
                                          <img className="ui image" src={picture} />
                                      </div>
                                  </div>
                              )
                          })
                        }
                    </div>



                    <div className="header">{this.props.pet.getName()}</div>
                    <div className="meta">
                        <a>Waifu</a>
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
}