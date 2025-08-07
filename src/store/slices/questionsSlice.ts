import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Question } from '@/types/api.ts';
import { fetchQuestions } from '@/store/services/apiService.ts';

interface QuestionsState {
    questions: Question[];
    loading: boolean;
    error: string | null;
}

const initialState: QuestionsState = {
    questions: [],
    loading: false,
    error: null,
};

export const getQuestionsAsync = createAsyncThunk(
    'questions/getQuestions',
    async () => {
        const response = await fetchQuestions();
        return response;
    }
);

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuestionsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getQuestionsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.questions = action.payload;
            })
            .addCase(getQuestionsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch questions';
            });
    },
});

export default questionsSlice.reducer;