import React from 'react';
import { View, Text } from 'react-native';

export class SplashScreen extends React.Component {

  componentDidMount(){
    setTimeout(() => { this.props.navigation.navigate('mainFlow')},3000);
  }
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <Text>SplashScreen</Text>
      </View>
    )
  }
}
