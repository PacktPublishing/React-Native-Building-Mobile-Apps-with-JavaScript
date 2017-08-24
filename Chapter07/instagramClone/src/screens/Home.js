import React from 'react';
import { getMessages, postMessage } from '../services/api';
import { Image, View, KeyboardAvoidingView, Platform, Text, StyleSheet, Button, FlatList } from 'react-native';
import { authDecorator } from '../services/authService';

class Home extends React.Component {

  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0


  render(){
    return (
      <View style={styles.container}><Text>Home</Text></View>
    )
  }
}

export default authDecorator(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
