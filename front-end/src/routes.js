import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './modules/app/components/app';
import Home from './modules/home/components/home';
import PetList from './modules/pet/components/pet-list';
import PetNew from './modules/pet/components/pet-new';

export default(
	<Route Path="/" component={App}>
		<IndexRoute component={App} />
		<Route path="/" component={Home} />
		<Route path="pets" component={PetList}/>
		<Route path="pets/new" component={PetNew}/>
	</Route>
)