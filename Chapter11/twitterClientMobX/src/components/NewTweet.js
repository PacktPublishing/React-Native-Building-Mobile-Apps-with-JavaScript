import React from 'react';
import { View, Text, Animated, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Button, FormInput, Icon } from 'react-native-elements';
import profilePic from '../assets/profile_pic.jpg';
import { observer, inject } from 'mobx-react';

@inject('feedStore')
@observer
export class NewTweet extends React.Component {

    tweet() {
        this.props.feedStore.postTweet(this.state.tweetText, this.props.close);
    }

    transformY = new Animated.Value(Dimensions.get('window').height);

    state = {
        tweetText: ''
    }

    componentDidMount() {
        const { height } = Dimensions.get('window');
        Animated.timing(this.transformY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <Animated.View ref="view" style={[
                styles.newTweetContainer,
                 {
                    width,
                    height,
                    transform: [{ translateY: this.transformY }]
                }]}>
                <View style={styles.header}>
                    <Avatar
                        small
                        rounded
                        source={profilePic}
                        onPress={() =>
                            this.props.navigation.navigate("profile", { user: this.props.user  })
                        }
                        activeOpacity={0.7} />
                    <TouchableOpacity onPress={() => {this.props.close();}}>
                        <Icon name="ios-close" type="ionicon" size={32} color="#1DA1F3" />
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
                    <View style={styles.formContainer}>
                        <FormInput
                            multiline
                            containerStyle={{
                                flex: 1
                            }}
                            onChangeText={
                                tweetText =>    
                                    this.setState({ tweetText })} placeholder="What's happening?"
                        />
                    </View>
                    <View style={styles.tweetBtnContainer}>
                        <Button
                            style={styles.tweetBtn}
                            title="Tweet"
                            borderRadius={20}
                            backgroundColor="#1DA1F3"
                            onPress={() => this.tweet()} />
                    </View>
                </KeyboardAvoidingView>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 10 
    },
    newTweetContainer: {
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'white',
        paddingTop: 20,
        top: -40,
        right: -10
    },
    tweetBtnContainer: { 
        flex: 1, 
        justifyContent: 'center' 
    },
    tweetBtn: {
        width: 100,
        alignSelf: 'flex-end'
    },
    keyboardView: { 
        flex: 1, 
        justifyContent: 'space-between' 
    },
    formContainer: { flex: 3 }
})