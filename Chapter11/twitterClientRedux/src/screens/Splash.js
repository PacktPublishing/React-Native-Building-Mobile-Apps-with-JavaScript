import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import { getLoggedInfoFromAsyncStorage } from '../core/actions';
import logo from '../assets/twitter_logo.png';
import { connect } from 'react-redux';

class SplashComponent extends React.Component {

    componentWillMount(){
        this.props.tryToLogIn();
    }

    render(){
        return (
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
          </View>
        )
    }
} 

export const Splash = connect(null, {
    tryToLogIn: getLoggedInfoFromAsyncStorage
})(SplashComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F3"
  },
  logo: {
    width: 50,
    height: 50
  }
});


