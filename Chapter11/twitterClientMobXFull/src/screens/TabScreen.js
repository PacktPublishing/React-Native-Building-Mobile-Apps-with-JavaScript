import React from 'react';
import { View, Text } from 'react-native';
import { NewTweetButton } from "../components/NewTweetButton";
import { Icon } from 'react-native-elements';

export const TabScreen = (Component, tabIcon) => 
  class MainTabScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({ 
      ...Component.navigationOptions({ navigation }),
      headerRight: <NewTweetButton navigation={navigation}/>,
      tabBarLabel: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name={tabIcon} type="font-awesome" color={tintColor}/>
      )
    });

    render() {
      return <Component navigation={this.props.navigation} />
    }
  };