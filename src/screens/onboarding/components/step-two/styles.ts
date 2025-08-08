import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '@/utils/constants/colors.ts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3FAFF',
        paddingVertical: 30,
    },
    titleContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 20,
    },
    title: {
        fontSize: 28,
        fontFamily: "Rubik-Medium",
        textAlign: 'left',
        color: COLORS.MAIN_TEXT,
    },
    bold: {
        fontFamily: "Rubik-ExtraBold",
    },
    underline: {
        position: 'absolute',
        bottom: -16,
        left: 0,
        width: 150,
        height: 16,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    phoneImage: {
        width: width * 0.7,
        zIndex: 2,
        marginTop: 60,
    },
    imageBg: {
        position: "absolute",
        top: 0,
        width: '100%',
        zIndex: 1,
    },
    imageTopRight: {
        position: 'absolute',
        zIndex: 5,
        width: 180,
        top: -40,
        right: 10,
    }
});
