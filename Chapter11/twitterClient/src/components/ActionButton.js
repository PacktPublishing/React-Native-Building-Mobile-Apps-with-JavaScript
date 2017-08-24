import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Counter } from './Counter';

export const ActionButton = ({ action, name, counter }) => (
    <TouchableOpacity style={styles.container} onPress={action}>
        <Counter icon={name} counter={counter} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: 100,
        justifyContent: 'center'
    }
});