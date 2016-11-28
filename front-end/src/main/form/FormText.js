import React, {Component} from 'react';

export default class FormText extends Component{
    render(){
       return(
        <div className="field">
           <label>Exemplo de Texto</label>
           <input type="text" name="exemplo" placeholder="exemplo" />
       </div>
           )
    }
}