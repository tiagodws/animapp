import React, { Component } from 'react';

import MainMenu from './app/components/main-menu';
import AnimalCard from './animal/components/pet-card';

export default class App extends Component {
  render() {

    return (
        <div>
			<MainMenu />
			{this.props.children}
        </div>
    );
  }
}
