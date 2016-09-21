import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';

export default(
    <Route Path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/" component={Home} />
    </Route>
)