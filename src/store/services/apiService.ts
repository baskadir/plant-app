import axios from 'axios';
import { CategoriesResponse, Question } from '@/types/api.ts';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export const fetchCategories = async (): Promise<CategoriesResponse> => {
    try {
        const response = await apiClient.get('/getCategories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchQuestions = async (): Promise<Question[]> => {
    try {
        const response = await apiClient.get('/getQuestions');
        return response.data;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
};