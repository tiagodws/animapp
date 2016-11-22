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
            <div>

                <h2 className="ui center aligned icon header">
                    <i className="circular add icon"></i>
                    Help a new pet
                </h2>

                <div className="ui grid">

                    <div className="four wide column">
                        <div className="ui header">
                            <i className="info icon"></i>
                            <div className="content">
                                Provide as much information as possible
                                <div className="sub header"> Fill this form to list a new pet that needs help!</div>
                            </div>
                        </div>
                        <div className="ui header">
                            <i className="heart icon"></i>
                            <div className="content">
                                Take care of the pet until we find him a new family
                                <div className="sub header"> Don't let a living soul in the streets!</div>
                            </div>
                        </div>
                    </div>

                    <div className="eleven wide column">
                        <form className="ui form">
                            <h4 className="ui dividing header">Pet Info</h4>

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
                                <div className="four wide field">
                                    <label>Pet Race</label>
                                    <select>
                                        <option value="">Poodle</option>
                                        <option value="">Pitbull</option>
                                    </select>
                                </div>

                                <div className="four wide field">
                                    <label>Weight</label>
                                    <input type="number" name="pet-weight" placeholder="Pet weight in g" />
                                </div>
                            </div>

                            <h4 className="ui dividing header">Pictures</h4>

                            <div className="fields">
                                <div className="sixteen wide field">
                                    <div>
                                        <label className="ui icon button">
                                            <i className="picture icon"></i>
                                            Upload picture</label>
                                        <input type="file" id="file" style={{display:'none'}} />
                                    </div>
                                </div>
                            </div>

                            {this.state.showModal ? <Modal closeModal={this.switchModal.bind(this)}><Album /></Modal> : ""}
                        </form>
                    </div>
                </div>
            </div>
    )
    }
    }

    export default reduxForm({
        form: 'PetNewForm',
        fields: ['name', 'race', 'animaltype', 'size', 'address', 'date', 'caracteristics', 'conditions', 'image']
    }, null, { createAnimal })(PetNew);
