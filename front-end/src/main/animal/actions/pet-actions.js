import axios from 'axios';

export const CREATE_PET = 'CREATE_PET';
export const LOAD_PETS = 'LOAD_PETS';

export function createAnimal(props) {
  return {
    type: CREATE_PET,
    payload: props
  };
}

export function loadPets(){

  const pets = [{
    "id": 1,
    "name": "Eric",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "picture1": "https://robohash.org/consequunturillumvoluptates.jpg?size=250x250&set=set1",
    "picture2": "https://robohash.org/quiamolestiasvelit.bmp?size=250x250&set=set1",
    "picture3": "https://robohash.org/solutaautexpedita.bmp?size=250x250&set=set1"
  }, {
    "id": 2,
    "name": "Theresa",
    "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "picture1": "https://robohash.org/ipsumfacilispariatur.bmp?size=250x250&set=set1",
    "picture2": "https://robohash.org/temporadeseruntducimus.png?size=250x250&set=set1",
    "picture3": "https://robohash.org/ducimusquisit.bmp?size=250x250&set=set1"
  }, {
    "id": 3,
    "name": "Peter",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "picture1": "https://robohash.org/liberominimavelit.bmp?size=250x250&set=set1",
    "picture2": "https://robohash.org/culparepellendusreiciendis.bmp?size=250x250&set=set1",
    "picture3": "https://robohash.org/nihildoloremamet.jpg?size=250x250&set=set1"
  }, {
    "id": 4,
    "name": "Denise",
    "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "picture1": "https://robohash.org/sitarchitectoamet.bmp?size=250x250&set=set1",
    "picture2": "https://robohash.org/adipiscirepellendusaliquam.png?size=250x250&set=set1",
    "picture3": "https://robohash.org/doloremfacerenon.png?size=250x250&set=set1"
  }, {
    "id": 5,
    "name": "Larry",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    "picture1": "https://robohash.org/autsuscipittemporibus.jpg?size=250x250&set=set1",
    "picture2": "https://robohash.org/ipsumenimiste.bmp?size=250x250&set=set1",
    "picture3": "https://robohash.org/natusautsuscipit.png?size=250x250&set=set1"
  }, {
    "id": 6,
    "name": "Randy",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "picture1": "https://robohash.org/doloremnemocorporis.jpg?size=250x250&set=set1",
    "picture2": "https://robohash.org/doloremexplicabonesciunt.png?size=250x250&set=set1",
    "picture3": "https://robohash.org/commodirecusandaenam.bmp?size=250x250&set=set1"
  }, {
    "id": 7,
    "name": "Deborah",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "picture1": "https://robohash.org/sitquiaet.bmp?size=250x250&set=set1",
    "picture2": "https://robohash.org/saepemolestiaeconsequatur.jpg?size=250x250&set=set1",
    "picture3": "https://robohash.org/iustoetquidem.jpg?size=250x250&set=set1"
  }, {
    "id": 8,
    "name": "Dorothy",
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "picture1": "https://robohash.org/easaepenihil.jpg?size=250x250&set=set1",
    "picture2": "https://robohash.org/nesciunteabeatae.jpg?size=250x250&set=set1",
    "picture3": "https://robohash.org/voluptatesinciduntnostrum.bmp?size=250x250&set=set1"
  }, {
    "id": 9,
    "name": "Charles",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "picture1": "https://robohash.org/animimagnamest.png?size=250x250&set=set1",
    "picture2": "https://robohash.org/nequererumassumenda.png?size=250x250&set=set1",
    "picture3": "https://robohash.org/praesentiumcorporisqui.jpg?size=250x250&set=set1"
  }, {
    "id": 10,
    "name": "Alan",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "picture1": "https://robohash.org/natusdoloromnis.jpg?size=250x250&set=set1",
    "picture2": "https://robohash.org/totamlaudantiumest.png?size=250x250&set=set1",
    "picture3": "https://robohash.org/suntetmolestias.jpg?size=250x250&set=set1"
  }, {
    "id": 11,
    "name": "Amanda",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "picture1": "https://robohash.org/pariaturcupiditatedolorum.png?size=250x250&set=set1",
    "picture2": "https://robohash.org/rerumanimirerum.png?size=250x250&set=set1",
    "picture3": "https://robohash.org/recusandaeinventorevoluptate.bmp?size=250x250&set=set1"
  }, {
    "id": 12,
    "name": "Joan",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "picture1": "https://robohash.org/estvelitamet.jpg?size=250x250&set=set1",
    "picture2": "https://robohash.org/nihildistinctioet.bmp?size=250x250&set=set1",
    "picture3": "https://robohash.org/ipsamdignissimosodio.jpg?size=250x250&set=set1"
  }, {
    "id": 13,
    "name": "Jimmy",
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "picture1": "https://robohash.org/undenequeest.bmp?size=250x250&set=set1",
    "picture2": "https://robohash.org/reiciendisevenietporro.bmp?size=250x250&set=set1",
    "picture3": "https://robohash.org/recusandaerationevoluptates.bmp?size=250x250&set=set1"
  }, {
    "id": 14,
    "name": "Steven",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "picture1": "https://robohash.org/perspiciatisculpatempora.bmp?size=250x250&set=set1",
    "picture2": "https://robohash.org/voluptasliberotemporibus.jpg?size=250x250&set=set1",
    "picture3": "https://robohash.org/suntsedenim.png?size=250x250&set=set1"
  }, {
    "id": 15,
    "name": "Robin",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "picture1": "https://robohash.org/reiciendisenimveniam.bmp?size=250x250&set=set1",
    "picture2": "https://robohash.org/remquoconsequatur.bmp?size=250x250&set=set1",
    "picture3": "https://robohash.org/asperioresquiut.png?size=250x250&set=set1"
  }];


  const payload = {
    data: pets
  }


  return {
    type: LOAD_PETS,
    payload: payload
  }
}
