export default class User{
	constructor(){
		this.id = null;
		this.firstName = "";
		this.lastName = "";
		this.email = "";
		this.phoneNumber = "";
		this.alternatePhoneNumber = "";
		this.facebookURL;
		this.googlePlusURL;
		this.pets = [];
	}
	
	getId(){
		return this.id;
	}
	
	setId(id){
		this.id = id;
	}
	
	getFirstName(){
		return this.firstName;
	}
	
	setFirstName(firstName){
		this.firsName = firstName;
	}
	
	getLastName(){
		return this.lastName;
	}
	
	setLastName(lastName){
		this.lastName = lastName;
	}
	
	getEmail(){
		return this.email;
	}
	
	setEmail(email){
		this.email = email;
	}
	
	getPhoneNumber(){
		return this.phoneNumber;
	}
	
	setPhoneNumber(phoneNumber){
		this.phoneNumber = phoneNumber;
	}
	
	getAlternatePhoneNumber(){
		return this.alternatePhoneNumber;
	}
	
	setAlternatePhoneNumber(alternatePhoneNumber){
		this.alternatePhoneNumber = alternatePhoneNumber;
	}
	
	getFacebookURL(){
		return this.facebookURL;
	}
	
	setFacebookURL(facebookURL){
		this.facebookURL = facebookURL;
	}
	
	getGooglePlusURL(){
		return this.googlePlusURL;
	}
	
	setGooglePlusURL(googlePlusURL){
		this.googlePlusURL = googlePlusURL;
	}
	
}