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
        fontSize: 15,
        color: "#ffffff",
        fontWeight: 500,
        lineHeight: 20,
        letterSpacing: -0.24,
        position: 'absolute',
        bottom: 12,
        left: 12,
        height: 40,
        maxWidth: 200,
    },
    questionDescription: {
        fontSize: 14,
        color: '#666',
    },
})