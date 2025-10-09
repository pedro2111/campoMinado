import params from '../params'
import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Field from './Field'

export default function MineField(props) {

    const rows = props.board.map((row, rowIndex) => {
        const columns = row.map((field, columnIndex) => (
            <Field
                key={`${rowIndex}-${columnIndex}`}
                {...field}
                onOpen={() => props.onOpenField(rowIndex, columnIndex)}
            />
        ))
        return (
            <View key={rowIndex} style={{ flexDirection: 'row' }}>
                {columns}
            </View>
        )
    })

    return <View style={styles.container}>{rows}</View>
}


{/* 
    const rows = props.board.map((row, rowIndex) => (
        row.map((column, columnIndex) => (
            <Field
                key={`${rowIndex}-${columnIndex}`}
                {...column}
                onOpen={() => props.onOpenField(rowIndex, columnIndex)}
            />
        ))
    ))
    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
    */}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#EEE',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})