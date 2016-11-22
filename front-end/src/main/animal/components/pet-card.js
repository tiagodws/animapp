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
                    <img  src={this.props.animal.image} />
                </div>
                <div className="content">

                    <div className="ui three column grid">
                        <div className="column">
                            <div className="ui segment">
                                <img className="ui image" src={this.props.animal.image} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui segment">
                                <img className="ui image" src={this.props.animal.image} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui segment">
                                <img className="ui image" src={this.props.animal.image} />
                            </div>
                        </div>
                    </div>



                    <div className="header">{this.props.animal.name}</div>
                    <div className="meta">
                        <a>Waifu</a>
                    </div>
                    <div className="description">
                        {this.props.animal.description}
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