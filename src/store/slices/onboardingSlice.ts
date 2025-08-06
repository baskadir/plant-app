import { createSlice } from '@reduxjs/toolkit';

interface OnboardingState {
  currentStep: number;
  totalSteps: number;
  isCompleted: boolean;
  showPaywall: boolean;
}

const initialState: OnboardingState = {
  currentStep: 0,
  totalSteps: 3,
  isCompleted: false,
  showPaywall: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < state.totalSteps - 1) {
        state.currentStep += 1;
      } else {
        state.showPaywall = true;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 0) {
        state.currentStep -= 1;
      }
    },
    showPaywall: (state) => {
      state.showPaywall = true;
    },
    completeOnboarding: (state) => {
      state.isCompleted = true;
      state.showPaywall = false;
    },
    resetOnboarding: () => {
      return initialState;
    },
  },
});

export const {
  nextStep,
  prevStep,
  showPaywall,
  completeOnboarding,
  resetOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;