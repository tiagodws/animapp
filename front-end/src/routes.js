import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './modules/app/components/App';
import Home from './modules/home/components/Home';

export default(
	<Route Path="/" component={App}>
		<IndexRoute component={App} />
		<Route path="/" component={Home} />
	</Route>
)