import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MessageHeader = ({ data }) => (
    <View style={styles.header}>
        <Text style={styles.bold}>
            {data.user.name}
        </Text>
        <Text style={styles.userAt}>
            @{data.user.screen_name}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    bold: {
        fontWeight: "bold"
    }
})