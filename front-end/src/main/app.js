import React, { Component } from 'react';

import MainMenu from './app/components/main-menu';
import AnimalCard from './animal/components/pet-card';

export default class App extends Component {
    render() {

        return (
            <div>
                <MainMenu />
                <div className="ui container">
                    <div className="ui segments">
                        <div className="ui segment">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
