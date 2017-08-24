import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const Message = ({ item }) => (
  <View style={[
      styles.message, item.incoming &&
      styles.incomingMessage
    ]}>
    <Text>{item.message}</Text>
  </View>
)

const styles = {
  message: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  incomingMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7'
  }
}

export default Message;
