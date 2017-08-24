import React from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import profilePic from '../assets/profile_pic.jpg';
import { connect } from 'react-redux';

export const ProfileHeaderButton = connect(({ user }) => ({ user }))(({ navigation, user }) => (
    <View style={{ marginLeft: 10 }}>
        <Avatar 
            small 
            rounded 
            source={profilePic} 
            onPress={() => 
                navigation.navigate("profile", { user })
            } 
            activeOpacity={0.7} />
    </View>
))