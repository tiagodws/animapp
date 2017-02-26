import React, { Component } from 'react';
import {Container, Header, Statistic, Icon, Divider, Grid, Image, Segment} from 'semantic-ui-react';
import {Link} from 'react-router';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container text>

                <Grid stackable>
                    <Grid.Row>
                        <Divider hidden />
                        <Header as='h2'>Seja bem vindo ao Animapp</Header>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={10}>
                            <p>
                                Nosso objetivo é ajudar pets abandonados a encontrarem um novo lar!
                            </p>
                            <p>
                                Através desta plataforma você pode <Link to='/pets'>adotar um pet</Link>, se <Link to='/shelters/new'>cadastrar como lar temporário</Link> ou <Link to='donations'>fazer uma doação</Link>.
                            </p>
                            <p>Se você encontrou um pet abandonado e precisa de ajuda, você também pode <Link to='/pets/new'>cadastra-lo na plataforma</Link>.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={6}>
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
                </Grid>
            </Container>
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
