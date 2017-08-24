import React from "react";
import { AppNavigator } from './src/core/AppNavigator';
import { addNavigationHelpers } from 'react-navigation';
import * as stores from './src/core/stores';
import { useStrict } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';

useStrict(true);

const AppWithInternalState = inject("navStore")(observer(({ nav, navStore }) => (
  <AppNavigator navigation={
    addNavigationHelpers({
      dispatch: navStore.dispatch,
      state: navStore.navigationState
    })} />
)));

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppWithInternalState />
      </Provider>
    );
  }
}
