import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import MessageIcon from '@/assets/icons/message.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

const PremiumBox = () => {
    return (
        <TouchableOpacity style={styles.premiumBoxButton}>
            <View style={styles.leftContent}>
                <MessageIcon style={styles.icon} />
                <View>
                    <Text style={styles.title}>FREE Premium Available</Text>
                    <Text style={styles.subtitle}>Tap to upgrade your account</Text>
                </View>
            </View>
            <ArrowRightIcon style={styles.iconRight} />
        </TouchableOpacity>
    )
}

export default PremiumBox