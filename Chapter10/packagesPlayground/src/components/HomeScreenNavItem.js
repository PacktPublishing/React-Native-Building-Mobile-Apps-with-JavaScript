import React from 'react';
import { TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { View } from 'react-native-animatable';
import { Text } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default ({ navigate, routeName, caption, iconName, isEntypo }) => {
    return (
        <View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.container}>
            <TouchableOpacity onPress={() => navigate(routeName)} style={styles.button}>
                { isEntypo ? <EntypoIcon name={iconName} style={styles.icon} size={20}/> : <Icon name={iconName} style={styles.icon} size={20} /> }
                <Text>{caption}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(1,1,1,.2)',
    },
    button: {
        flexDirection: 'row'
    },
    icon: {
        paddingRight: 10
    }
})