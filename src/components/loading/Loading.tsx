import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import { COLORS } from "@/utils/constants/colors";

type LoadingProps = {
    size?: number | "small" | "large";
    color?: string;
};

const Loading = ({ size = "small", color = COLORS.PRIMARY }: LoadingProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

export default Loading;
