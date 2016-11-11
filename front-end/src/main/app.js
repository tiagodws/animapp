import React, { Component } from 'react';

import MainMenu from './app/components/main-menu';
import AnimalCard from './animal/components/animal-card';

export default class App extends Component {
  render() {
    return (
        <div>
			<MainMenu />
				<div className="ui link cards">
					<AnimalCard />
					<AnimalCard />
					<AnimalCard />
					<AnimalCard />
					<AnimalCard />
					<AnimalCard />
				</div>
			{this.props.children}
        </div>
    );
  }
}
