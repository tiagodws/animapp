import React, {Component} from 'react';

export default class AnimalCard extends Component{
    render(){
		return(
			<div className="card">
				<img className="card-img-top img-fluid" src="https://s-media-cache-ak0.pinimg.com/originals/89/18/39/8918399e87b106e67ea47a1c7f963a8e.jpg" alt="Animal" />
				<div className="card-block">
					<h4 className="card-title">Bob Cachorro</h4>
					<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra laoreet consectetur. Nunc lobortis sit amet urna in ullamcorper. In vel risus in tortor sollicitudin dictum. Vivamus lectus risus, tempus et orci ac, bibendum interdum leo. Duis id arcu laoreet, volutpat libero eget, tempor tortor.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					<button type="button btn-sm" className="btn btn-success">Adotar</button>
					<button type="button btn-sm" className="btn btn-info">Info</button>	
					<button type="button btn-sm" className="btn btn-warning">Denunciar</button>					
				</div>
			</div>			
		)
    }
}