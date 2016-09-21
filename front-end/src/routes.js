import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import AnimalNew from './components/animal-new';

export default(
    <Route Path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/" component={Home} />
        <Route path="/animal/new" component={AnimalNew}/>
    </Route>
)
