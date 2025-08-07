import { Image, ScrollView, Text, View } from 'react-native';
import Header from './components/header/Header';
import SearchBox from './components/search/SearchBox';
import PremiumBox from './components/premium-box/PremiumBox';
import QuestionList from './components/questions/QuestionList';
import CategoryList from './components/categories/CategoryList';
import styles from './styles';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <Header />
                    <SearchBox />
                </View>
                <Image
                    source={require('@/assets/images/home-header.png')}
                    style={styles.headerImage}
                />
            </View>
            <View style={styles.premiumBoxContainer}>
                <PremiumBox />
            </View>
            <View style={styles.questionListContainer}>
                <Text style={styles.questionListTitle}>
                    Get Started
                </Text>
                <QuestionList />
            </View>
            <View style={styles.categoryListContainer}>
                <CategoryList />
            </View>
        </ScrollView>
    )
}

export default HomeScreen;
