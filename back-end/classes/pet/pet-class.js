'use strict';

const DefaultClass = require('../app/default-class');

class Pet extends DefaultClass{
    constructor(){
		const properties = 
		[{
			name: 'id',
			defaultValue: null
		},
		{
			name: 'publicationDate',
			defaultValue: new Date(),
			type: 'Date'
		},
		{
			name: 'specie',
			defaultValue: '',
			type: 'String'
		},
		{
			name: 'race',
			defaultValue: '',
			type: 'String'
		},
		{
			name: 'sex',
			defaultValue: '',
			type: 'String'
		},
		{
			name: 'name',
			defaultValue: '',
			type: 'String'
		},
		{
			name: 'description',
			defaultValue: '',
			type: 'String'
		},
		{
			name: 'weight',
			defaultValue: 0,
			type: 'Number'
		},
		{
			name: 'castrated',
			defaultValue: false,
			type: 'Boolean'
		},
		{
			name: 'dewormed',
			defaultValue: false,
			type: 'Boolean'
		},
		{
			name: 'pictures',
			defaultValue: [],
			type: 'Array'
		},
		{
			name: 'ownerId',
			defaultValue: false
		}]
		
		super(properties);
    }
}

module.exports = Pet;