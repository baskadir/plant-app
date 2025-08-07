import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from 'node_modules/@react-navigation/bottom-tabs/lib/typescript/src/types';

export type RootStackParamList = {
    GetStarted: undefined;
    Onboarding: undefined;
    MainTab: undefined;
}

// Tab Navigator Types
export type TabParamList = {
    Home: undefined;
    Diagnose: undefined;
    Scan: undefined;
    MyGarden: undefined;
    Profile: undefined;
}

export type GetStartedNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;
export type OnboardingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
export type MainTabNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainTab'>;

export type HomeNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Home'>,
    NativeStackNavigationProp<RootStackParamList>
>;

export type DiagnoseNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Diagnose'>,
    NativeStackNavigationProp<RootStackParamList>
>;

export type ScanNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Scan'>,
    NativeStackNavigationProp<RootStackParamList>
>;

export type MyGardenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'MyGarden'>,
    NativeStackNavigationProp<RootStackParamList>
>;

export type ProfileNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Profile'>,
    NativeStackNavigationProp<RootStackParamList>
>;

export type GetStartedRouteProp = RouteProp<RootStackParamList, 'GetStarted'>;
export type OnboardingRouteProp = RouteProp<RootStackParamList, 'Onboarding'>;
export type MainTabRouteProp = RouteProp<RootStackParamList, 'MainTab'>;

export type HomeRouteProp = RouteProp<TabParamList, 'Home'>;
export type DiagnoseRouteProp = RouteProp<TabParamList, 'Diagnose'>;
export type ScanRouteProp = RouteProp<TabParamList, 'Scan'>;
export type MyGardenRouteProp = RouteProp<TabParamList, 'MyGarden'>;
export type ProfileRouteProp = RouteProp<TabParamList, 'Profile'>;
