import { StyleSheet } from "react-native";

export default StyleSheet.create({
    questionCard: {
        width: 240,
        height: 164,
        borderRadius: 12,
        overflow: 'hidden',
    },
    questionImage: {
        width: 240,
        height: 164,
    },
    questionTitle: {
        fontFamily: "Rubik-Medium",
        fontSize: 15,
        color: "#ffffff",
        position: 'absolute',
        bottom: 12,
        left: 12,
        height: 40,
        maxWidth: 200,
    },
})