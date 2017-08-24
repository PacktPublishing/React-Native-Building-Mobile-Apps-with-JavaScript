import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ActionButton } from '../components/ActionButton';

export const TweeterActionBar = ({ replyAction, retweetAction, likeAction, counters, favorited }) => (
    <View style={styles.container}>
        <ActionButton name="reply" action={replyAction} counter={false} />
        <ActionButton name="retweet" action={retweetAction} counter={counters.retweet} />
        <ActionButton name={favorited ? "heart" : "heart-o"} action={likeAction} counter={counters.likes} />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    alignContent: "space-between"
  }
});