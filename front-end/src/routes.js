import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './main/app';
import Home from './main/app/components/home';
import PetNew from './main/animal/components/pet-new';
import PetList from './main/animal/components/pet-list';

export default(
    <Route Path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/" component={Home} />
        <Route path="/pet/new" component={PetNew}/>
        <Route path="/adopt" component={PetList} />
    </Route>
)
