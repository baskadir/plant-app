import { StyleSheet } from "react-native";

export default StyleSheet.create({
    questionCard: {
        width: 240,
        height: 164,
        borderRadius: 12,
        overflow: 'hidden',
    },
    questionImage: {
        width: '100%',
        height: "100%",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        resizeMode: 'contain',
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