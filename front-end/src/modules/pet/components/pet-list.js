import React, {Component, PropTypes} from 'react';
import {Grid,Item} from 'semantic-ui-react';
import ScreenHeader from '../../../components/screen-header';
import PetCard from './pet-card';
import PetPagination from'./pet-pagination';
import PetSearch from './pet-search';

class PetList extends Component {

    render() {
        const pets=[
            {
                id: '1',
                name: 'Bob',
                type: 'd',
                size: 'm',
                sex: 'm',
                castrated: true,
                dewormed: true,
                picture: ['https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg'],
                description: 'Extremamente sociável, gosta de correr, latir e roer coisas.'
            },
            {
                id: '2',
                name: 'Aisha',
                type: 'c',
                size: 's',
                sex: 'f',
                castrated: true,
                dewormed: false,
                picture: ['https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg'],
                description: 'Gata quieta, come pouco e não solta pelos. Não se da bem com outros animais.'
            }
        ]
        return (
            <Grid>
                <Grid.Row>
                    <ScreenHeader>Lista de pets para adoção</ScreenHeader>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <PetSearch/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group>
                            {pets.map(pet=><PetCard pet={pet} />)}
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <PetPagination/>
                    </Grid.Column>
                </Grid.Row>


            </Grid>
        )
    }
}

export default PetList;