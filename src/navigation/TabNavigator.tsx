import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/home/HomeScreen";

// Placeholder components for other screens
function DiagnoseScreen() {
    return <View style={styles.screen} />;
}
function MyGardenScreen() {
    return <View style={styles.screen} />;
}
function ProfileScreen() {
    return <View style={styles.screen} />;
}
function ScanScreen() {
    return <View style={styles.screen} />;
}

const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }: BottomTabBarButtonProps) {
    return (
        <TouchableOpacity
            style={styles.centerButtonContainer}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.centerButton}>{children}</View>
        </TouchableOpacity>
    );
}

const TabBarIcon = ({ source }: { source: any }) => (
    <Image
        source={source}
        style={styles.icon}
    />
);

// use svg for icons in real app, do not use png
const HomeTabIcon = () => (
    <TabBarIcon source={require('@/assets/icons/icon-home.png')} />
);

const DiagnoseTabIcon = () => (
    <TabBarIcon source={require('@/assets/icons/icon-diagnose.png')} />
);

const MyGardenTabIcon = () => (
    <TabBarIcon source={require('@/assets/icons/icon-mygarden.png')} />
);

const ProfileTabIcon = () => (
    <TabBarIcon source={require('@/assets/icons/icon-profile.png')} />
);

const ScanTabIcon = () => (
    <TabBarIcon source={require('@/assets/icons/icon-scan.png')} />
);


export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 50,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarActiveTintColor: "#1abc9c",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: HomeTabIcon,
                }}
            />
            <Tab.Screen
                name="Diagnose"
                component={DiagnoseScreen}
                options={{
                    tabBarIcon: DiagnoseTabIcon,
                }}
            />
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarIcon: ScanTabIcon,
                    tabBarButton: CustomTabBarButton,
                    tabBarLabelStyle: { display: 'none' }
                }}
            />
            <Tab.Screen
                name="My Garden"
                component={MyGardenScreen}
                options={{
                    tabBarIcon: MyGardenTabIcon,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ProfileTabIcon,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    centerButtonContainer: {
        top: -20,
        justifyContent: "center",
        alignItems: "center",
    },
    centerButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 4,
        borderColor: "rgba(255, 255, 255, 0.24)",
        backgroundColor: "#2CCC80",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    screen: {
        flex: 1,
    }
});