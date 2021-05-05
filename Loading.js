import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Get the funcking Weather</Text>
    </View>); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        paddingHorizontal: 50,
        paddingVertical: 100,
        justifyContent: "flex-end"
    }, 
    text: {
        fontSize: 30,
        color: "#2c2c2c"
    }
});