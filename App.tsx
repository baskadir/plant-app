import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator.tsx';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}

export default App;
