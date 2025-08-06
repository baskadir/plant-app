import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/button/Button.tsx';
import styles from '@/screens/onboarding/components/step-footer/styles.ts';
import { nextStep } from '@/store/slices/onboardingSlice.ts';
import { RootState } from '@/store';

const StepFooter = () => {
  const {currentStep, totalSteps} = useSelector((state: RootState) => state.onboarding);
  const dispatch = useDispatch();

  const handleOnPress = () => {
    dispatch(nextStep());
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button onPress={handleOnPress} title={'Continue'} />
      </View>

      <View style={styles.dots}>
        {Array.from({ length: totalSteps }, (_, i) => (
          <View key={i} style={[styles.dot, currentStep === i ? styles.activeDot : null]} />
        ))}
      </View>
    </>
  );
};

export default StepFooter;
