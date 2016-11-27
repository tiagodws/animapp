export default class Pet{
    constructor(){
        this.id = null;
        this.publicationDate = new Date();
        this.type = "";
        this.race = "";
        this.sex = "";
        this.name = "";
        this.description = "";
        this.pictures = [];
        this.owner = null;
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

    getPublicationDate(){
        return this.publicationDate;
    }

    setPublicationDate(publicationDate){
        this.publicationDate = publicationDate;
    }

    getType(){
        return this.type || "undefined";
    }

    setType(type){
        this.type = type;
    }

    getRace(){
        return this.race || "undefined";
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

    getPictures(){
        return this.pictures;
    }

    setPictures(pictures){
        this.pictures = pictures;
    }

    getOwner(){
        return this.owner;
    }

    setOwner(owner){
        this.owner = owner;
    }

    //RANDOM METHODS

    getProfilePicture(){
        return this.pictures[0];
    }




}