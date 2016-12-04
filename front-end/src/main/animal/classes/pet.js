export default class Pet{
    constructor(){
        this.id = null;
        this.publicationDate = new Date();
        this.specie = "";
        this.race = "";
        this.sex = "";
        this.name = "";
        this.description = "";
        this.weight = "";
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

    getWeight(){
        return this.weight;
    }

    setWeight(weight){
        this.weight = weight;
    }

    //RANDOM METHODS

    getProfilePicture(){
        return this.pictures[0];
    }




}