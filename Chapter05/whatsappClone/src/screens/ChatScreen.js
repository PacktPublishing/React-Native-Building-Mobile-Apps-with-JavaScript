import React from 'react';
import { getMockData } from '../services/api';
import { View, ImageBackground, Text, StyleSheet, Button, FlatList } from 'react-native';

export default class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    state = {
        messages: []
    }

    componentDidMount() {
        getMockData().then((messages) => {
            this.setState({
                messages
            })
        });
    }
   
    
    getMessageRow(item) {
        return (
            <View style={[
                styles.listItem, item.incoming ?
                    styles.incomingMessage :
                    styles.outgoingMessage
            ]}>
                <Text>{item.message}</Text>
            </View>
        )
    } 

    render() {
        return (
            <ImageBackground
                style={styles.container} source={require('../assets/imgs/background.png')}> 
                <FlatList
                    data={this.state.messages}
                    renderItem={({ item }) =>
                        this.getMessageRow(item) 
                    }
                    keyExtractor={(item, index) => (`message-${index}`)}
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent', 
        width: '100%'
    },
    listItem: {
        width: '70%',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },
    incomingMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E1FFC7'
    } 
})