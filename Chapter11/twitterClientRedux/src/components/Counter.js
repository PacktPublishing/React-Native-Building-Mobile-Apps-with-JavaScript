import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";

export const Counter = ({ counter, icon, caption }) => {
    return icon ?
        <View style={styles.container}>
            <Icon name={icon} type="font-awesome" color="gray" size={12} />
            { counter > 0 && <Text>{counter}</Text> }
        </View> :
        counter ? 
        <View style={styles.container}>
            <Text style={styles.count}>{counter}</Text>
            <Text>{caption}</Text>
        </View>: false
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  count: {
      paddingRight: 10,
      fontWeight: 'bold'
  }
})