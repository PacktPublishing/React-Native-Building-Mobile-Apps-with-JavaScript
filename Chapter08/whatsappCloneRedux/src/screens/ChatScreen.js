import React from 'react';

import { ImageBackground, View, KeyboardAvoidingView, Platform, Text, StyleSheet, Button, FlatList } from 'react-native';
import Message from '../components/Message';
import Compose from '../components/Compose';
import store from '../store';
import { postMessageToServer, subscribeToGetMessagesFromServer, unSubscribeToGetMessagesFromServer } from '../actions';
import { getMessagesSelector } from '../reducers/messagesReducer';

import { connect } from 'react-redux';

class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  });

  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0

  componentDidMount(){
      this.props.subscribeToGetMessagesFromServer();
  }

  componentWillUnmount(){
    this.props.unSubscribeToGetMessagesFromServer();
  }

  render(){
    console.log(this.props)
    return (
      <ImageBackground
        style={styles.container}
        source={require('../assets/imgs/background.png')}>
        <KeyboardAvoidingView behavior="padding"
          keyboardVerticalOffset={this.keyboardVerticalOffset}
          style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={this.props.messages}
            renderItem={Message}
            keyExtractor={(item, index) => (`message-${index}`)}
          />
          <Compose submit={ this.props.postMessageToServer }/>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: getMessagesSelector(state)
  }
}

export default connect(mapStateToProps, { postMessageToServer, subscribeToGetMessagesFromServer, unSubscribeToGetMessagesFromServer  })(ChatScreen);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
