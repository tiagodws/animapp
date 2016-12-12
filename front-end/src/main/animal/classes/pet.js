export default class Pet{
    constructor(){
        this.id = null;
        this.publicationDate = new Date();
        this.specie = "";
        this.race = "";
        this.sex = "M";
        this.name = "";
        this.description = "";
        this.weight = "";
		this.castrated = false;
		this.dewormed = false;
        this.pictures = [];
    }

    //getters and setters
    getId(){
        return this.id; 
    }

    setId(id){
        this.id = id;
    }

    getName(){
        return this.name;
    }
	
	setName(name){
		this.name = name;
	}

    getPublicationDate(){
        return this.publicationDate;
    }

    setPublicationDate(publicationDate){
        this.publicationDate = publicationDate;
    }

    getSpecie(){
        return this.specie || "";
    }

    setSpecie(specie){
        this.specie = specie;
    }

    getRace(){
        return this.race || "";
    }

    setRace(race){
        this.race = race;
    }

    getSex(){
        return this.sex || 0;
    }

    setSex(sex){
        this.sex = sex;
    }

    setName(name){
        this.name = name;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
    }
	
	getWeight(){
        return this.weight;
    }

    setWeight(weight){
        this.weight = weight;
    }
	
	isCastrated(){
		return this.castrated;
	}
	
	setCastrated(castrated){
		this.castrated = castrated;
	}
	
	isDewormed(){
		return this.dewormed;
	}
	
	setDewormed(dewormed){
		this.dewormed = dewormed;
	}

    getPictures(){
        return this.pictures;
    }

    setPictures(pictures){
        this.pictures = pictures;
    }

    //RANDOM METHODS
    getProfilePicture(){
        return this.pictures[0];
    }
}