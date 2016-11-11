import React, {Component} from 'react';

export default class AnimalCard extends Component{
    render(){
		return(
<div className="card">
    <div className="image">
      <img src="https://s-media-cache-ak0.pinimg.com/originals/89/18/39/8918399e87b106e67ea47a1c7f963a8e.jpg" />
    </div>
    <div className="content">
      <div className="header">Matt Giampietro</div>
      <div className="meta">
        <a>Friends</a>
      </div>
      <div className="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div className= "extra content">
      <span className="right floated">
        Joined in 2013
      </span>
      <span>
        <i className="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>			
		)
    }
}