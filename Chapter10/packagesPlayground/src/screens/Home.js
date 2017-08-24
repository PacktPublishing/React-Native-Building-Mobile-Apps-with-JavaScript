import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HomeScreenNavItem from '../components/HomeScreenNavItem';

const MENU = [
    { 
        caption: 'Shoutem',
        routeName: 'shoutem',
        iconName: "mobile"
    },
    {
        caption: 'NativeBase',
        routeName: 'nativeBase',
        iconName: 'mobile'
    },
    {
        caption: 'react-native-maps',
        routeName: 'maps',
        iconName: 'map-marker'
    },
    {
        caption: 'Image Picker',
        routeName: 'imagepicker',
        iconName: 'image'
    },
    {
        caption: 'Video',
        routeName: 'video',
        iconName: 'tv'
    }, 
    {
        caption: 'Toasts',
        routeName: 'toasts',
        iconName: 'comment'
    },
    {
        caption: 'Camera',
        routeName: 'camera',
        iconName: 'camera'
    },
    {
        caption: 'Push Notifications',
        routeName: 'pn',
        iconName: 'notification',
        isEntypo: true
    }
]

export default Home = ({ navigation }) => (
    <FlatList
        style={styles.container}
        data={MENU}
        renderItem={({ item }) => (
            <HomeScreenNavItem { ...item } navigate={navigation.navigate} />
        )}
        keyExtractor={(item, index) => (`navItem-${index}`)}
    />
)
Home.navigationOptions = ({ navigation }) => ({
    title: "Selected packages list"
})

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})