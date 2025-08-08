import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 44,
        borderColor: 'rgba(60, 60, 67, 0.25)',
        borderWidth: 0.2,
        borderRadius: 12,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    searchInput: {
        fontFamily: 'Rubik-Regular',
        height: 44,
        flex: 1,
        fontSize: 16,
        color: '#AFAFAF',
    },
    searchIcon: {
        width: 20,
        height: 20,
        color: "#ABABAB"
    },
})