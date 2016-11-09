import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './main/app';
import Home from './main/app/components/home';
import AnimalNew from './main/animal/components/animal-new';

export default(
    <Route Path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/" component={Home} />
        <Route path="/animal/new" component={AnimalNew}/>
    </Route>
)
