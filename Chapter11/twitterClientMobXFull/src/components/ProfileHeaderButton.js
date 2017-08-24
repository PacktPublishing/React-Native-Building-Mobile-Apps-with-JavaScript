import React from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import profilePic from '../assets/profile_pic.jpg';
import { observer, inject } from 'mobx-react';

export const ProfileHeaderButton = inject("userStore")(
    observer(({ navigation, userStore: { userData: user } }) => (
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
);