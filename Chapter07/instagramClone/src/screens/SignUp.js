import React from 'react';
import { signup } from '../services/api';
import { Image, View, Keyboard, TouchableOpacity, Dimensions,ScrollView, KeyboardAvoidingView, Platform, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import authService from '../services/authService';
import { NavigationActions } from 'react-navigation'

export default class Signup extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    user: '',
    password: ''
  }

  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0


  async submit(){
    try {
      const response = await signup(this.state.user, this.state.password)
      this._user.clear();
      this._password.clear();
      Keyboard.dismiss();
      authService.isAuthenticated = true;
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'home' })
          ]
        })
      );
    } catch ({ message }) {
      this.setState({
        error: message
      })
    }
  }

  render(){
    return (
      <View
        style={styles.container}>
        <Image
          style={[ styles.logo ]}
          source={require('../assets/imgs/InstagramLogo.png')}/>
        <ScrollView style={styles.container}>
          <TextInput
              ref={(textInput) => this._user = textInput }
              style={styles.inputField}
              value={this.state.user}
              onChangeText={(user) => this.setState({user})}
              onSubmitEditing={(event) => this._password.focus()}
              editable={true}
              maxLength={40}
              multiline={false}
              placeholder="Phone number, username or email"
            />
            <TextInput
                ref={(textInput) => this._password = textInput }
                style={styles.inputField}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                onSubmitEditing={(event) => this.submit()}
                editable={true}
                secureTextEntry={true}
                maxLength={40}
                multiline={false}
                placeholder="Password"
              />
            { this.state.error &&
              <View style={styles.validationErrors}>
                <Text style={styles.error}>{this.state.error}</Text>
              </View>
            }
            <Button onPress={() => this.submit()} title="SignUp" />
            <View style={styles.redirectLink}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    width: '100%',
    height: 200
  },
  inputField: {
    marginTop: 20,
    alignSelf: 'center',
    height: 55,
    width: '80%',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#CACACA"
  },
  redirectLink: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  link: {
    color: 'blue'
  },
  validationErrors: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  error: {
    marginTop: 10,
    textAlign: 'center',
    color: 'red'
  }
})
