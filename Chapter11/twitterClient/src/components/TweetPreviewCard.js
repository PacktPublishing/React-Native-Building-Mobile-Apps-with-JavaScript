import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationActions } from 'react-navigation';
import { TweeterActionBar } from '../components/TweeterActionBar';
import { Avatar } from 'react-native-elements';

import { ParsedMessage } from '../components/ParsedMessage'; 
import { MessageHeader } from '../components/MessageHeader';
import { MediaList } from '../components/MediaList';


export const TweetPreviewCard = ({ navigation, data }) => (
    <TouchableOpacity onPress={() => navigation.navigate("tweet", data)}>
        <View style={styles.container}>
            <Avatar medium rounded source={{ uri: data.user.profile_image_url }} 
                onPress={() => navigation.navigate("profile", { user: data.user })} />
            <View style={styles.tweetView}>
                <MessageHeader data={data}/>
                <ParsedMessage data={data} navigation={navigation}/>
                <MediaList media={data.entities.media} />
                <TweeterActionBar
                    replyAction={() => { 
                        navigation.navigate("tweet", 
                        { 
                            startReply: true, 
                            ...data 
                        })}}
                    favorited={data.favorited}
                    counters={{
                        retweet: data.retweet_count,
                        likes: data.favourites_count
                    }}
                />
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: "#D4D5D7"
  },
  userAt: {
    marginLeft: 5,
    color: "gray"
  },
  tweetView: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column"
  }
});