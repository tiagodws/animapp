import React,{Component} from 'react';
import {Item, Label, Button, Icon} from 'semantic-ui-react';

class PetCard extends Component{
    render(){
        const {pet} = this.props;
        return(
            <Item>
                <Item.Image src={pet.picture} size='small'></Item.Image>

                <Item.Content>
                    <Item.Header as='a'>{pet.name}</Item.Header>
                    <Item.Description>
                        {pet.description}
                    </Item.Description>
                    <Item.Extra>
                        <Label icon={pet.sex =='m' ? 'man' : 'woman'} content={pet.sex == 'm' ? 'Macho' : 'Fêmea'} />
                        {pet.castrated ? <Label>Castrado</Label> : ''}
                        {pet.dewormed ? <Label>Vermifugado</Label> : ''}
                        {this.renderPetSizeTag(pet.size)}
                        <Button color='red' floated='right'>
                            <Icon name='heart'/>Adotar
                        </Button>
                        <Button color='green' floated='right'>
                            <Icon name='money'/>Doar
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }

    renderPetSizeTag(size){
        switch(size){
            case 's':
                return <Label>Porte pequeno</Label>;
            case 'm':
                return <Label>Porte médio</Label>;
            case 'b':
                return <Label>Porte grande</Label>;
        }
    }
}

export default PetCard;