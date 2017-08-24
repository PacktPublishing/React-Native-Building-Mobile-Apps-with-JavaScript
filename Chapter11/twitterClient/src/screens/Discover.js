import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, SearchBar } from 'react-native-elements';
import { ProfileHeaderButton } from '../components/ProfileHeaderButton';
import { NewTweetButton } from "../components/NewTweetButton";

export class Discover extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SearchBar
      lightTheme 
      round 
      containerStyle={styles.search} 
      placeholder="Search" />,
    headerLeft: <ProfileHeaderButton navigation={navigation} />,
    tabBarIcon: () => (
      <Icon name="search" />
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

const styles = StyleSheet.create({
  search: {
    width: 250, 
    backgroundColor: 'transparent'
  }
})
