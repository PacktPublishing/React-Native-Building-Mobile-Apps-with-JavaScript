import React from "react";
import {
  View,
  StatusBar
} from "react-native";
import { List, ListItem, Card, Icon } from 'react-native-elements';
import { Feed } from "../components/Feed";
import { ProfileHeaderButton } from '../components/ProfileHeaderButton';
import { observer, inject } from 'mobx-react';
 

@inject('userStore')
@observer
export class Home extends React.Component {
  static navigationOptions = ({ navigation}) => ({
    title: "Home",
    headerBackTitle: null,
    headerLeft: <ProfileHeaderButton navigation={navigation} />,
  });



  
  render() {
    const { navigation, userStore } = this.props;  
    return (
      userStore.isLoggedIn && 
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar translucent barStyle="dark-content" />
        <Feed endpoint="statuses/home_timeline" navigation={navigation} />
      </View>
    )
  }
}
