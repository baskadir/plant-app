import { DimensionValue, Text, TouchableOpacity } from 'react-native';
import styles from '@/components/button/styles.ts';
import { COLORS } from '@/utils/constants/colors.ts';

type ButtonProps = {
    onPress: () => void;
    title: string;
    bgColor?: string;
    disabled?: boolean;
    width?: DimensionValue;
    height?: DimensionValue;
    borderRadius?: number;
};

const Button = ({
    title,
    onPress,
    disabled,
    width = '100%',
    height = 50,
    borderRadius = 10,
    bgColor = COLORS.PRIMARY,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgColor, width: width, height: height, borderRadius: borderRadius }]}
            disabled={disabled}
            onPress={onPress}
            activeOpacity={1}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
