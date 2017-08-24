import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar } from 'react-native-elements';
import { MessageHeader } from '../components/MessageHeader';
import { ParsedMessage } from '../components/ParsedMessage'; 
import { MediaList } from '../components/MediaList';
import { Counter } from '../components/Counter';
import { ActionButton } from '../components/ActionButton';

export class Tweet extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Tweet"
  });
  
  componentDidMount(){
    // console.log(this.props.navigation.state.params)
  }

  reply(){
  //  console.log("reply");
  }

  retweet(){
 //   console.log("retweet");
  }

  like(){
   // console.log("like");
  }
  
  render() {
    const data = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Avatar medium rounded source={{ uri: data.user.profile_image_url }} 
                onPress={() => this.props.navigation.navigate("profile", { user: data.user })} />
          <View style={styles.userName}>
            <Text>{data.user.name}</Text>
            <Text>@{data.user.screen_name}</Text>
          </View>
        </View>
        <View style={[styles.messageBody, styles.bordered]}>
          <ParsedMessage data={data} navigation={ this.props.navigation} />
          <MediaList media={data.entities.media} />
        </View>
        <View style={[styles.strip, styles.bordered, { justifyContent: 'flex-start' }]}>
          <Counter counter={data.favourites_count} caption="Likes"/>
          <Counter counter={data.retweet_count} caption="Retweets"/>
        </View>
        <View style={[styles.strip, styles.actions, styles.bordered]}>
          <ActionButton name="reply" action={this.reply} counter={false} />
          <ActionButton name="retweet" action={this.retweet} counter={false} />
          <ActionButton name={data.favorited ? "heart" : "heart-o"} action={this.like} counter={false} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row'
  },
  userName: {
    paddingLeft: 10
  },
  messageBody: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10
  },
  bordered: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D4D5D7'
  },
  strip: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actions: {
    flex: 1,
    justifyContent: 'space-around'
  }
})
