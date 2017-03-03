import React, {Component} from 'react';
import {Button, Header, Modal, Icon} from 'semantic-ui-react';

class ImageUploader extends Component{
  render(){
    return(
      <Modal trigger={<Button>Enviar fotos</Button>}>
        <Modal.Header><Icon name='picture'/> Selecione a foto</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Test
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>
          Cancelar
          </Button>
          <Button positive>Enviar</Button>
        </Modal.Actions>
      </Modal>
        )
      }
}

export default ImageUploader;