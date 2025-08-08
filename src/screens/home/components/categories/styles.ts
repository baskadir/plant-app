import { COLORS } from "@/utils/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 152,
        borderRadius: 12,
        marginHorizontal: 5.5,
        backgroundColor: "#F4F6F6",
        borderColor: "#rgba(60, 60, 67, 0.1)",
        borderWidth: 0.5,
        overflow: 'hidden',
    },
    image: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    title: {
        fontFamily: "Rubik-Medium",
        fontSize: 16,
        color: COLORS.MAIN_TEXT,
        padding: 8,
        maxWidth: 100,
    },
});