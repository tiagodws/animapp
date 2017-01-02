'use strict';

const DefaultClass = require('../app/default-class');

class Pet extends DefaultClass{
	constructor(){
		const properties = [
		{
			name: 'id',
			defaultValue: null
		},
		{
			name: 'firstName',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'lastName',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'email',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'phoneNumber',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'alternatePhoneNumber',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'facebookURL',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'googlePlusURL',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'pets',
			defaultValue: [],
			type: 'Array'
		},
		]
		
		super(properties);
	}
}

module.exports = Pet;