import React from 'react';
import { View, Image, StyleSheet,  TouchableOpacity, Dimensions, KeyboardAvoidingView, Animated } from "react-native";
import profilePic from '../assets/profile_pic.jpg';
import { NewTweet } from './NewTweet';
import { Icon } from 'react-native-elements';



export class NewTweetButton extends React.Component {

    state = {
        showNewTweet: false
    }

    render(){
        return (
            <View style={{ marginRight: 10 }}>
                <TouchableOpacity onPress={() => this.setState({ showNewTweet: true })}>
                    <Icon 
                    name="plus" 
                    type="font-awesome" 
                    color={this.props.color || "#1DA1F3" } />
                </TouchableOpacity>
                { this.state.showNewTweet && 
                <NewTweet 
                    navigation={this.props.navigation} 
                    close={() => this.setState({ showNewTweet: false})}/> }
            </View>
        )
    }
}

