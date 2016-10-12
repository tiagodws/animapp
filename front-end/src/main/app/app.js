import React, { Component } from 'react';

import MainMenu from './components/main-menu';

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