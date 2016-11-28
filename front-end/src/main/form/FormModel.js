import React, {Component} from 'react';
import {FormText} from './FormText';

export default class FormModel extends Component{
    render(){
        return(
            <div>
                <form className="ui-form">
                    {this.props.config.fields.forEach((field)=> this.renderField(field))}
                </form>
            </div>
        )
    }

    renderField(field){
        switch(field.type){
            case 'TEXT':
                return <FormText />
            default:
                return "Invalid type";
        }
    }



}