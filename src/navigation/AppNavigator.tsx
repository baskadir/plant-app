import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '@/screens/onboarding/OnboardingScreen';
import PaywallScreen from '@/screens/paywall/PaywallScreen';
import HomeScreen from '@/screens/home/HomeScreen';
import { RootStackParamList } from '@/types/navigation';
import GetStartedScreen from '@/screens/get-started/GetStartedScreen.tsx';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { checkOnboardingStatus } from '@/store/slices/onboardingSlice';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isCompleted = useSelector((state: RootState) => state.onboarding.isCompleted);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const checkStatus = async () => {
            await dispatch(checkOnboardingStatus());
            setIsLoading(false);
        };

        checkStatus();
    }, [dispatch]);

    if (isLoading) {
        // loading spinner or splash screen
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={isCompleted ? "Home" : "GetStarted"}
            >
                <Stack.Screen name="GetStarted" component={GetStartedScreen} />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Paywall" component={PaywallScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
