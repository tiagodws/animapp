import React, { Component } from 'react';

import MainMenu from './app/components/main-menu';
import AnimalCard from './animal/components/animal-card';

export default class App extends Component {
  render() {
    return (
        <div>
			<MainMenu />
				<div className="row">
					<div className="col-xs-12">
					
						<div className="col-xs-12 col-md-4">
							<AnimalCard />
						</div>
						
						<div className="col-xs-12 col-md-4">
							<AnimalCard />
						</div>
						
						<div className="col-xs-12 col-md-4">
							<AnimalCard />
						</div>


					</div>
				</div>
			{this.props.children}
        </div>
    );
  }
}
