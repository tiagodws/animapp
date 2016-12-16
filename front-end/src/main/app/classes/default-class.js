export default class DefaultClass {
    constructor(properties) {
		
		const toClass = {}.toString;
		
        properties.forEach(property => {
			
			if(!property.name){
				throw 'Every property must have a name!';
			}
			if(typeof property.defaultValue === 'undefined'){
				throw 'Every property must have a default value!';
			}
			
			if(!property.type){
				console.warn(`No type was specified for ${property.name} property.`)
			}
			
            this[property.name] = property.defaultValue;
            this["get" + property.name.charAt(0).toUpperCase() + property.name.slice(1)] = () => this[property.name];
            this["set" + property.name.charAt(0).toUpperCase() + property.name.slice(1)] = value =>{
				if(property.type && toClass.call(value) !== `[object ${property.type}]`){
					throw `Invalid type for ${property.name}: ${typeof value}, required type: ${property.type}.`;
				}
				this[property.name] = value;
			};
        });
    }
}