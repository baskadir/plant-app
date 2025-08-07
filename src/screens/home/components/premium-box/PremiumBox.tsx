import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles';

const PremiumBox = () => {
    return (
        <TouchableOpacity style={styles.premiumBoxButton}>
            <View style={styles.leftContent}>
                <Image
                    source={require('@/assets/icons/icon-message.png')}
                    style={styles.icon}
                />
                <View>
                    <Text style={styles.title}>FREE Premium Available</Text>
                    <Text style={styles.subtitle}>Tap to upgrade your account</Text>
                </View>
            </View>
            <Image
                source={require('@/assets/icons/icon-arrow-right.png')}
                style={styles.iconRight}
            />
        </TouchableOpacity>
    )
}

export default PremiumBox