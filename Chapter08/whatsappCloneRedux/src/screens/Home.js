import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = {
    title: "Home Screen"
  }

  render(){
    return (
      <View style={styles.container}>
        <Button title="Navigate to ChatScreen"
          onPress={() => this.props.navigation.navigate('chat', { name: 'John' })}/>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
