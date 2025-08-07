import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { getCategoriesAsync } from '@/store/slices/categoriesSlice';
import { Category } from '@/types/api';
import styles from './styles';

const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <View style={styles.container}>
            {category.image && (
                <Image
                    source={{ uri: category.image.url }}
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
    const dispatch = useDispatch<AppDispatch>();
    const { categories, loading, error } = useSelector((state: RootState) => state.categories);

    useEffect(() => {
        dispatch(getCategoriesAsync());
    }, [dispatch]);

    if (loading) {
        return (
            <View>
                <Text>Loading categories...</Text>
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