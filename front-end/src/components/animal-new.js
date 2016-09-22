import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router'
import { createAnimal } from '../actions/index';

class AnimalNew extends Component {
  /*static contextTypes = {
    router: PropTypes.objetct
  };*/

  /*onSubmit(props) {
    this.props.createAnimal(props).then(() => {
      this.context.router.push('/');
    })
  };*/

  render () {
    const { fields: { name, race, animaltype, size, address, date, caracteristics, conditions, image }, handleSubmit } = this.props;

    return (
      <form>
        <h3>Registrando um animal perdido</h3>

        <div className='row'>
          <div className='form-group col-xs-12 col-md-8'>
            <label>Nome</label>
            <input type='text' className='form-control' {...name} />
          </div>

          <div className="col-xs-4" style={"background-color: #000000; height: 50px"}></div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-12 col-md-4'>
            <label>Animal</label>
            <input type='text' className='form-control' {...animaltype} />
          </div>

          <div className='form-group col-xs-12 col-md-2'>
            <label>Raça</label>
            <input type='text' className='form-control' {...race} />
          </div>

          <div className='form-group col-xs-12 col-md-2'>
            <label>Porte</label>
            <input type='text' className='form-control' {...size} />
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-12 col-md-6'>
            <label>Endereço</label>
            <input type='text' className='form-control' {...address} />
          </div>

          <div className='form-group col-xs-12 col-md-2'>
            <label>Data</label>
            <input type='text' className='form-control' {...date} />
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-12 col-md-12'>
            <label>Caracteristicas</label>
            <textarea className='form-control' {...caracteristics} />
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-xs-12 col-md-12'>
            <label>Condições</label>
            <textarea className='form-control' {...conditions} />
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'AnimalNewForm',
  fields: ['name', 'race', 'animaltype', 'size', 'address', 'date', 'caracteristics', 'conditions', 'image']
}, null, { createAnimal })(AnimalNew);
