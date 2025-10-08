import params from '../params'
import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Field from './Field'

export default function MineField (props){
    const rows = props.board.map((row, rowIndex) => (
        row.map((column, columnIndex) => (
            <Field
                key={`${rowIndex}-${columnIndex}`}
                {...column}
            />
        ))
    ))
    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#EEE',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})