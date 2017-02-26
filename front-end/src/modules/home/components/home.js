import React, { Component } from 'react';
import {Container, Header, Statistic, Icon, Divider, Grid, Image, Embed, Button} from 'semantic-ui-react';
import {Link} from 'react-router';
import ScreenHeader from '../../../components/screen-header';
import ScreenDescription from '../../../components/screen-description';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid stackable>
                <Grid.Row>
                    <ScreenHeader>Seja bem vindo ao Animapp!</ScreenHeader>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <ScreenDescription>
                            <p>
                                Nosso objetivo é ajudar pets abandonados a encontrarem um novo lar!
                            </p>
                            <p>
                                Através desta plataforma você pode <Link to='/pets'>adotar um pet</Link>, se <Link to='/shelters/new'>cadastrar como lar temporário</Link> ou <Link to='donations'>fazer uma doação</Link>.
                            </p>
                            <p>Se você encontrou um pet abandonado e precisa de ajuda, você também pode <Link to='/pets/new'>cadastra-lo na plataforma</Link>.
                            </p>
                            <Button size='huge' color='red' fluid><Icon name='heart'/>Adotar</Button>
                        </ScreenDescription>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src='/assets/image/cat_pet.png' size='small' floated='right'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row><Divider horizontal>Este Mês</Divider></Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Statistic.Group widths='three' size='mini'>
                            {this.renderStatistic({icon:{name:'heart', color:'red'}, value:15, path:'/pets', description:'Adoções'})}
                            {this.renderStatistic({icon:{name:'home', color:'blue'}, value:17, path:'/shelters/new', description:'Lares temporários'})}
                            {this.renderStatistic({icon:{name:'money', color:'green'}, value:'R$ 1.750,50', path:'/donations', description:'Em doações'})}
                        </Statistic.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row><Divider horizontal>Adote</Divider></Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Embed
                            id='jc5XQSVeQ2c'
                            placeholder='./assets/image/animapp_logo.png'
                            source='youtube'

                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    renderStatistic(statistic){
        return(
            <Statistic>
                <Statistic.Value>
                    <Link to={statistic.path}>
                        <Icon name={statistic.icon.name} color={statistic.icon.color} />
                        {statistic.value}
                    </Link>
                </Statistic.Value>
                <Statistic.Label>{statistic.description}</Statistic.Label>
            </Statistic>
        )
    }
}

export default Home;
