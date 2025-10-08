import params from '../params'
import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Mine(props) {
    return (
        <View style={[styles.container]}>
            <View style={styles.coreMine}></View>
            <View style={styles.line}></View>
            <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]}></View>
            <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]}></View>
            <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine: {
        width: 14,
        height: 14,
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    line: {
        position: 'absolute',
        width: 20,
        height: 3,
        backgroundColor: 'black',
    },
})

