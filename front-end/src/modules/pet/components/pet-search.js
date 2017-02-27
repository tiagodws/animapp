import React,{Component} from 'react';
import {Icon, Form, Checkbox} from 'semantic-ui-react';

class PetSearch extends Component{
    render(){
        return(
            <Form size='medium' stackable>
                <Form.Group>
                    <Form.Input label='Nome' width={8} />
                    <Form.Select label='Tipo' options={[{key:'d', text:'Cão', value:'c'}, {key:'c', text:'Gato', value:'c'}]} width={8} />
                </Form.Group>
                <Form.Group>
                    <Form.Select label='Porte' options={[{key:'b', text:'Grande', value:'b'}, {key:'m', text:'Médio', value:'m'}, {key:'p', text:'Pequeno', value:'p'}]} width={8} />
                    <Form.Select label='Sexo' options={[{key: 'm', text:'Macho', value:'m'}, {key: 'f', text:'Fêmea', value:'f'}]} width={8}/>
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Checkbox} label={<label>Castrado</label>} width={8}/>
                    <Form.Field control={Checkbox} label={<label>Vermifugado</label>} width={8}/>
                </Form.Group>
                <Form.Group>
                    <Form.Button><Icon name='search' />Pesquisar</Form.Button>
                </Form.Group>
            </Form>
        )
    }

}

export default PetSearch;