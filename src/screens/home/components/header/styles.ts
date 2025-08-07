import { COLORS } from "@/utils/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerHelloText: {
        fontSize: 16,
        letterSpacing: 0.07,
        color: COLORS.MAIN_TEXT
    },
    headerText: {
        fontSize: 24,
        letterSpacing: 0.35,
        lineHeight: 28,
        color: COLORS.MAIN_TEXT,
        fontWeight: 500
    }
});