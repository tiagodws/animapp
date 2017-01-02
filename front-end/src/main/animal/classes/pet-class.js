import DefaultClass from '../../app/classes/default-class';

export default class Pet extends DefaultClass{
	constructor(){
		const properties =
			[
			    {
				name: 'id',
				defaultValue: null
			},
				{
					name: 'publicationDate',
					defaultValue: new Date(),
					type: 'Date'
				},
				{
					name: 'name',
					defaultValue: '',
					type: 'String'
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
					name: 'months',
					defaultValue: 0,
					type: 'Number'
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
					name: 'description',
					defaultValue: '',
					type: 'String'
				},
				{
					name: 'pictures',
					defaultValue: [],
					type: 'Array'
				},
				{
					name: 'ownerId',
					defaultValue: false
				}
				]

		super(properties);
	}
	//RANDOM METHODS
	getProfilePicture(){
		return this.pictures[0];
	}
}