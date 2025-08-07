import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { getQuestionsAsync } from '@/store/slices/questionsSlice';
import { Question } from '@/types/api';

const QuestionCard = ({ question }: { question: Question }) => {
    return (
        <View style={styles.questionCard}>
            <Image source={{ uri: question.image_uri }} style={styles.questionImage} />
            <Text style={styles.questionTitle}>{question.title}</Text>
        </View>
    );
}

const QuestionList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { questions, loading, error } = useSelector((state: RootState) => state.questions);

    useEffect(() => {
        dispatch(getQuestionsAsync());
    }, [dispatch]);

    if (loading) {
        return (
            <View>
                <Text>Loading questions...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    const renderItem = ({ item }: { item: Question }) => (
        <QuestionCard question={item} />
    );

    return (
        <FlatList
            data={questions}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default QuestionList