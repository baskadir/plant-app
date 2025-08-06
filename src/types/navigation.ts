import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  GetStarted: undefined;
  Onboarding: undefined;
  Paywall: undefined;
  Home: undefined;
}

export type GetStartedNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;
export type OnboardingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
export type PaywallNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Paywall'>;
export type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type GetStartedRouteProp = RouteProp<RootStackParamList, 'GetStarted'>;
export type OnboardingRouteProp = RouteProp<RootStackParamList, 'Onboarding'>;
export type PaywallRouteProp = RouteProp<RootStackParamList, 'Paywall'>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
