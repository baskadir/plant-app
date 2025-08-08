import { StyleSheet } from "react-native";

export default StyleSheet.create({
    premiumBoxButton: {
        height: 64,
        backgroundColor: "#24201A",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    icon: {
        resizeMode: "contain",
        width: 36,
        height: 36,
    },
    title: {
        fontFamily: "Rubik-Medium",
        color: "#E4B046",
        fontSize: 16,
    },
    subtitle: {
        fontFamily: "Rubik-Regular",
        color: "#E4B046",
        fontSize: 13,
    },
    iconRight: {
        resizeMode: "contain",
        color: "#D0B070"
    }
});