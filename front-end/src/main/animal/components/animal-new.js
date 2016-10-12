import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createAnimal } from '../actions/animal-actions';
import Modal from '../../app/components/modal';
import Album from '../../app/components/album';

class AnimalNew extends Component {
  /*static contextTypes = {
    router: PropTypes.objetct
  };*/

  /*onSubmit(props) {
    this.props.createAnimal(props).then(() => {
      this.context.router.push('/');
    })
  };*/

  constructor (props) {
      super(props);

      this.state = {showModal: false};
  }

  switchModal () {
      this.setState({showModal: !this.state.showModal});
  }

  render () {
    const { fields: { name, race, animaltype, size, address, date, caracteristics, conditions, image }, handleSubmit } = this.props;

    return (
      <form>
        <h3>Registrando um animal perdido</h3>

        <div className='box col-xs-12 col-md-9'>
          <div className='row'>
            <div className='form-group col-xs-12 col-md-12'>
              <label>Nome</label>
              <input type='text' className='form-control' {...name} />
            </div>
          </div>

          <div className='row'>
            <div className='form-group col-xs-12 col-md-6'>
              <label>Animal</label>
              <input type='text' className='form-control' {...animaltype} />
            </div>

            <div className='form-group col-xs-12 col-md-3'>
              <label>Raça</label>
              <input type='text' className='form-control' {...race} />
            </div>

            <div className='form-group col-xs-12 col-md-3'>
              <label>Porte</label>
              <input type='text' className='form-control' {...size} />
            </div>
          </div>

          <div className='row'>
            <div className='form-group col-xs-12 col-md-8'>
              <label>Endereço</label>
              <input type='text' className='form-control' {...address} />
            </div>

            <div className='form-group col-xs-12 col-md-4'>
              <label>Data</label>
              <input type='text' className='form-control' {...date} />
            </div>
          </div>
        </div>

        <div className='form-img col-xs-12 col-md-3'>
          <button type='button' onClick={this.switchModal.bind(this)}>Album</button>
          <img src='../../../../../resources/img/catioro.jpeg' className='img-responsive form-img-prin' />
        </div>

        <div className='box col-xs-12 col-md-12'>
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
        </div>

        {this.state.showModal ? <Modal closeModal={this.switchModal.bind(this)}><Album /></Modal> : ""}
      </form>
    )
  }
}

export default reduxForm({
  form: 'AnimalNewForm',
  fields: ['name', 'race', 'animaltype', 'size', 'address', 'date', 'caracteristics', 'conditions', 'image']
}, null, { createAnimal })(AnimalNew);
