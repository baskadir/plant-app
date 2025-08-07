import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import StepOne from '@/screens/onboarding/components/step-one/StepOne.tsx';
import StepTwo from '@/screens/onboarding/components/step-two/StepTwo.tsx';
import { RootState } from '@/store';
import Paywall from '@/screens/onboarding/components/paywall/Paywall.tsx';
import StepFooter from '@/screens/onboarding/components/step-footer/StepFooter.tsx';

const OnboardingScreen = () => {
    const currentStep = useSelector(
        (state: RootState) => state.onboarding.currentStep,
    );

    return (
        <View style={styles.container}>
            {currentStep === 0 && <StepOne />}
            {currentStep === 1 && <StepTwo />}
            <View style={styles.footerContainer}>
                {(currentStep === 0 || currentStep === 1) && <StepFooter />}
            </View>
            {currentStep === 2 && <Paywall />}
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footerContainer: {
        paddingHorizontal: 20,
        zIndex: 3,
    },
});
