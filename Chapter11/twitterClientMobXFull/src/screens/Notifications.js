import React from "react";
import { View, Text } from "react-native";
import { ProfileHeaderButton } from '../components/ProfileHeaderButton';
import { NewTweetButton } from "../components/NewTweetButton";
import { Icon } from 'react-native-elements';

export class Notifications extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Notifications',
    headerLeft: <ProfileHeaderButton navigation={navigation} />,
    headerRight: <NewTweetButton />,
    tabBarIcon: () => (
      <Icon name="bell-o" type="font-awesome" />
    )
  });

  render() {
    return (
      <View>
        <Text>Screen</Text>
      </View>
    );
  }
}
