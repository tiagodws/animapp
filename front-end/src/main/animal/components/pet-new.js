import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createAnimal } from '../actions/pet-actions';
import Modal from '../../app/components/modal';
import Album from '../../app/components/album';

class PetNew extends Component {

    constructor (props) {
        super(props);

        this.state = {showModal: false};
    }

    switchModal () {
        this.setState({showModal: !this.state.showModal});
    }

    componentDidMount(){
        $('select.dropdown')
            .dropdown()
        ;
    }

    render () {
        const { fields: {}, handleSubmit } = this.props;

        return (
            <div className="ui two column centered grid">
                <div class="column centered">
                    <form className="ui form">
                        <h4 className="ui dividing header"></h4>

                        <div className="fields">
                            <div className="twelve wide field">
                                <label>Pet name</label>
                                <input type="text" name="pet-name" placeholder="Pet Name" />
                            </div>

                            <div className="four wide field">
                                <label>Months</label>
                                <input type="number" name="pet-months" placeholder="Age in months"/>
                            </div>
                        </div>

                        <div className="fields">
                            <div className="field">
                                <label>Pet Race</label>
                                <select>
                                    <option value="">Poodle</option>
                                    <option value="">Pitbull</option>
                                </select>
                            </div>
                        </div>

                        {this.state.showModal ? <Modal closeModal={this.switchModal.bind(this)}><Album /></Modal> : ""}
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'PetNewForm',
    fields: ['name', 'race', 'animaltype', 'size', 'address', 'date', 'caracteristics', 'conditions', 'image']
}, null, { createAnimal })(PetNew);
