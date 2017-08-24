import React from "react";
import { View, Text, StyleSheet } from "react-native";

export class Hashtag extends React.Component {
    static navigationOptions = ({ navigation }) => ({ 
        title: 'Hastag screen'
    });

    componentDidMount() {
        // console.log(this.props.navigation.state.params)
    }
    
    render() {
    return <View>
        <Text>Screen</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
    search: {
        width: 250,
        backgroundColor: 'transparent'
    }
})