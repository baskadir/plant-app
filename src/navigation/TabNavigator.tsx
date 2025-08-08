import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/home/HomeScreen";
import HomeIcon from "@/assets/icons/home.svg";
import DiagnoseIcon from "@/assets/icons/diagnose.svg";
import MyGardenIcon from "@/assets/icons/mygarden.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import ScanIcon from "@/assets/icons/scan.svg";
import { COLORS } from "@/utils/constants/colors";

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


function HomeTabBarIcon({ focused }: { focused: boolean }) {
    return <HomeIcon width={24} height={24} color={focused ? COLORS.PRIMARY : "#BDBDBD"} />;
}

function DiagnoseTabBarIcon({ focused }: { focused: boolean }) {
    return <DiagnoseIcon width={24} height={24} color={focused ? COLORS.PRIMARY : "#BDBDBD"} />;
}

function ScanTabBarIcon() {
    return <ScanIcon width={24} height={24} color="white" />;
}

function MyGardenTabBarIcon({ focused }: { focused: boolean }) {
    return <MyGardenIcon width={24} height={24} color={focused ? COLORS.PRIMARY : "#BDBDBD"} />;
}

function ProfileTabBarIcon({ focused }: { focused: boolean }) {
    return <ProfileIcon width={24} height={24} color={focused ? COLORS.PRIMARY : "#BDBDBD"} />;
}

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
                    tabBarIcon: HomeTabBarIcon
                }}
            />
            <Tab.Screen
                name="Diagnose"
                component={DiagnoseScreen}
                options={{
                    tabBarIcon: DiagnoseTabBarIcon
                }}
            />
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarIcon: ScanTabBarIcon,
                    tabBarButton: CustomTabBarButton,
                    tabBarLabelStyle: { display: 'none' }
                }}
            />
            <Tab.Screen
                name="My Garden"
                component={MyGardenScreen}
                options={{
                    tabBarIcon: MyGardenTabBarIcon
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ProfileTabBarIcon
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