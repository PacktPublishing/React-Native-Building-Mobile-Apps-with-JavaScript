import React from "react";
import { Provider } from 'react-redux';
import { AppNavigator } from './src/core/AppNavigator';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import store from './src/core/store';

const AppWithInternalState = connect(({ nav }) => ({ nav }))(({ nav }) => (
  <AppNavigator navigation={
    addNavigationHelpers({
      dispatch: store.dispatch,
      state: nav
    })}/> 
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithInternalState />
      </Provider>
    );
  }
}
