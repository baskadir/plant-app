import Button from "@/components/button/Button";
import { completeOnboarding } from "@/store/slices/onboardingSlice";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import styles from "./styles";
import ScanIcon from "@/assets/icons/scan.svg";
import SpeedoMeterIcon from "@/assets/icons/speedometer.svg";

interface Feature {
    icon: any;
    title: string;
    description: string;
}

const FEATURES: Feature[] = [
    {
        icon: <ScanIcon width={18} height={18} color="#FFFFFF" />,
        title: "Unlimited",
        description: "Plant identify.",
    },
    {
        icon: <SpeedoMeterIcon width={18} height={18} color="#FFFFFF" />,
        title: "Faster",
        description: "Process",
    },
    {
        icon: <SpeedoMeterIcon width={18} height={18} color="#FFFFFF" />,
        title: "Exclusive",
        description: "Access",
    }
]

const FeatureCard = ({ icon, title, description }: Feature) => (
    <View style={styles.featureCard}>
        <View style={styles.featureCardIconContainer}>
            {icon}
        </View>
        <Text style={styles.featureCardTitle}>{title}</Text>
        <Text style={styles.featureCardDescription}>{description}</Text>
    </View>
);

const Paywall = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [selectedSubscription, setSelectedSubscription] = useState<string | null>("yearly");
    const dispatch = useDispatch<AppDispatch>();

    const renderFeature = ({ item }: { item: Feature }) => (
        <FeatureCard
            icon={item.icon}
            title={item.title}
            description={item.description}
        />
    );

    const handleClose = async () => {
        await dispatch(completeOnboarding());
        navigation.navigate("MainTab");
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("@/assets/images/paywall.png")}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Text style={styles.closeButtonText}>
                        X
                    </Text>
                </TouchableOpacity>
                <View style={styles.featureContainer}>
                    <Text style={styles.featureTitle}>
                        PlantApp Premium
                    </Text>
                    <Text style={styles.featureSubtitle}>
                        Access All Features
                    </Text>
                    <FlatList
                        data={FEATURES}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderFeature}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={styles.featureList}
                        horizontal
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.subscriptionPlanContainer}>
                    <TouchableOpacity style={[styles.subscriptionPlan, selectedSubscription === "monthly" && styles.subscriptionPlanSelected]} onPress={() => setSelectedSubscription("monthly")}>
                        <View style={[styles.subscriptionPlanCheck, selectedSubscription === "monthly" && styles.subscriptionPlanCheckSelected]}>
                            {selectedSubscription === "monthly" && <View style={styles.subscriptionPlanCheckInner} />}
                        </View>
                        <View>
                            <Text style={styles.subscriptionPlanTitle}>1 Month</Text>
                            <Text style={styles.subscriptionPlanDescription}>$2.99/month, auto renewable</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.subscriptionPlan, selectedSubscription === "yearly" && styles.subscriptionPlanSelected]}
                        onPress={() => setSelectedSubscription("yearly")}>
                        <Text style={styles.yearlyDiscount}>
                            Save 50%
                        </Text>
                        <View style={[styles.subscriptionPlanCheck, selectedSubscription === "yearly" && styles.subscriptionPlanCheckSelected]}>
                            {selectedSubscription === "yearly" && <View style={styles.subscriptionPlanCheckInner} />}
                        </View>
                        <View>
                            <Text style={styles.subscriptionPlanTitle}>1 Year</Text>
                            <Text style={styles.subscriptionPlanDescription}>First 3 days free, then $529.99/year</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Button
                    title="Try free for 3 days"
                    height={52}
                    borderRadius={14}
                    onPress={() => { }}
                />
                <Text style={styles.subscriptionPlanWarning}>
                    After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
                </Text>
                <Text style={styles.footer}>
                    Terms  •  Privacy  •  Restore
                </Text>
            </View>
        </View>
    )
}

export default Paywall;
