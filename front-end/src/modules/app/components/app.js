import React, {Component} from 'react';
import {Container, Image, Segment} from 'semantic-ui-react';
import '../../../styles/style.less';
import MainMenu from './main-menu';
import MainFooter from './main-footer';


export default class App extends Component{
	render(){
		return(
			<div>
				<Container>
					<MainMenu />
					<Segment>
						{this.props.children}
					</Segment>
					<MainFooter/>
				</Container>
			</div>
		)
	}
}
