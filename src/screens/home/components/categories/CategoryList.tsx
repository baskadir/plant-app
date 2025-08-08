import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { RootState } from '@/store';
import { Category } from '@/types/api';
import styles from './styles';
import Loading from '@/components/loading/Loading';
import FastImage from '@d11/react-native-fast-image';
import { useSelector } from 'react-redux';

const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <View style={styles.container}>
            {category.image && (
                <FastImage
                    source={{ uri: category.image.url, priority: FastImage.priority.normal }}
                    style={styles.image}
                />
            )}
            <Text style={styles.title}>
                {category.name}
            </Text>
        </View>
    );
}

const CategoryList = () => {
    const { categories, loading, error } = useSelector((state: RootState) => state.categories);

    if (loading) {
        return (
            <Loading size="large" />
        );
    }

    if (error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    const renderCategoryItem = ({ item }: { item: Category }) => (
        <CategoryCard category={item} />
    );

    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCategoryItem}
            contentContainerStyle={{
                gap: 16,
                paddingBottom: 20,
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            scrollEnabled={false}
        />
    );
}

export default CategoryList