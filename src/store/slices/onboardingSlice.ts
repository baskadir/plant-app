import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingState {
    currentStep: number;
    totalSteps: number;
    isCompleted: boolean;
}

const initialState: OnboardingState = {
    currentStep: 0,
    totalSteps: 3,
    isCompleted: false,
};

export const checkOnboardingStatus = createAsyncThunk(
    'onboarding/checkStatus',
    async () => {
        const status = await AsyncStorage.getItem('onboardingCompleted');
        return status === 'true';
    }
);

export const completeOnboarding = createAsyncThunk(
    'onboarding/complete',
    async () => {
        await AsyncStorage.setItem('onboardingCompleted', 'true');
        return true;
    }
);

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.currentStep < state.totalSteps - 1) {
                state.currentStep += 1;
            }
        },
        prevStep: (state) => {
            if (state.currentStep > 0) {
                state.currentStep -= 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkOnboardingStatus.fulfilled, (state, action) => {
                state.isCompleted = action.payload;
            })
            .addCase(completeOnboarding.fulfilled, (state) => {
                state.isCompleted = true;
            });
    },
});

export const {
    nextStep,
    prevStep,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;