import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import logo from '../assets/twitter_logo.png';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
export class Splash extends React.Component {

    componentWillMount(){
        this.props.userStore.tryToLogIn();
    }

    render(){
        return (
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
          </View>
        )
    }
}

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


