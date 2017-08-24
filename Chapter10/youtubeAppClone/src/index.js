import React from 'react';
import routesConfig from './config/routes';
import { TabNavigator } from 'react-navigation';

const AppNavigator = TabNavigator(routesConfig, {
  navigationOptions: {
    tabBarVisible: false,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
