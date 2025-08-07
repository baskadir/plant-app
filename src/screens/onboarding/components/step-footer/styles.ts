import { StyleSheet } from 'react-native';
import { COLORS } from '@/utils/constants/colors.ts';

export default StyleSheet.create({
    buttonContainer: {
        marginTop: -90,
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 4,
        backgroundColor: 'rgba(19, 35, 27, 0.25)',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: COLORS.MAIN_TEXT,
        width: 10,
        height: 10,
        borderRadius: 5,
    },
})
