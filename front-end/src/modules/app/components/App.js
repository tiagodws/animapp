import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import '../../../styles/style.less';


export default class App extends Component{
	render(){
		return(
			<div>
				<h1>My amazing app</h1>
				<Container>
					{this.props.children}
				</Container>
			</div>
		)
	}
}
