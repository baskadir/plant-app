import { Image, Text, View } from 'react-native';

import styles from '@/screens/onboarding/components/step-two/styles.ts';

const StepTwo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Get plant
        </Text>
        <View>
          <Text style={[styles.title, styles.bold]}> care guides</Text>
          <Image
            source={require('@/assets/images/underline.png')}
            style={styles.underline}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/step-two-phone.png')}
          style={styles.phoneImage}
          resizeMode="contain"
        />

        <Image
          source={require('@/assets/images/step-two-bg.png')}
          style={styles.imageBg}
          resizeMode="cover"
        />

        <Image
          source={require('@/assets/images/step-two-top-right.png')}
          style={styles.imageTopRight}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default StepTwo;
