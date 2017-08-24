import { StackNavigator } from 'react-navigation';
import routes from './config/routes';
import { initApi } from './services/api';
import React from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import MessageStore from './store';

useStrict(true);

const AppNavigator = StackNavigator(routes);

export default class App extends React.Component {

  componentWillMount(){
    initApi();
  }

  render(){
    return (
      <Provider messageStore={new MessageStore()}>
        <AppNavigator />
      </Provider>
    )
  }
}
