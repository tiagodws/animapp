import React, {Component} from 'react';
import {Divider, Header, Container} from 'semantic-ui-react';

export default class ScreenHeader extends Component{
    render(){
        return(
            <div>
                <Divider hidden />
                <Container textAlign='center'>
                    <Header as='h2' centered>{this.props.children}</Header>
                </Container>
            </div>
        )
    }
}