import React from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import profilePic from '../assets/profile_pic.jpg';

export const ProfileHeaderButton = ({ navigation }) => (
    <View style={{ marginLeft: 10 }}>
        <Avatar 
            small 
            rounded 
            source={profilePic} 
            onPress={() => 
                navigation.navigate("profile")
            } 
            activeOpacity={0.7} />
    </View>
)