import React from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { routes } from './config/routes';
import { initApi } from './services/api';

const AppNavigator = StackNavigator(routes);

export default class extends React.Component {
  componentWillMount(){
    initApi();
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </View>
    )
  }
}
