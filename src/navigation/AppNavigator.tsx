import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '@/screens/onboarding/OnboardingScreen';
import PaywallScreen from '@/screens/paywall/PaywallScreen';
import HomeScreen from '@/screens/home/HomeScreen';
import { RootStackParamList } from '@/types/navigation';
import GetStartedScreen from '@/screens/get-started/GetStartedScreen.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="GetStarted"
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
