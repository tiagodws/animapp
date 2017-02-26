import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

export default class ScreenDescription extends Component{
    render(){
        return(
            <Container text>
                {this.props.children}
            </Container>
        )
    }
}