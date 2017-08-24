import React from 'react';
import Hyperlink from "react-native-hyperlink"; 
import { View } from 'react-native'
import { parseMessageForHashTags } from '../utils/messageParser';

export const ParsedMessage = ({ data, navigation }) => (
    <View style={{ flex: 1 }}>
        <Hyperlink linkStyle={{ color: "#2980b9" }} onPress={(url) => navigation.navigate('web', { url })}>
            <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
                {parseMessageForHashTags(data.text, data.id, navigation.navigate)}
            </View>
        </Hyperlink>
    </View>
)