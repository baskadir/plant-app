import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './styles';
import SearchIcon from '@/assets/icons/search.svg';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={styles.container}>
            <SearchIcon style={styles.searchIcon} />
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