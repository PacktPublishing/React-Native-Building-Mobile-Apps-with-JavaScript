import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Home extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Button onPress={() =>
                        this.props.navigation.navigate('home')}
                        title="Navigate to Home Screen" />
                </View> 
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})