import React from 'react';

import { ImageBackground, Image,  View, KeyboardAvoidingView, Platform, Text, StyleSheet, Button, FlatList } from 'react-native';
import Message from '../components/Message';
import Compose from '../components/Compose';
import { inject, observer } from 'mobx-react';

@inject("messageStore")
@observer
export default class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  });

  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0

  componentDidMount(){
      this.props.messageStore.subscribeToGetMessagesFromServer();
  }

  componentWillUnmount(){
    this.props.messageStore.unSubscribeToGetMessagesFromServer();
  }

  render(){
    return (
      <ImageBackground
        style={[ styles.container, styles.backgroundImage ]}
        source={require('../assets/imgs/background.png')}>
        <KeyboardAvoidingView behavior="padding"
          keyboardVerticalOffset={this.keyboardVerticalOffset}
          style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={this.props.messageStore.messages}
            renderItem={Message}
            keyExtractor={(item, index) => (`message-${index}`)}
          />
          <Compose submit={ this.props.messageStore.postMessageToServer }/>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%'
  }
})
