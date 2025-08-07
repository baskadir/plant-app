import { View, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './styles';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/icons/icon-search.png')}
                style={styles.searchIcon}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Search for plants"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
        </View>
    )
}

export default SearchBox