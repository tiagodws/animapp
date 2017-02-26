import React from 'react';
import {Route, IndexRoute} from 'react-router';

//APP
import App from './modules/app/components/app';

//HOME
import Home from './modules/home/components/home';

//PET
import PetList from './modules/pet/components/pet-list';
import PetNew from './modules/pet/components/pet-new';

//SHELTER
import ShelterList from './modules/shelter/components/shelter-list';
import ShelterNew from './modules/shelter/components/shelter-new';

export default(
	<Route Path="/" component={App}>
		<IndexRoute component={App} />

		<Route path="/" component={Home} />


		<Route path="pets" component={PetList}/>
		<Route path="pets/new" component={PetNew}/>

		<Route path="shelters" component={ShelterList}/>
		<Route path="shelters/new" component={ShelterNew}/>

	</Route>
)