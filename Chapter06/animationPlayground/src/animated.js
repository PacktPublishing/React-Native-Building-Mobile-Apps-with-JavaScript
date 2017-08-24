import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet, Animated, Easing} from 'react-native';

export default class App extends React.Component {
    state = {
        items: 5,
        fadeAnim: new Animated.Value(0),
        slideAnim: new Animated.Value(-100),
        scaleAnim: new Animated.Value(0)
    }

    componentDidMount() {
        const { timing } = Animated;
        const { scaleAnim, fadeAnim, slideAnim } = this.state;
        timing(
            fadeAnim, {
                duration: 3000,
                delay: 400,
                easing: Easing.bounce,
                toValue: 1,
                useNativeDriver: true
            }
        ).start();
        timing(
            slideAnim, { toValue: 0 }
        ).start();
        timing(
            scaleAnim, { toValue: 1 }
        ).start();
    }


    get items() {
        return Array(this.state.items)
            .fill(1)
            .map((item, index) => {
                switch (index) {
                    case 1:
                        return (
                            <Animated.View
                                style={[styles.item, {
                                    transform: [
                                        { scale: this.state.scaleAnim }
                                    ]}
                                ]} key = { index } >
                                <Text style={styles.itemText}>{index}</Text>
                            </Animated.View >
                        );
                    // return Animated.View for relevant circle with index 1
                    case 2:
                        return (
                            <Animated.View
                                style={[styles.item, {
                                    transform: [
                                        { translateY: this.state.slideAnim }
                                    ]}
                                ]} key={index} >
                                <Text style={styles.itemText}>{index}</Text>
                            </Animated.View >
                        );
                    // return Animated.View for relevant circle with index 2
                    case 3:
                        return (
                            <Animated.View
                                style={[styles.item, {
                                    transform: [
                                        { translateX: this.state.slideAnim }
                                    ]}
                                ]} key={index} >
                                <Text style={styles.itemText}>{index}</Text>
                            </Animated.View >
                        );
                    // return Animated.View for relevant circle with index 3
                    case 4:
                        return (
                            <Animated.View
                                style={[styles.item, {
                                    transform: [
                                        {
                                            translateX: this.state.slideAnim
                                        },
                                        {
                                            translateY: this.state.slideAnim
                                        }
                                    ]}
                                ]} key={index} >
                                <Text style={styles.itemText}>{index}</Text>
                            </Animated.View >
                        );
                    // return Animated.View for relevant circle with index 4
                    default:
                        return (
                            <Animated.View
                                style={[styles.item, {
                                    opacity: this.state.fadeAnim
                                }]} key={index}>
                                <Text style={styles.itemText}>{index}</Text>
                            </Animated.View>
                        );
                }
            });
    }


    render() {
        return (
            <View style={styles.container}>
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
        borderWidth: 0,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        backgroundColor: 'transparent',
        color: 'white'
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