import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '@/utils/constants/colors.ts';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3FAFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: "Rubik-Medium",
        fontSize: 28,
        textAlign: 'left',
        color: COLORS.MAIN_TEXT,
        letterSpacing: -1,
        marginLeft: 10,
    },
    bold: {
        fontFamily: "Rubik-ExtraBold",
    },
    titleContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    underlineContainer: {
        position: "relative",
    },
    underline: {
        position: 'absolute',
        bottom: -10,
        left: -10,
        width: 150,
        height: 12,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 30,
    },
    phoneImage: {
        marginTop: 40,
        height: height * 0.8,
    },
    scanImage: {
        position: 'absolute',
        top: 0,
    },
    plantImage: {
        position: "absolute",
        top: 135,
        width: 280,
        height: 280,
    }
});
