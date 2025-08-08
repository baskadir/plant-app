import { COLORS } from "@/utils/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "#F6F6F6",
    },
    headerContent: {
        marginVertical: 20,
        marginHorizontal: 20,
        gap: 10,
        zIndex: 2,
    },
    headerImage: {
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        overflow: 'hidden',
        width: "100%",
        height: 80,
        resizeMode: "contain"
    },
    premiumBoxContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    questionListContainer: {
        marginLeft: 20,
        marginBottom: 24,
    },
    questionListTitle: {
        fontFamily: "Rubik-Medium",
        fontSize: 15,
        color: COLORS.MAIN_TEXT,
        marginVertical: 12,
    },
    categoryListContainer: {
        flex: 1,
        marginHorizontal: 15.5,
    },
});