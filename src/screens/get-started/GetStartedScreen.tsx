import { Image, Text, View } from 'react-native';
import styles from '@/screens/get-started/styles.ts';
import Button from '@/components/button/Button.tsx';
import { GetStartedNavigationProp } from '@/types/navigation.ts';

type GetStartedScreenProps = {
  navigation: GetStartedNavigationProp;
};

const GetStartedScreen = ({ navigation }: GetStartedScreenProps) => {
  const handleOnPress = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Welcome to {''}
          <Text style={styles.appName}>PlantApp</Text>
        </Text>
        <Text style={styles.subTitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <Image
        source={require('@/assets/images/get-started.png')}
        style={styles.image}
      />
      <View style={styles.bottomContainer}>
        <Button onPress={handleOnPress} title={'Get Started'} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            By tapping next, you are agreeing to PlantID
          </Text>
          <Text style={[styles.bottomText, styles.bottomLink]}>
            Terms of Use <Text style={styles.ampersand}>&</Text> Privacy Policy.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GetStartedScreen;
