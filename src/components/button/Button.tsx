import { Text, TouchableOpacity } from 'react-native';
import styles from '@/components/button/styles.ts';
import { COLORS } from '@/utils/constants/colors.ts';

type ButtonProps = {
  onPress: () => void;
  title: string;
  bgColor?: string;
  disabled?: boolean;
};

const Button = ({
  title,
  onPress,
  disabled,
  bgColor = COLORS.PRIMARY,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
