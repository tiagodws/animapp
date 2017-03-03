import React, {Component, PropTypes} from 'react';
import {Grid, Form, Divider, Checkbox, Image, Button} from 'semantic-ui-react';
import ScreenHeader from '../../../components/screen-header';
import ScreenDescription from '../../../components/screen-description';
import ImageUploader from '../../../components/image-uploader';

export default class PetNew extends Component{

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return(
            <Grid stackable>
                <Grid.Row>
                    <ScreenHeader>Cadastrar Pet</ScreenHeader>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <ScreenDescription>
                            <p>Preencha todos os campos corretamente para cadastrar o pet, afinal, quanto mais informações e fotos você por, mais fácil será para encontrarmos um novo lar!</p>
                            <p>Por gentileza não abuse dessa página.</p>
                        </ScreenDescription>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Image src='/assets/image/dog_pet.png' size='tiny'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row><Divider horizontal>Formulário</Divider></Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Group>
                                <Form.Input label='Nome' width={16} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Select label='Tipo' options={[{key:'d', text:'Cão', value:'c'}, {key:'c', text:'Gato', value:'c'}]} width={4} />
                                <Form.Select label='Porte' options={[{key:'b', text:'Grande', value:'b'}, {key:'m', text:'Médio', value:'m'}, {key:'p', text:'Pequeno', value:'p'}]} width={6} />
                                <Form.Select label='Sexo' options={[{key: 'm', text:'Macho', value:'m'}, {key: 'f', text:'Fêmea', value:'f'}]} width={6}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field control={Checkbox} label={<label>Castrado</label>}/>
                                <Form.Field control={Checkbox} label={<label>Vermifugado</label>}/>
                            </Form.Group>
                            <Form.Group>
                                <ImageUploader/>
                                <Image.Group size='tiny'>
                                </Image.Group>
                            </Form.Group>
                            <Form.Group>
                                <Form.TextArea label='Complemento' placeholder='Informações complementares do pet...' width={16}/>
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
