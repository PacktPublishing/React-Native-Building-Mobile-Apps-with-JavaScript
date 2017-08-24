import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { LayoutAnimation } from 'react-native';

const ButtonsBar = ({ onPress }) => (
    <View style={styles.topBar}>
        <TouchableOpacity style={styles.button} onPress={() =>
            onPress(1)}>
            <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() =>
            onPress(2)}>
            <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() =>
            onPress(3)}>
            <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
    </View>
)

export default class App extends React.Component {
    state = {
        items: 1
    }


    onPress = (items) => {
        const { configureNext, create, Properties, Types } = LayoutAnimation;
        const CustomLayoutAnimation = {
            duration: 100,
            create: {
                delay: 100,
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.2,
                initialVelocity: 1
            },
            update: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY
            },
            delete: {
                type: LayoutAnimation.Types.easeOut,
                property: LayoutAnimation.Properties.opacity
            },
        };
        configureNext(CustomLayoutAnimation)

        this.setState({
            items
        })
    }

    get items() {
        return Array(this.state.items)
            .fill(1)
            .map((item, index) =>
                <View style={styles.item} key={index} />
            );
    }


    render() {
        return (
            <View style={styles.container}>
                <ButtonsBar onPress={this.onPress} />
                <View style={styles.area}>
                    {this.items}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        backgroundColor: 'rgba(1,1,1,.1)',
        height: 90,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '20%',
        flexWrap: 'wrap'
    },
    item: {
        width: 50, 
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 25,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    area: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    collapsed: {
        flex: 0
    },
    red: {
        backgroundColor: 'red',
    },
    green: {
        backgroundColor: 'green'
    },
    blue: {
        backgroundColor: 'blue'
    }
})