import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '@/types/api.ts';
import { fetchCategories } from '@/store/services/apiService.ts';

interface CategoriesState {
    categories: Category[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoriesState = {
    categories: [],
    loading: false,
    error: null,
};

export const getCategoriesAsync = createAsyncThunk(
    'categories/getCategories',
    async () => {
        const response = await fetchCategories();
        return response.data;
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategoriesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategoriesAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch categories';
            });
    },
});

export default categoriesSlice.reducer;