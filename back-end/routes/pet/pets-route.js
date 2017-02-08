const express = require('express');
const router = express.Router();
const Pet = require('../../classes/pet/pet-class');
const petsData = require('../../dummy/pets-data');

router.get('/all', function(req, res, next) {

	const petList = petsData.petData.map(petData=>{
		const pet = new Pet();
		const pictures = [petData.picture1, petData.picture2, petData.picture3];
		pet.setId(petData.id);
		pet.setPublicationDate(new Date(petData.publicationDate));
		pet.setSpecie(petData.specie);
		pet.setRace(petData.race);
		pet.setSex(petData.sex);
		pet.setName(petData.name);
		pet.setDescription(petData.description);
		pet.setWeight(petData.weight);
		pet.setPictures(pictures);
		pet.setOwnerId(petData.ownerId);

		return pet;
	});

	res.send(petList).end();
});

router.post('/breeds', function(req, res, next){
	if(req.body.specie == '1'){
		res.send(petsData.dogSpeciesData).end();
	}else{
		res.send(petsData.catSpeciesData).end();
	}

});

module.exports = router;
