import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Question } from '@/types/api';
import Loading from '@/components/loading/Loading';
import FastImage from '@d11/react-native-fast-image';

const QuestionCard = ({ question }: { question: Question }) => {
    return (
        <View style={styles.questionCard}>
            <FastImage
                source={{ uri: question.image_uri, priority: FastImage.priority.normal }}
                resizeMode={FastImage.resizeMode.contain} style={styles.questionImage}
            />
            <Text style={styles.questionTitle}>{question.title}</Text>
        </View>
    );
}

const QuestionList = () => {
    const { questions, loading, error } = useSelector((state: RootState) => state.questions);

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