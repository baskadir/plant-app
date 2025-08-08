import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101E17"
    },
    imageContainer: {
        position: "relative",
        flex: 0.6,
    },
    bottomContainer: {
        paddingHorizontal: 20,
        flex: 0.4,
        paddingBottom: 20,
        justifyContent: "space-between",
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
    closeButton: {
        position: "absolute",
        top: 40,
        right: 20,
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        justifyContent: "center",
        alignItems: "center",
    },
    closeButtonText: {
        color: "#FFFFFF",
        fontFamily: "Rubik-SemiBold",
        fontSize: 10,
    },
    featureList: {
        paddingBottom: 16,
    },
    featureContainer: {
        position: "absolute",
        paddingLeft: 20,
        bottom: 0,
    },
    featureTitle: {
        fontSize: 28,
        fontFamily: "Rubik-Bold",
        color: "#FFFFFF",
    },
    featureRegular: {
        fontFamily: "Rubik-Regular",
    },
    featureSubtitle: {
        fontFamily: "Rubik-Light",
        fontSize: 17,
        color: "rgba(255, 255, 255, 0.7)",
        marginBottom: 20,
    },
    featureCard: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: 20,
        marginRight: 5,
        justifyContent: "center",
        width: width * 0.4,
        height: 130,
    },
    featureCardIconContainer: {
        backgroundColor: "rgba(0,0,0, 0.24)",
        width: 36,
        height: 36,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    featureCardTitle: {
        fontFamily: "Rubik-Medium",
        fontSize: 20,
        color: "#FFFFFF",
    },
    featureCardDescription: {
        fontFamily: "Rubik-Regular",
        fontSize: 13,
        color: "rgba(255, 255, 255, 0.7)",
    },
    subscriptionPlanContainer: {
        paddingVertical: 10,
        gap: 10,
        marginBottom: 10,
    },
    subscriptionPlan: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: 14,
        width: "100%",
        flexDirection: "row",
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 0.5,
        height: 60,
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
    },
    subscriptionPlanCheck: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
    subscriptionPlanCheckInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
    },
    subscriptionPlanTitle: {
        fontFamily: "Rubik-Medium",
        fontSize: 16,
        color: "#FFFFFF",
    },
    subscriptionPlanDescription: {
        fontFamily: "Rubik-Light",
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.7)",
    },
    subscriptionPlanSelected: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "#28AF6E",
        borderWidth: 1.5,
    },
    subscriptionPlanCheckSelected: {
        backgroundColor: "#28AF6E",
        justifyContent: "center",
        alignItems: "center",
    },
    yearlyDiscount: {
        fontFamily: "Rubik-Medium",
        position: "absolute",
        top: 0,
        right: 0,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderTopRightRadius: 13,
        borderBottomLeftRadius: 24,
        backgroundColor: "#28AF6E",
        fontSize: 12,
        color: "#ffffff",
        fontWeight: 500,
        lineHeight: 18,
    },
    subscriptionPlanWarning: {
        fontFamily: "Rubik-Light",
        fontSize: 9,
        color: "rgba(255, 255, 255, 0.52)",
        textAlign: "center",
        marginTop: 10,
    },
    footer: {
        fontFamily: "Rubik-Regular",
        fontSize: 11,
        color: "rgba(255, 255, 255, 0.52)",
        textAlign: "center",
        marginTop: 10,
    },
});
