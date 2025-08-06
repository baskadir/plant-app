import { Image, Text, View } from 'react-native';

import styles from '@/screens/onboarding/components/step-one/styles.ts';

const StepOne = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Take a photo to</Text>
        <View style={styles.underlineContainer}>
          <Text style={[styles.title, styles.bold]}>identify</Text>
          <Image
            source={require('@/assets/images/underline.png')}
            style={styles.underline}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}> the plant!</Text>
      </View>

      <Image
        source={require('@/assets/images/step-one-plant.png')}
        style={styles.plantImage}
        resizeMode="contain"
      />

      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/step-one-phone.png')}
          style={styles.phoneImage}
          resizeMode="contain"
        />
        <Image
          source={require('@/assets/images/step-one-scan.png')}
          style={styles.scanImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default StepOne;
