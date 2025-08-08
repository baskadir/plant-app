import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { getQuestionsAsync } from '@/store/slices/questionsSlice';
import { Question } from '@/types/api';
import Loading from '@/components/loading/Loading';

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
        return <Loading size="large" />;
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

    const getItemLayout = (data: any, index: number) => ({
        length: 124, // Adjust based on your item width + gap
        offset: 124 * index,
        index,
    });

    const keyExtractor = (item: Question) => item.id.toString();


    return (
        <FlatList
            data={questions}
            horizontal
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            initialNumToRender={3}
            maxToRenderPerBatch={5}
            removeClippedSubviews={true}
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default QuestionList