import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import logo from '../assets/twitter_logo.png';

export class Splash extends React.Component {
    async componentWillMount(){
        const { navigation } = this.props;
        try {
         const authToken = await AsyncStorage.getItem('@TwitterClient:authToken');
         if (authToken !== null){
             this.props.navigation.navigate("mainFlow");
         } else {
            setTimeout(() => {
                this.props.navigation.navigate("login");
            }, 3000)
        }
        } catch (error){
            setTimeout(() => {
                this.props.navigation.navigate("login");
            }, 3000);
        }
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


