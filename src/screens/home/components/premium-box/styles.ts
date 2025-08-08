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
        color: "#E4B046",
        fontSize: 16,
        letterSpacing: -0.32,
        lineHeight: 21,
        fontWeight: 500,
    },
    subtitle: {
        color: "#E4B046",
        fontSize: 13,
        letterSpacing: 0,
        lineHeight: 16,
    },
    iconRight: {
        resizeMode: "contain",
        color: "#D0B070"
    }
});