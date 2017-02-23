import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';

import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore({});

class Root extends Component {

  render(){
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
      </Provider>
    );
  }

};

ReactDOM.render(<Root></Root>, document.getElementById('app'));