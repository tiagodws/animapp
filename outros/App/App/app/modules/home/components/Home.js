import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import Immutable from 'immutable';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.actions.fetchAccounts();
  // }

  shouldComponentUpdate(nextProps, nextState) {
    //return !Immutable.is(this.props.state.get('classList'), nextProps.state.get('classList'))
    return true;
  }

  render() {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}

export default connect(
    state => ({
      state: state.home
    }),
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    })
)(Home);
