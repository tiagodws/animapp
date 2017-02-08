import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Home from './modules/home/components/Home';

const store = configureStore({});

class Root extends Component {

  render(){
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }

};

export default Root;
