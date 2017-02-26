import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import '../../../styles/style.less';
import MainMenu from './main-menu';


export default class App extends Component{
	render(){
		return(
			<div>
				<Container>
					<MainMenu />
					{this.props.children}
				</Container>
			</div>
		)
	}
}
