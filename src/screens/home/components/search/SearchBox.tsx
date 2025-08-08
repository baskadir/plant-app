import { View, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';
import SearchIcon from '@/assets/icons/search.svg';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            console.log("Searching for:", searchQuery);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

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