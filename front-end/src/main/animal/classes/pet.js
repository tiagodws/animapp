export default class Pet{
    constructor(){
        this.id = null;
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