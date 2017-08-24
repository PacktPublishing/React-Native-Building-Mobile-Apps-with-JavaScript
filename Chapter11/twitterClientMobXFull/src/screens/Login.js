import React from "react";
import { View, StyleSheet, Platform, Keyboard } from "react-native";
import { NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, Text, Button } from "react-native-elements";
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
export class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    login(){
        Keyboard.dismiss();
        this.props.userStore.login(this.state);
    }

    render() {
        return <View style={[styles.container, { marginTop: 90 }]}>
            <Text h4 style={styles.title}>
              Log in to Twitter
            </Text>
            <FormInput onChangeText={username => this.setState({
                  username
                })} placeholder="phone, email or username" />
            <FormInput onChangeText={password => this.setState({
                  password
                })} placeholder="Password" secureTextEntry />
            <Button 
                style={styles.login} 
                title="Log in" 
                borderRadius={20} 
                backgroundColor="#1DA1F3" 
                onPress={() => this.login()} />
          </View>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: "center",
    marginBottom: 20
  },
  login: {
      marginTop: 20,
      width: 100
  }
});
