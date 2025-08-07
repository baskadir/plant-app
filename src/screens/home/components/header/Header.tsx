import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Header = () => {
    return (
        <View>
            <Text style={styles.headerHelloText}>Hi, plant lover!</Text>
            <Text style={styles.headerText}>Good Afternoon! ⛅</Text>
        </View>
    )
}

export default Header