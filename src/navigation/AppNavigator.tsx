import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen.tsx';
import PaywallScreen from '../screens/paywall/PaywallScreen.tsx';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import { RootStackParamList } from '../types/navigation.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Paywall" component={PaywallScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
