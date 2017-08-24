import React from "react";
import { View, Text, StatusBar, ScrollView, StyleSheet, Platform, Image, TouchableOpacity } from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';
import { Feed } from '../components/Feed';

const HEADER_MAX_HEIGHT = 100;

export class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  animatedOnScroll(){
    return Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
      { useNativeDriver: true },
    )
  }

  render() {
    const { name, listed_count } = this.props.navigation.state.params.user;
    return (
      <View style={styles.fill}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="rgba(0, 0, 0, 0.251)"
          />
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
               <Icon name="ios-arrow-back-outline" style={{ paddingLeft: 10}} type="ionicon" size={26} color='white' />
              </TouchableOpacity>
              <View style={{ flex: 1, alignItems: 'center'}}>
                <Text style={styles.headerText}>{name}</Text>
                <Text style={styles.headerText}>{listed_count} Tweets</Text>
              </View>
            </View>
          </View>
          <ScrollableTabView style={[styles.fill, styles.scrollViewContent]}>
            <Feed tabLabel="Tweets" navigation={this.props.navigation} />
            <Feed tabLabel="Tweets & Replies" navigation={this.props.navigation} />
            <Feed tabLabel="Media" navigation={this.props.navigation} />
            <Feed tabLabel="Likes" navigation={this.props.navigation} />
          </ScrollableTabView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 100,
    backgroundColor: "#1DA1F3"
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  headerText: {
    color: 'white'
  }
});